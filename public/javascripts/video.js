(()=>{
var indexbuttons = document.querySelectorAll('.indexbutton');

// var overlay = document.querySelector('.overlay');
// overlay.style.display = "none";

console.log("connected");

function fetchData()
{
  let url = "api/"+this.id;
  fetch(url)
  // .then((resp) =>resp.json())
  // .then((data)=>{console.log(data);
  // })
  // .catch(function(error){
  //   console.log(error);
  }
// );

//   if(overlay.style.display == "none")
//   {
//   overlay.style.display = "block";
// }
// else{
//   overlay.style.display = "none";
// }




indexbuttons.forEach(indexbutton => indexbutton.addEventListener('click', fetchData));

})();
