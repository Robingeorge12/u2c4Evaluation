// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myfun)
var data=JSON.parse(localStorage.getItem("schedule"))||[]
function myfun()
{

    event.preventDefault();

var obj={


   mat:masaiForm.matchNum.value,

   team1:masaiForm.teamA.value,

   team2:masaiForm.teamB.value,

   day:masaiForm.date.value,

place:masaiForm.venue.value,
   
}
data.push(obj)
localStorage.setItem("schedule",JSON.stringify(data))
window.location.href="matches.html"
// console.log(data)
}


