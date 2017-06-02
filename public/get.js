get(theURL){
    
    var getInfo = jQuery.getJSON(theURL);
    console.log(getInfo);
}

get('https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/42.3601,-71.0589');