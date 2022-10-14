var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function starting(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}
recognition.onresult = function(event){
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if(content == "tire minha selfie"){
        speak();
    }
}
var cont = 0; 
function speak(){
    sint = window.speechSynthesis;
    speakdata = "tirando sua selfie em 5 segundos"
    var utterthis = new SpeechSynthesisUtterance(speakdata);
    sint.speak(utterthis)
    Webcam.attach(getcamera);
    setTimeout(function(){
        takeselfie();
        save();
    },9000)
    temp(cont)
}
var getcamera = document.getElementById("camera")
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
function takeselfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="fototirada" src="'+data_uri+'" />'
    })
}
function temp(cont){
    for(var i=0;i<5;i++){
        cont = cont+1
        var synth = window.speechSynthesis;
  
        speak_data = cont ;
  
       var utterThis = new SpeechSynthesisUtterance(speak_data);
  
        synth.speak(utterThis);
   
    }
   
  
 }
 
function save(){
    link = document.getElementById("saveimg");
    imag = document.getElementById("fototirada").src;
    link.href = imag;
    link.click()
}