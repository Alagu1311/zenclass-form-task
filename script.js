let sumbit=document.querySelector("#sumb");
sumbit.addEventListener("sumbit",(event)=>{
   event.preventDefault()
let names=document.querySelector("#nam").value;
let livingplace=document.querySelector("#pla").value;
let navtiveplace=document.querySelector("#livpl").value;
let work=document.querySelector("#wor").value;
let amount=document.querySelector("#amo").value;
  if(names.length<3){
   alert("enter the valide name")
   

  }
  if(livingplace.length<3||livingplace==null){
    alert("the chararcter more than three")
  
  }
  if(navtiveplace.length<3||navtiveplace==null){
    alert("the charc must be in more than three")
    
  }
  if(work.length<3||work==null){
    alert("the charc must be in more than three")
    
  }
  if(amount==null){
    alert("the amount must be in number")
    
  }

})