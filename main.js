Webcam.set({
width:350,
height:300,
image_format:"jpg",
jpg_quality:100
});

Webcam.attach("#camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML= "<img id='captured_img' src='"+data_uri+"'>";

});
}

classifier= ml5.imageClassifier(" teachablemachine.withgoogle.com/models/-0ePWoClj/model.json", modelLoaded);

function modelLoaded(){
console.log("Model is loaded");
}