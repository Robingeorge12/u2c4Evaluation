// write js code here corresponding to favourites.html
// var datas=JSON.parse(localStorage.getItem("schedule"))||[]
var cartData=JSON.parse(localStorage.getItem("favourites"))||[]
display(cartData)

function display(data)
{

data.forEach(function(el,i){

var box=document.createElement("tr")

var td1=document.createElement("td")
td1.innerText=el.mat
var td2=document.createElement("td")
td2.innerText=el.team1
var td3=document.createElement("td")
td3.innerText=el.team2
var td4=document.createElement("td")
td4.innerText=el.day
var td5=document.createElement("td")
td5.innerText=el.place
var btn=document.createElement("td")
btn.innerText="Delete"
btn.style.color="red"
btn.addEventListener("click",function(){
    delfun(el,i)
})


box.append(td1,td2,td3,td4,td5,btn)
document.querySelector("tbody").append(box)
console.log("data")

})
function delfun(el,i)
{
    cartData.splice(i,1)
    display(cartData)
    localStorage.setItem("favourites",JSON.stringify(cartData))
    window.location.reload();
    // localStorage.setItem("favourites",JSON.stringify(cartData))

}

}
