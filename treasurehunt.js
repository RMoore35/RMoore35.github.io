
var treasLocation = Math.floor((Math.random()*9))
var bombLocation = Math.floor((Math.random()*9))
var countEl = document.getElementById("click-counter")

if(bombLocation=treasLocation){
    var bombLocation = Math.floor((Math.random()*9))
}

var clickCounter = 0;

countEl.innerHTML = clickCounter

const treasureFinder = (location) => {

    if(location === bombLocation) {
        document.getElementById(location).innerHTML = "&#x2620"
        // TODO: Need to show whole map
        alert("You lose!")
        // window.addEventListener('click',()=>{ window.location.reload()})
        window.location.reload()
    } else if(location === treasLocation) {
        document.getElementById(location).innerHTML = "&#x1f308"
        // TODO: Need to show whole map
        alert("You win!")
        // window.addEventListener('click',()=>{ window.location.reload()})
        window.location.reload()
    } else{
        // TODO: Need to fix counter. Set a value and count down
        document.getElementById(location).innerHTML = "&#x1f332"
        clickCounter += 1
        countEl.innerHTML = clickCounter
    }
}
