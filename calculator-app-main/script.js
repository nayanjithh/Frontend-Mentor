
const links=document.querySelectorAll("link");
const th=document.getElementsByName("theme");
th.forEach(btn =>{
    btn.addEventListener("click",() =>theme(btn.value))
});

function theme(i){
    console.log(i);
  links[1].setAttribute("href",`theme${i}.css`);
}