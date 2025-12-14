
# Aqua Sentinel  
### Autonomous Marine Monitoring System 

<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/system.png" width="300">
</p>

An integrated underwater monitoring system designed to support marine conservation, biodiversity assessment and invasive species detection. It combines an underwater camera unit, AI-powered analysis models and the MarineGuard application to deliver actionable insights for researchers, fishermen and coastal communities.

---

## 🎯 Project Goal
Provide an affordable and autonomous solution to:
- Monitor marine life in real time
- Detect invasive or harmful species
- Track fish populations and growth over time
- Improve coastal community awareness and engagement

---

 ## 🚀 How to Use This Repository

1. Explore the AI models inside `ai_models/`
   - Each model has datasets, training notebooks and export files.
2. Navigate to `marineguard_app/` to see the app layout.
   - Contains `mobile/` and optional `backend_api/`.
3. Read the system structure in `docs/System_Overview.md`
   - Explains how the models and app fit into the project.
  
 ## 🛠 Technologies

** AI & Data **
- Python & OpenCV  
- YOLO-based for Fish Detection
- BoT-SORT & ByteTrack for Object Tracking 
- ONNX / TFLite for model export
<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/ai.png" width="500">
</p>

** App **
- Mobile App (React Native)  
- Optional Backend API (FastAPI)

  <p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/app1.png " width="500">
</p>

** IOT **
- Raspberry Pi 4
- Raspberry Pi Camera Module 2

<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/raspberry.jpg " width="300">
</p>


** Tools **
- Google Colab (training)  
- GitHub (version control)  
- RoboFlow (Annotation)

<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/autres.png " width="700">
</p>
