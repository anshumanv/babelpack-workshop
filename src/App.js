const buttonElement = document.querySelector("#button")
const counterElement = document.querySelector("#count")


buttonElement.addEventListener("click", function(e) {
  counterElement.innerText = Number(counterElement.innerText) + 1
})
