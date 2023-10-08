
const links=document.querySelectorAll("link");
const th=document.getElementsByName("theme");
const dis=document.querySelector(".screen");

th.forEach(btn =>{
    btn.addEventListener("click",() =>theme(btn.value))
});
function theme(i){
    console.log("Running..");
  links[1].setAttribute("href",`theme${i}.css`);
}
function display(i){
  dis.innerText +=`${i}`;
}
function reset(){
  dis.innerText ="";
}
function del(){
  dis.innerText=dis.innerText.toString().slice(0,-1);
}
function equal(){
  let result="";
  for(const i of dis.innerText){
    if(i == "x")
      result+="*";
    else
      result+=i;
  }
  dis.innerText=eval(result);
}