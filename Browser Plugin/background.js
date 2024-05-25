chrome.extension.onRequest.addListener(function(prediction){
    if (prediction == 1){
        alert("Warning: Confidence of Phishing Abuse Detected!!");
    }
    else if (prediction == -1){
        alert("No phishing detected");
    }
});
