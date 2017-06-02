function getInfo(theURL){
    
    document.getElementById("data").action = theURL;
}


var theURL = 'https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/42.3601,-71.0589'
getInfo(theURL);