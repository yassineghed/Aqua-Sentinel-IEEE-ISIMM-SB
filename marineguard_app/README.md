# Mediterranean Marine Species Monitoring System
 
MarineGuard is a application designed to monitor and identify Mediterranean fish species using AI-powered analysis of BRUV (Baited Remote Underwater Video) camera footage. <br> This platform specifically focuses on the coastal waters, Islands and Marine Protected Area providing real-time alerts, identification tools, and valuable data insights.

<br>
## Features

*   **User Roles**: Tailored experiences for three distinct user types:
    *   **Citizens**: Report sightings, access educational resources, and participate in community forums.
    *   **Researchers**: Analyze data trends, manage alerts, and validate reported sightings.
    *   **Fishers**: Access weather forecasts, market data, and report invasive catches.
<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/User Roles.png" width="600">
</p>

*   **Core Functionality**:
    *   **Dashboard**:  Personalized overview based on user role (Citizen, Researcher, Fisher).
    *   **Streams Feed**:  Streams feed form BRUV (Baited Remote Underwater Video) cameras.
    *   **Alerts System**:  Notification system for new invasive species sightings and environmental warnings.
    *   **Fish Identifier**:  Tool to upload images and identify marine species using AI (integration point).
    *   **Map Interface**:  Interactive map showing sighting locations and hotspots.
    *   **Education Hub**:  Resources and guides about local marine life and invasive species.
    *   **Weather Forecast**:  Marine weather conditions for safe maritime activities. (! Future Plan)
    *   **Community Forum**:  Platform for discussion and knowledge sharing.
    *   **Authentication**:  Secure Login and Signup flows.
### Here’s a quick demo showcasing how the app is organized.
<br>

 <center>
        <table>
            <tr>
                <!-- First image -->
                <td><img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/app_vid_1.gif" width="470"></td>
                <td><img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/app_vid-11.gif" width="470"></td>
             </tr>
        </table>
</center>
<br> 

## Tech Stack

*   **Frontend**: [Next.js](https://nextjs.org/) (React Framework)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Maps**: [React Leaflet](https://react-leaflet.js.org/) (Assumed/Suggested for Map implementation)
*   **Backend**: FastApi
*   **Language**: TypeScript
<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/apptools1.png" width="700">
</p>


# Setting up the Mobile Application

## + Mobile

Ensure you have the following installed:
*   [Node.js](https://nodejs.org/)
*   npm
  
1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd marine-guard-app-design
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## + Backend 
### Requirements
- Install Python 3.11
1. Run the backend : 
```bash
cd path/to/marine-guard-api
```
2. connect to virtual environment : 
```bash
py -3.11 -m venv venv
.\venv\Scripts\activate.bat
```
3. install dependencies
```bash
python -m pip install "numpy<2" ultralytics fastapi uvicorn
pip install python-multipart
python -m pip install --upgrade pip setuptools wheel
```
4. run the backend :
```bash
python main.py
```
5. then open: http://localhost:8000/

