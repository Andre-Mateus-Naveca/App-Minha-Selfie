var SpeechRecognition = window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
 function start()
{
    document.getElementById("textBox").innerHTML = ""; 
    recognition.start();
} 
recognition.onresult = function run (event) 
{
 console.log(event);
var Content = event.results[0][0].transcript;
document.getElementById("textBox").innerHTML = Content;
console.log(Content);

 if(Content =="tire minha selfie")
 {
   console.log("tirando minha selfie ---");
   speak();
 }
}
function speak(){
  var synth = window.speechSynthesis;

  speakData = "Tirando sua selfie em 5 segundos";

  var utterThis = new SpeechSynthesisUtterance(speakData);

  synth.speak(utterThis);
  Webcam.attach(camera);

  setTimeout(function()
  {
    take_snapshot();
    save();
   }, 5000);
}
camera = document.getElementById("camera");
Webcam.set({
  width:360,
  height:250,
  image_format: 'png',
  png_quality:90
});
function take_snapshot()
{
  Webcam.snap(function(data_url) {
    document.getElementById("resultado").innerHTML = '<img id="selfieImage" src="'+data_url+'"/>'
  });
}
function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfieImage").src;
  link.href = image;
  link.click();
}