# Model 1 – Fish Detection and Species Classification

This model detects and classifies multiple marine fish species from underwater imagery using a YOLOv8n-based object detection architecture. It is trained on labeled video frames and can perform inference on both images and video streams.

This model focuses on **spatial detection and species identification**, serving as the foundation for higher-level analysis such as tracking and population estimation.

---

## Model Type
- Object detection (YOLOv8n)
- Multi-class fish species classification
- Image and video-based inference

---

## ⚙ Setup Instructions (for Windows users)

### 1. Create a virtual environment
```
python -m venv venv
venv\Scripts\activate
```
### 2. Install dependencies
```
pip install -r requirements.txt
```

---

## 🚀 Training the Model (Google Colab)

1. Open `train_colab.ipynb` in Google Colab.
2. Install the required libraries inside Colab.
3. Mount or upload the dataset exported from Roboflow.
4. Configure training parameters (epochs, image size, batch size).
5. Run the notebook cells to:
   - Train the YOLOv8n model
   - Validate performance across classes
   - Save the best model weights

The notebook provides live metrics such as precision, recall, and mAP.

---

## Input
- Labeled underwater image frames (YOLO format)
- Multi-class annotations (including unknown species)
- Dataset split using stratified sampling

<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel-IEEE-ISIMM-SB/blob/main/docs/assets/input_m2.gif" alt="Input example (labeled frames)" width="800" />
</p>

---

## Output
- Bounding boxes for detected fish
- Species class labels (≈8 classes, including unknown)
- Confidence scores per detection

<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel-IEEE-ISIMM-SB/blob/main/docs/assets/output_m11.gif" alt="Output example (detected species)" width="800" />
</p>

The trained model can perform inference on individual images or full video sequences.
