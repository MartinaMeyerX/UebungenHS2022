function changetext() {
    var text = document.querySelector("#src");
    var ausgabe = document.querySelector("#mytext");

    var random = Math.floor(Math.random()*167772150).toString(16);

    var farbe = "#" + random;

    ausgabe.style["color"] = farbe;
    ausgabe.style["font-size"] = "30px";
    ausgabe.style["text-align"] = "center";

    ausgabe.innerHTML = text.value;
}