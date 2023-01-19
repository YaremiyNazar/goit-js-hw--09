
// confirm
const inputField = document.querySelector(".date-picker")
const ageField = document.querySelector(".age-outer")

function handleClick() {
    const currentDate = new Date()
    const selectedDate = new Date(inputField.value)
    const age = currentDate.getFullYear() - selectedDate.getFullYear()
    ageField.textContent = age
}



inputField.addEventListener("input", handleClick)