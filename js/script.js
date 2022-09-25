let slide = document.querySelectorAll(".slide_content");
let index = 0;
function proximo(){
    slide[index].classList.remove("active");
    index = (index + 1) % slide.length
    slide[index].classList.add("active")
}
function antes(){
    slide[index].classList.remove("active");
    index = (index - 1 + slide.length) % slide.length
    slide[index].classList.add("active")
}
let menu = document.querySelector(".navcenter")
document.querySelector(".menu").onclick = () =>{
    menu.classList.toggle("menuabri")

}
onscroll = () =>{
    menu.classList.remove("menuabri")

}