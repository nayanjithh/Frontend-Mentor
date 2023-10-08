const DD=document.getElementById("DD");
  const MM=document.getElementById("MM");
  const YY=document.getElementById("YY");
  const Error=document.querySelectorAll(".error");
  const label=document.querySelectorAll("label");
  let resulty=document.querySelector(".resulty");
  let resultm=document.querySelector(".resultm");
  let resultd=document.querySelector(".resultd");

  var currentDate= new Date();
  var currentDay=currentDate.getDate();
  var currentMonth=currentDate.getMonth();
  var currentYear=currentDate.getFullYear();
  

  function calculate(){
    if(DD.value===""||MM.value===""||YY.value===""){
      Error.forEach(btn =>btn.innerText="This field is required");
      label.forEach(label=>label.style.color="red");
      DD.style.borderColor="red";
      MM.style.borderColor="red";
      YY.style.borderColor="red";
    }
    else if(DD.value>31||MM.value>12||YY.value>2023||YY.value<1000){
      Error.forEach(btn =>btn.innerText="Must be vaild");
      label.forEach(label=>label.style.color="red");
      DD.style.borderColor="red";
      MM.style.borderColor="red";
      YY.style.borderColor="red";
    }
    else{
      resulty.innerText=currentYear-YY.value;
      resultm.innerText=currentMonth-MM.value;
      resultd.innerText=currentDay-DD.value;
    }
  }