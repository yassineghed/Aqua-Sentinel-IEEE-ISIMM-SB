import zipfile
import re

fname = "fish_model.pt"
try:
    with zipfile.ZipFile(fname, 'r') as z:
        data = z.read('best/data.pkl')
        # Ultralytics models usually store names in a dict: {0: 'name1', 1: 'name2'}
        # or a list ['name1', 'name2']
        # We will look for the strings we saw earlier: "train", "val", "names"
        
        # "names" is a key key.
        content = data.decode('latin1')
        
        # Find where "names" occurs
        idx = content.find('names')
        if idx != -1:
            print(f"Found 'names' at {idx}")
            # print surrounding chars
            snippet = content[idx:idx+500]
            # Print as raw representation to see structure
            print(repr(snippet))
            
            # Extract anything that looks like a list of strings
            clean_strings = re.findall(r"[a-zA-Z_][a-zA-Z0-9_ ]*", snippet)
            print("Likely class names in this chunk:")
            print(clean_strings)
        else:
            print("'names' key not found in pickle.")
            
except Exception as e:
    print(f"Error: {e}")
