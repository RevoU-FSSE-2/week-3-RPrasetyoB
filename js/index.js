const burger =document.getElementById('burger')
const navMenu = document.getElementsByClassName('nav-mobile')[0]

burger.addEventListener('click', function(){
    navMenu.classList.toggle('d-none')
})



function dont() {
    if (document.getElementById('ugly').checked) {
        alert("No, You are Ugly!!");}
        document.getElementById("ugly").checked = false;
}

function img(x){
    const y = document.getElementById("bite")
    if(x==0)
        y.style.display = "block";
    else
        y.style.display = "none";
    return;
}

