function start() {

var d = new Date();

var ts = d.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
var ds = d.toDateString();


document.querySelector("#zeit").innerHTML = ts;
document.querySelector("#datum").innerHTML = ds;

console.log(ts);
console.log(ds);

}

function laden() {
    location.reload()
}
