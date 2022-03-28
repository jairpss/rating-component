const rateNum = document.getElementsByClassName("rate-number")


const select = () => {
    // rateNum.classList.add("selected")
    

    rateNum.addEventListener("click", function() {
        rateNum.classList.add("selected")
        console.log('selected number')
      })
}



// let selectedRating = 5 
// rateNum.forEach((rating, idx) =>{
//     rating.addEventListener('click', () => {
//         rating.classList.add('selected')
//         selectedRating = idx + 1 
//     } ) 

// })

const submit = () => {
    let main = document.getElementById("main");
    let thank = document.getElementById("thank-you");
    main.classList.add("hide");
    thank.classList.add("display");
    console.log("hide");
}

