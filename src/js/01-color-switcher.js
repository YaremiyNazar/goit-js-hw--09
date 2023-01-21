function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.body
const btnStartEl = document.querySelector("[data-start]")
const btnStopEl = document.querySelector("[data-stop]")

const btnDiv = document.createElement('div')
btnDiv.appendChild(btnStartEl)
btnDiv.appendChild(btnStopEl)
body.insertBefore(btnDiv, body.children[1])

const color = document.body
let timerId = null;

btnStopEl.disabled = true

btnStartEl.addEventListener("click", () => {
  btnStartEl.disabled = true
  btnStopEl.disabled = false
  timerId = setInterval(() => {
  color.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

btnStopEl.addEventListener("click", () => {
    clearInterval(timerId);
    btnStartEl.disabled = false;
    btnStopEl.disabled = true;
})


btnDiv.style.position = "absolute"
btnDiv.style.top = "50%"
btnDiv.style.left = "50%"
btnDiv.style.transform = "translate(-50%, -50%)"
btnDiv.firstChild.style.alignItems = "center"
btnDiv.style.textContent ="center"

btnDiv.firstChild.style.marginRight = "20px"
btnDiv.firstChild.style.textTransform = "uppercase"
btnDiv.firstChild.style.fontSize = "30px"
btnDiv.firstChild.style.padding = "30px"
btnDiv.firstChild.style.cursor = "pointer"

btnDiv.lastChild.style.textTransform = "uppercase"
btnDiv.lastChild.style.fontSize = "30px"
btnDiv.lastChild.style.padding = "30px"
btnDiv.lastChild.style.cursor = "pointer"

