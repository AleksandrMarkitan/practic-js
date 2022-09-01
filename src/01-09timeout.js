import _debounce from "debounce";
const passwordInput = document.querySelector(".js-password");
const error = document.querySelector(".js-error");

passwordInput.addEventListener("input", _debounce(passwordValid, 1000))
console.log(_debounce)
function passwordValid(event){
    const passArr = event.target.value.split("") 
    console.log(passArr)
    if(passArr.some((elem) => !isNaN(Number(elem)))){
        error.textContent ="Ok"; 
        error.style.color ="green"
        return
    }
    error.style.color ="red"
    error.textContent ="ERROR";
    setTimeout(()=> error.textContent ="", 3000)
}
