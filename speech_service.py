from gtts import gTTS
import os
import platform

def speak(text):

    filename = "response.mp3"
    tts = gTTS(text=text, lang="en")
    tts.save(filename)

    if platform.system() == "Windows":
        os.system(f"start {filename}")
    elif platform.system() == "Darwin":
        os.system(f"open {filename}")
    else:
        os.system(f"xdg-open {filename}")
