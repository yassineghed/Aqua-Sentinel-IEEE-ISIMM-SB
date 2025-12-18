import zipfile
import re

fname = "fish_model.pt"
try:
    with zipfile.ZipFile(fname, 'r') as z:
        data = z.read('best/data.pkl')
        content = data.decode('latin1')
        idx = content.find('names')
        if idx != -1:
            snippet = content[idx:idx+1000] # larger chunk
            # Regex to find short strings (words) which are likely the classes
            # In pickle, short strings are often preceded by length byte. 
            # We will just dump all alphanumeric strings
            words = re.findall(r"[a-zA-Z]{3,}", snippet)
            print("Extracted words after 'names':")
            print(words)
            
except Exception as e:
    print(f"Error: {e}")
