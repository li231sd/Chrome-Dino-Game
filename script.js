const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

var delayInMilliseconds = 5000; //5 second

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
    }
}

document.addEventListener("keydown", function(event) {
    jump();
})

setTimeout(function() {
    let isAlive = setInterval(function() {
        //Get current dino Y pos
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        //Get current cactus X pos
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        
        //Detect Collision
        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140)
        {
            //collision
            alert("Game Over") 
        }
    }, 10)
}, delayInMilliseconds);
