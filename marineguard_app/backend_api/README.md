# Backend API
The backend of the MarineGuard platform is built using FastAPI and serves as the core service layer connecting the mobile application with AI-based analysis and data management components.

The backend architecture prioritizes scalability, clarity, and ease of integration, making it suitable for research and prototype deployment.

## + Backend Setup
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
