function startClassification()
{
navigator.mediaDevices.getUserMedia({audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8ITZUV5Jo/model.json',modelReady);
}

function modelReady(){
console.log("Model is ready");
classifier.classify(gotResults);
}

function gotResults(error, results){
if (error){
    console.error(error);
} else{
    console.log(results);
    document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
    document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2)+" %";
}
}