
# Aqua Sentinel  
### Autonomous Marine Monitoring System 

<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/system.png" width="300">
</p>

An integrated underwater monitoring system designed to support marine conservation, biodiversity assessment and invasive species detection. It combines an underwater camera unit, AI-powered analysis models and the MarineGuard application to deliver actionable insights for researchers, fishermen and coastal communities.

---

## Project Goal
Provide an affordable and autonomous solution to:
- Monitor marine life in real time
- Detect invasive or harmful species
- Track fish populations and growth over time
- Improve coastal community awareness and engagement

---

 ## How to Use This Repository

1. Explore the AI models inside `ai_models/`
   - Each model has datasets, training notebooks and export files.
2. Navigate to `marineguard_app/` to see the app layout.
   - Long term, admins use a web dashboard and users use a mobile app.
   - For this demo, both are combined into a single web app simulation.
   - Setup instructions:

   **Python setup**
   - `python -m venv venv`
   - `source venv/bin/activate`  *(Windows: `venv\Scripts\activate`)*
   - `pip install -r requirements.txt`

   **App setup**
   - `npm install`
   - `npm run dev`
3. Read the system structure in `docs/System_Overview.md`
   - Explains how the models and app fit into the project.
  
 ## Technologies

** AI & Data **
- Python & OpenCV  
- YOLO-based for Fish Detection
- BoT-SORT & ByteTrack for Object Tracking 
- ONNX / TFLite for model export
<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/ai.png" width="500">
</p>

** App **
*   **Frontend**: [Next.js](https://nextjs.org/) (React Framework)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Maps**: [React Leaflet](https://react-leaflet.js.org/) (Assumed/Suggested for Map implementation)
*   **Backend**: FastApi
*   **Language**: TypeScript

  <p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/apptools1.png " width="600">
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
