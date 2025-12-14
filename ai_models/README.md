# AI Models

This folder contains the two artificial intelligence models used in the Aqua Sentinel project.  
Both models are developed in Python and trained using Google Colab.

The focus of this repository is on: model training and experimentation.

---

## 📁 Folder Structure

In each model, you will find: 

```  
model/
├─ dataset/                 # Raw, labeled and sample data ( if exsisted)
├─ train_colab_file.ipynb   # Training notebook
├─ requirements.txt
├─ model_card.md
└─ README.md                
```
## Model 1: Fish Detection Model
- Computer vision model for detecting and classifying marine species.
- Trained on underwater images and video frames.
- Uses deep learning techniques for multi-object detection.
<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/model1_out.png" width="770">
</p>

## Model 2 – Fish Tracking and Population Flow Analysis

- Tracks individual fish across video frames by assigning persistent IDs.
- Counts how many fish cross the predefined virtual red lines in the video.
- Estimate population flow and support ecological monitoring and biodiversity analysis
<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/model2_out.png" width="750">
</p>
