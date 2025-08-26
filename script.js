// // shift to css
let buttons = document.querySelectorAll(".basic_buttons")

buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.background = "red"
    })

    button.addEventListener("mouseout", () => {
        button.style.background = "tomato"
    })
})


// let startBtn = document.getElementById("start_button")
// let stopBtn = document.getElementById("stop_button")
// let resetBtn = document.getElementById("reset_button")

// startBtn.onclick = () => {

// }

