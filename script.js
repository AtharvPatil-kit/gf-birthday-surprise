function nextPage() {

    window.location.href = "surprise.html"

}

/* ---------- FLOATING EMOJI SETTINGS ---------- */

/* Add or remove emojis here whenever you want */

const emojis = [
    "💖",
    "🌸",
    "💕"
]

/* Intensity control (90% = very frequent) */

const intensity = 90

/* Interval calculation */

const spawnRate = 2800 * (1 - intensity / 100)

/* Start floating emojis */

setInterval(createFloatingEmoji, spawnRate)

/* ---------- CREATE FLOATING EMOJI ---------- */

function createFloatingEmoji() {

    const emoji = document.createElement("div")

    emoji.classList.add("heart")

    /* Random emoji from list */

    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]

    /* Random horizontal position */

    emoji.style.left = Math.random() * 100 + "vw"

    /* Smaller size */

    emoji.style.fontSize = (12 + Math.random() * 10) + "px"

    /* Random animation speed */

    emoji.style.animationDuration = (6 + Math.random() * 4) + "s"

    document.body.appendChild(emoji)

    /* Remove after animation */

    setTimeout(() => {

        emoji.remove()

    }, 7000)

}

/* ---------- MUSIC AUTOPLAY FIX ---------- */

window.addEventListener("load", function () {

    const music = document.getElementById("bgMusic")
    if (!music) return

    // Restore last playback time
    const savedTime = localStorage.getItem("musicTime")
    if (savedTime) {
        music.currentTime = parseFloat(savedTime)
    }

    // Try autoplay
    music.play().catch(() => {
        document.addEventListener("click", () => {
            music.play()
        }, { once: true })
    })

    // Save current time continuously
    setInterval(() => {
        localStorage.setItem("musicTime", music.currentTime)
    }, 1000)

})
