const body = document.querySelector("body");
const swalst = Swal.mixin({
    timer: 2777, allowOutsideClick: false, showConfirmButton: false, timerProgressBar: true, imageHeight: 90,
}); 
audio = new Audio('' + linkmp3.src);
const swals = Swal.mixin({
    allowOutsideClick: false, cancelButtonColor: '#FF0040', imageWidth: 100, imageHeight: 100,
});
const style = document.createElement('style');

function createHeart() {
    const heart = document.createElement("div");
     heart.className = "fas fa-heart"; 
     heart.style.left = (Math.random() * 90)+"vw"; 
     heart.style.animationDuration = (Math.random()*3)+2+"s"; body.appendChild(heart);
    } 
    setInterval(function name(params) {
        var heartArr = document.querySelectorAll(".fa-heart");
        if (heartArr.length > 100) {
            heartArr[0].remove()
        }
    },100);