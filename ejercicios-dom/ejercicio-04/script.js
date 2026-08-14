// 1.1
const button = document.querySelector("#btnToClick")
button.addEventListener("click", function(event) {
  console.log(event)
})


// 1.2
const inputFocus = document.querySelector(".focus")
inputFocus.addEventListener("focus", function(event) {
  console.log(event.target.value)
})


// 1.3
const inputValue = document.querySelector(".value")
inputValue.addEventListener("input", function(event) {
  console.log(event.target.value)
})