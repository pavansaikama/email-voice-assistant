from flask import Flask, request, jsonify
from flask_cors import CORS
from email_service import send_email
from speech_service import speak

app = Flask(__name__)

CORS(app)

@app.route("/")
def home():
    return "Voice Email Assistant Running"

@app.route("/send-email", methods=["POST"])
def send_email_route():

    data = request.json

    receiver = data.get("receiver")
    subject = data.get("subject")
    message = data.get("message")

    if not receiver or not message:
        return jsonify({"error": "Missing fields"}), 400

    send_email(receiver, subject, message)

    speak("Your email has been sent successfully")

    return jsonify({"status": "Email Sent"})


if __name__ == "__main__":
    app.run(debug=True)
