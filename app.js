const select = () => {
    let element = document.getElementById("num5");
    element.classList.add("selected");
}

const submit = () => {
    let main = document.getElementById("main");
    let thank = document.getElementById("thank-you");
    main.classList.add("submit");
    thank.classList.add("display");
    console.log("hide");
}

