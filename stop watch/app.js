











var minutes = 0
var second = 0
var miliSecond = 0
var Interval;

function start() {
     document.getElementById("dis").disabled = true
    var getMinutes = document.getElementById("minutes")
    var getSecond = document.getElementById("seconds")
    var getMiliSecond = document.getElementById("miliSeconds")
    Interval = setInterval(function () {
        miliSecond++
        getMiliSecond.innerHTML = miliSecond
        if (miliSecond >= 100) {
            second++
            getSecond.innerHTML = second + ":"
            miliSecond = 0
        }
        if (second <10) {
            getSecond.innerHTML = "0"+second + ":"
        
        }
      


        else if (second >= 60) {
            minutes++
            getMinutes.innerHTML = minutes +":"
            second = 0


        }
        if (minutes <10) {
            getMinutes.innerHTML = "0"+minutes + ":"
        
        }



    }, 10)

}
function stop() {

    document.getElementById("dis").disabled = false
    clearInterval(Interval);


}

function reset() {
    document.getElementById("dis").disabled = false
    clearInterval(Interval);
    minutes = 0;
    second = 0;
    miliSecond ="00";
    document.getElementById("minutes").innerHTML = minutes+"0:";
    document.getElementById("seconds").innerHTML = second+"0:";
    document.getElementById("miliSeconds").innerHTML = miliSecond;
}