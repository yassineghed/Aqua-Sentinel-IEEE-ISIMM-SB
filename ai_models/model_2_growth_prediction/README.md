# Model 2 – Fish Tracking and Population Flow Analysis

This model tracks individual fish with persistent IDs, counts their movement across virtual lines, and estimates population flow trends to support real-time marine ecosystem monitoring through temporal and behavioral analysis.

This model complements the detection model by adding **temporal and behavioral analysis**, (The tTracking ensures that the same fish is not counted multiple times)
<br> <br>

<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel-IEEE-ISIMM-SB/blob/main/docs/assets/fish_tracking_pipline.png" alt="fish tracking pipline" width="600" />
  </a>
</p>


## Model Type
- Object detection with tracking
- Video-based analysis
- Temporal population estimation

## Input
- Underwater video files (MP4 or similar)
- Pre-trained YOLO model weights
<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel-IEEE-ISIMM-SB/blob/main/docs/assets/input_m2.gif" alt="Input exemple (video format!" width="700" />
  </a>
</p>

## Output
- Annotated video with:
  - Bounding boxes
  - Tracking IDs
  - Virtual counting lines
- Fish counts per specie
  exemple: <p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel-IEEE-ISIMM-SB/blob/main/docs/assets/output_m2.gif" alt="Input exemple (video format!" width="800" />
  </a>
</p>

These outputs are helpful for ecological analysis and reporting.


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


