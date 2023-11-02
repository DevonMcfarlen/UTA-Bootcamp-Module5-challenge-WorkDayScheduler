// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
document.addEventListener('DOMContentLoaded', function() {
  getHours();
}, false);

function getHours()
{ 
  var savedHour = localStorage.getItem("hourPlan");
  console.log(savedHour);
}

function setHour(hP)
{
  localStorage.setItem("hourPlan", hP);
}

$(button).on("click", function(event)
{
  var hourPlan = "";
  if(event.target.id == 'button')
    hourPlan = event.target.parentElement.querySelector(".description").value;
  else 
    hourPlan = event.target.parentElement.parentElement.querySelector(".description").value;
  
  setHour(hourPlan);
});

