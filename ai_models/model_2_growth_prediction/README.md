# Model 2 – Fish Tracking and Population Flow Analysis

This model tracks individual fish with persistent IDs, counts their movement across virtual lines, and estimates population flow trends to support real-time marine ecosystem monitoring through temporal and behavioral analysis.

This model complements the detection model by adding **temporal and behavioral analysis**, (The tTracking ensures that the same fish is not counted multiple times)

---

## Model Type
- Object detection with tracking
- Video-based analysis
- Temporal population estimation
---

## ⚙ Setup Instructions (for Windows' user)

### 1. Create a virtual environment
```
python -m venv venv
venv\Scripts\activate
```
### 2. Install dependencies
```
pip install -r requirements.txt
```
## 🚀 Running the Model (Google Colab)

1. Open `training.ipynb` in Google Colab.
2. Install the required libraries inside Colab.
3. Upload or mount the dataset containing underwater videos.
4. Load the trained YOLO `.pt` model.
5. Run the notebook cells to:
   - Detect fish
   - Track unique fish IDs
   - Count fish crossing virtual lines
   - Generate annotated output videos

The notebook provides visual feedback including bounding boxes, tracking IDs, and live counts.

---

## Input
- Underwater video files (MP4 or similar)
- Pre-trained YOLO model weights
[![Watch the video](https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/model_2.png)](https://raw.githubusercontent.com/username/repository/branch/path/to/video.mp4)

<video width="640" height="360" controls>
 <source src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/input_m2.mp4" type="video/mp4">
 <source src="video.ogg" type="video/ogg">
 Your browser does not support the video tag
</video>
---

## Output
- Annotated video with:
  - Bounding boxes
  - Tracking IDs
  - Virtual counting lines
- Fish counts per specie 

These outputs can support ecological analysis and reporting.


