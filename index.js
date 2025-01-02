let speech=false;
let btn=document.querySelector("button");
let ouput=document.querySelector(".input")
let availabilty=window.webkitSpeechRecognition ;
if(!availabilty in window){
    alert("UNSUPPORTED");
}
let voice=new webkitSpeechRecognition();
voice.interimResults=true;
voice.continuous=true;
btn.addEventListener("click",()=>{
    if(speech){
        voice.continuous=true
        voice.stop();
        console.log("STOP");
        btn.innerText="Speak";
        speech=false
    }
    else{
        voice.start();
        console.log("SPEAK");
        voice.continuous=false
        btn.innerText="Stop";
        speech=true;
    }
})
voice.addEventListener("result",(e)=>{
    console.log(e.results[0][0].transcript);
    ouput.innerText=e.results[0][0].transcript
});
