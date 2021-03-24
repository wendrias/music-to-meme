function start() {
  var xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("p").innerHTML = this.responseText;
       } else { document.getElementById("p").innerHTML = "it's Broken :(";}
    };
    xhttp3.open("GET", "https://api.musixmatch.com/ws/1.1/track.search?q_track=my&q_artist=justin&apikey=d4c32e56bd2059bf8093e93376444722", true);
    xhttp3.send();
}
