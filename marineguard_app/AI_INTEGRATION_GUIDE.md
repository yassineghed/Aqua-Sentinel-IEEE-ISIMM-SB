# AI Integration Guide: Linking YOLO Models

This guide outlines the recommended approach to integrate your two YOLO (You Only Look Once) AI models with the MarineGuard Next.js application.

## Overview

Since your Next.js application runs on the client-side (browser) and server-side (Node.js), and YOLO models are typically Python-based (using PyTorch or Ultralytics), the best practice is to **separate the AI logic into a dedicated backend API**.

**Architecture:**
`[Next.js Frontend]  <-- HTTP Requests (API) -->  [Python Backend (FastAPI/Flask)]  <-- Loads -->  [YOLO Models]`

This approach allows your heavy AI models to run efficiently on a server (potentially with GPU support) without bloating your frontend application.

## Step 1: Set up the Python Backend

We recommend using **FastAPI** for its speed and ease of use.

1.  **Create a new directory** for your backend (e.g., `marine-guard-api`).
2.  **Install dependencies**:
    ```bash
    pip install fastapi uvicorn ultralytics python-multipart pillow
    ```
3.  **Create `main.py`**:

```python
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from ultralytics import YOLO
from PIL import Image
import io

app = FastAPI()

# Allow your Next.js app to talk to this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # Adjust for production
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load your 2 models
# Ensure 'model1.pt' and 'model2.pt' are in the same folder or provide path
model_1 = YOLO("path/to/your/yolo-model-1.pt") # e.g., Invasive Species Detector
model_2 = YOLO("path/to/your/yolo-model-2.pt") # e.g., Fish Health/Size Analyzer

@app.post("/predict/species")
async def detect_species(file: UploadFile = File(...)):
    # Read image
    image_data = await file.read()
    image = Image.open(io.BytesIO(image_data))

    # Run Model 1
    results = model_1(image)
    
    # Process results to JSON
    detections = []
    for result in results:
        for box in result.boxes:
            detections.append({
                "class": result.names[int(box.cls)],
                "confidence": float(box.conf),
                "bbox": box.xyxy.tolist()[0]
            })
            
    return {"model": "species_detector", "detections": detections}

@app.post("/predict/health")
async def analyze_health(file: UploadFile = File(...)):
    # Read image
    image_data = await file.read()
    image = Image.open(io.BytesIO(image_data))

    # Run Model 2
    results = model_2(image)
    
    # Process results... (similar to above)
    # ...
            
    return {"model": "health_analyzer", "results": "..."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

## Step 2: Run the Backend

```bash
python main.py
```
Your API will be live at `http://localhost:8000`.

## Step 3: Connect Frontend (Next.js)

In your Next.js application (e.g., `components/screens/fish-identifier-screen.tsx`), you need to send the user's uploaded image to this new API.

### Example Code Snippet for Frontend

```typescript
import { useState } from 'react';

export default function AIReader() {
  const [result, setResult] = useState(null);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Call your Python API
      const response = await fetch("http://localhost:8000/predict/species", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);
      console.log("AI Prediction:", data);
    } catch (error) {
      console.error("Error connecting to AI model:", error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {result && (
        <div className="p-4 bg-gray-100 rounded mt-4">
          <h3 className="font-bold">Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
```

## Deployment Considerations

*   **Local Development**: Run `npm run dev` in one terminal (Frontend) and `python main.py` in another (Backend).
*   **Production**:
    *   Deploy Frontend to **Vercel**.
    *   Deploy Backend to a cloud provider that supports Python/Docker (e.g., **Render, Railway, AWS EC2, or Google Cloud Run**).
    *   Update the `fetch` URL in your frontend to point to the production backend URL.
