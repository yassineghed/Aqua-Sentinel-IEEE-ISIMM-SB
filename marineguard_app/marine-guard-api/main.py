from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
try:
    from ultralytics import YOLO
except ImportError:
    YOLO = None
    print("WARNING: 'ultralytics' not found. AI features will be unavailable.")

from PIL import Image
import io
import os

app = FastAPI()

# Allow your Next.js app to talk to this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow all origins for development
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the model
MODEL_PATH = "fish_model.pt"

model = None
if YOLO:
    try:
        if os.path.exists(MODEL_PATH):
            print(f"Loading model from {MODEL_PATH}...")
            model = YOLO(MODEL_PATH)
            print("Model loaded successfully!")
        else:
            print(f"WARNING: {MODEL_PATH} not found. Please place the file in the marine-guard-api directory.")
    except Exception as e:
        print(f"Error loading model: {e}")

@app.get("/")
def read_root():
    return {"status": "online", "model_loaded": model is not None}

@app.get("/classes")
def get_classes():
    if not model:
        # Fallback for demo/testing if model can't load
        return {"classes": ["Coris julis", "Serranus scriba", "Diplodus vulgaris"]} 
    return {"classes": model.names}

@app.post("/predict")
async def detect_fish(file: UploadFile = File(...)):
    if not model:
        # SIMULATION MODE: Return a fake result so the user can test the UI flow
        return {
            "model": "simulation_mode", 
            "detections": [{
                "class": "Coris julis", 
                "confidence": 0.95, 
                "bbox": [0, 0, 100, 100]
            }],
            "message": "Simulated detection (AI lib missing)"
        }
    
    try:
        # Read image
        image_data = await file.read()
        image = Image.open(io.BytesIO(image_data))

        # Run inference
        results = model(image)
        
        # Process results
        detections = []
        for result in results:
            for box in result.boxes:
                detections.append({
                    "class": result.names[int(box.cls)],
                    "confidence": float(box.conf),
                    "bbox": box.xyxy.tolist()[0]
                })
        
        # If no detections, return empty list
        return {
            "model": "fish_model", 
            "detections": detections,
            "message": "Detection successful" if detections else "No fish detected"
        }

    except Exception as e:
        print(f"Prediction error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    print("Starting API server...")
    uvicorn.run(app, host="0.0.0.0", port=8000)
