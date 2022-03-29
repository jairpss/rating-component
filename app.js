const rateNum = document.querySelectorAll(".rate-number")
const selectedDiv = document.querySelector(".rate")

let selectedNum = 3 
rateNum.forEach((rating, idx) =>{
    rating.addEventListener('click', () => {
        removeSelected()
        rating.classList.add('selected')
        selectedNum = idx + 1 
        console.log(selectedNum) 
    } ) 

})

function removeSelected(){
    rateNum.forEach((rating) => rating.classList.remove('selected'))
}

const submit = () => {
    let main = document.getElementById("main");
    let thank = document.getElementById("thank-you");
    main.classList.add("hide");
    thank.classList.add("display");
    selectedDiv.innerText = `${selectedNum}`
    console.log("hide");
}

