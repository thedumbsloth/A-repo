import time
import requests
import json
from plyer import notification 

url = "https://api.quotable.io/random"
response = requests.request("GET",url)
dict = json.loads(response.text)
if __name__ == "__main__":
    # while True:
        notification.notify(
            title = "Quote of the Day - " + dict["author"],
            message = dict["content"],
            timeout = 30,
            app_icon = "Google-Noto-Emoji-Animals-Nature-22338-maple-leaf.ico"
        )
        # time.sleep(60)
        
        

    