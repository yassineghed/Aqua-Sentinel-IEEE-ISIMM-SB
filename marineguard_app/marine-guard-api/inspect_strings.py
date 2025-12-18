import zipfile
import re

fname = "fish_model.pt"
try:
    with zipfile.ZipFile(fname, 'r') as z:
        # Read the pickle file bytes
        if 'best/data.pkl' in z.namelist():
            data = z.read('best/data.pkl')
            
            # Simple heuristic: Look for sequence of strings using regex
            # Pickle strings are often [length][content]
            # We'll just look for printable patterns that might be fish names
            # Logic: list of names usually appears together
            
            text = data.decode('latin1') # Decode as latin1 to preserve bytes as chars
            
            # Naive string extraction: look for consecutive ASCII words
            matches = re.findall(r'[a-zA-Z0-9_\- ]{3,}', text)
            
            # Filter for likely candidates (this is fuzzy)
            print("Strings found in data.pkl (last 100):")
            print(matches[-100:])
            
except Exception as e:
    print(f"Error: {e}")
