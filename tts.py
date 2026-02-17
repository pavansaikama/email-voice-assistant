from gtts import gTTS
import os
import platform

def speak(text):

    file = "voice.mp3"
    tts = gTTS(text=text, lang="en")
    tts.save(file)

    if platform.system() == "Windows":
        os.system(f"start {file}")
    else:
        os.system(f"xdg-open {file}")
