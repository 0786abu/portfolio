
let text = document.querySelector(".writetext");

let writetext = ()=>{
    
    setTimeout(() => {
        text.textContent = "App development";
    }, 5000);
    setTimeout(() => {
        text.textContent = "ios development";
    }, 10000);
}

writetext();

setInterval(writetext, 12000);