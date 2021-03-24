function start() {
  var xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("p").innerHTML = this.responseText;
       }
    };
    xhttp3.open("GET", "https://random-data-api.com/api/color/random_color", true);
    xhttp3.send();
}
