
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
- Optional Backend API (FastAPI or Node.js or Flask)

  <p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/app.png " width="500">
</p>

** Tools **
- Google Colab (training)  
- GitHub (version control)  
- RoboFlow (Annotation)

<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/autres.png " width="700">
</p>
---

## 🤖 Artificial Intelligence Models

### 1. Fish Detection (Model 1)
A YOLO-based model for detecting and classifying marine species from underwater video frames.

### 2. Growth Prediction (Model 2)
A regression-driven model using environmental data and detection outputs to estimate population growth and ecological trends.

Each model folder includes:
- Dataset folder (raw, labeled, processed, samples)
- Training notebook (Colab)
- Requirements file
- Model card
- Documentation

---

## 📱 MarineGuard Application
A mobile app providing:
- Underwater observation access
- Real-time detection alerts
- Species profiles
- Educational content
- Community contribution features

An optional backend API can support:
- Prediction endpoints
- User authentication  
- Report storage  

---

## 📘 Documentation
See `docs/System_Overview.md` for:
- System architecture
- Hardware/software overview
- Data pipeline
- AI workflow

---

## 💻 Technologies
React js / Expo / Yolo / utlralyrics / Rasspberry
