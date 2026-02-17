import smtplib
from email.mime.text import MIMEText
from config import EMAIL_ADDRESS, EMAIL_PASSWORD, SMTP_SERVER, SMTP_PORT

def send_email(receiver, subject, message):

    msg = MIMEText(message)
    msg["Subject"] = subject
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = receiver

    with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT) as server:
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        server.send_message(msg)

    return True
