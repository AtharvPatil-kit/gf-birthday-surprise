function nextPage(){

window.location.href="surprise.html"

}

setInterval(createHeart,400)

function createHeart(){

const heart=document.createElement("div")

heart.classList.add("heart")

heart.innerHTML="💖"

heart.style.left=Math.random()*100+"vw"

heart.style.fontSize=(18+Math.random()*15)+"px"

document.body.appendChild(heart)

setTimeout(()=>{

heart.remove()

},6000)

}
