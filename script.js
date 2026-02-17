const startBtn = document.getElementById("startBtn");
const statusText = document.getElementById("status");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.continuous = false;

let step = 0;
let emailRecipient = "";
let emailSubject = "";
let emailMessage = "";

// Text-to-Speech Function
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}

// Start Assistant
startBtn.addEventListener("click", () => {
    speak("Voice assistant activated. Please give a command.");
    recognition.start();
});

// Voice Recognition Result
recognition.onresult = function(event) {
    const command = event.results[0][0].transcript.toLowerCase();
    statusText.innerText = "You said: " + command;  
    // Step 0: Main Commands
    if (step === 0) {
        if (command.includes("open inbox")) {
            speak("Opening your Gmail inbox.");
            window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
        }

        else if (command.includes("send email")) {
            speak("Who is the recipient?");
            step = 1;
            recognition.start();
        }

        else {
            speak("Sorry, I did not understand. Please try again.");
        }
    }
    // Step 1: Recipient
    else if (step === 1) {
        emailRecipient = command.replace(/\s/g, "") + "@gmail.com";
        speak("What is the subject?");
        step = 2;
        recognition.start();
    }

    // Step 2: Subject
    else if (step === 2) {
        emailSubject = command;
        speak("What is the message?");
        step = 3;
        recognition.start();
    }
    // Step 3: Message
    else if (step === 3) {
        emailMessage = command;
        speak("Composing your email.");
        
        const mailtoLink = `mailto:${emailRecipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailMessage)}`;
        window.location.href = mailtoLink;

        step = 0; // Reset assistant
    }
};
// Handle Errors
recognition.onerror = function(event) {
    speak("There was an error. Please try again.");
};
    
