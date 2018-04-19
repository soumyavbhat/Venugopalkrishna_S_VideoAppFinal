(()=>{
var menuoverlay = document.querySelector('.menuoverlay'),
    menu = document.querySelector('.menu');


menuoverlay.style.display = "none";

function hammenu()
{
  if(menuoverlay.style.display == "none")
  {
  menuoverlay.style.display = "block";
}
else{
  menuoverlay.style.display = "none";
}
}


menu.addEventListener('click', hammenu, false);

})();
