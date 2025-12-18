from ultralytics import YOLO
import os

try:
    model = YOLO("fish_model.pt")
    print("SUCCESS")
    print(model.names)
except Exception as e:
    print(f"ERROR: {e}")
