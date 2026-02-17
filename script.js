function startVoice(){

    const recognition =
        new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();

    recognition.lang = "en-US";

    recognition.onresult = function(event){

        const transcript =
            event.results[0][0].transcript;

        document.getElementById("message").value =
            transcript;
    };

    recognition.start();
}

function sendEmail(){

    const data = {

        receiver:
            document.getElementById("receiver").value,

        subject:
            document.getElementById("subject").value,

        message:
            document.getElementById("message").value
    };

    fetch("http://127.0.0.1:5000/send-email",{

        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("status").innerText =
            data.status;
    });
}
