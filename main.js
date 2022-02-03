var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition()

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start()
}

recognition.onresult=function run(event)
{
    var content=event.results[0][0].transcript
    document.getElementById("textbox").innerHTML=content;
    if(content=="cheese")
    {
      speak()
    }
} 

function speak()
{
    var symth=window.speechSynthesis;
    speakdata="Freeze! You Are Getting Captured In 3 2 1. Bam!"
    var utterthis=new SpeechSynthesisUtterance(speakdata);
    symth.speak(utterthis);
    Webcam.attach(camera)
    setTimeout(function(){
        takeSnapshot()
        save()
    },3000)
} 

Webcam.set({
    width:360,
    height:360,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera")

function takeSnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="yourSelfie" src="'+data_uri+'">' 
    });
}

function save()
{
  link=document.getElementById("link");
  img=document.getElementById("yourSelfie").src;
  link.href=img;
  link.click();
}