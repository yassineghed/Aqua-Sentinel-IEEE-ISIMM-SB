# Backend API
The backend of the MarineGuard platform is built using FastAPI and serves as the core service layer connecting the mobile application with AI-based analysis and data management components.

It is designed to:
- Expose RESTful endpoints for fish detection and tracking results
- Handle user authentication and role-based access
- Manage alerts related to invasive species and environmental events
- Store and retrieve reports, observations, and community contributions
- Act as an integration layer between the mobile application and AI models

The backend architecture prioritizes scalability, clarity, and ease of integration, making it suitable for research and prototype deployment.

## + Backend Setup

1. Run the backend : 
```bash
cd path/to/marine-guard-api
```
2. connect to virtual environment : 
```bash
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```
3. install dependencies
```bash
python -m pip install "numpy<2" ultralytics fastapi uvicorn
pip install python-multipart
python -m pip install --upgrade pip setuptools wheel
```
4. run the backend :
```bash
python main.py http://localhost:8000/
```
