let slider = document.querySelector('.switch')
slider.addEventListener('change', changeDarkMode())
fucntion changeDarkMode(){
    if (slider.checked) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }
}

document.getElementById('toggle').addEventListener('click', function(){
    document.getElementById('nav-mobile').classList.toggle('active');
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

