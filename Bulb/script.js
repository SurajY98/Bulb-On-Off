let btn = document.getElementById("btn-bulb");
let bulb = document.getElementById("bulb-img");
btn.addEventListener('click', btnClick)

function btnClick(e){
    if(btn.textContent.includes('On')){
        bulb.src = "image/on.img"
        btn.textContent = "Turn Off"
    }
    else{
        btn.textContent = "Turn On "
        bulb.src = "image/off.img"
    }
}
