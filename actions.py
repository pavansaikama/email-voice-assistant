import webbrowser
from tts import speak

def handle_command(command):

    command = command.lower()

    if "open mail" in command:
        webbrowser.open("https://mail.google.com")
        speak("Opening your email")
        return "Opening Gmail"

    elif "read emails" in command:
        speak("Reading emails is under development")
        return "Reading Emails"

    elif "send email" in command:
        speak("Preparing email")
        return "Send Email Mode"

    elif "stop" in command:
        speak("Stopping assistant")
        return "Stopped"

    else:
        speak("Command not recognized")
        return "Unknown Command"
