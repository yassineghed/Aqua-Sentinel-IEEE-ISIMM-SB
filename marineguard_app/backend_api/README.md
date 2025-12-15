# Backend API
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
