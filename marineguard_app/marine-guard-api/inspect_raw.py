import zipfile
import re

fname = "fish_model.pt"
try:
    with zipfile.ZipFile(fname, 'r') as z:
        print("Files in archive:")
        for name in z.namelist():
            print(f" - {name}")
            
        # Try to find something that looks like class names in standard files
        # Often getting 'data.pkl' which is binary, but sometimes 'metadata.yaml' exists
        
except zipfile.BadZipFile:
    print("Not a zip file. It might be an older uncompressed format or corrupted.")
except Exception as e:
    print(f"Error: {e}")
