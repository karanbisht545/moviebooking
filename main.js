// container ko container name ke const mai store krwa lia
const container =document.querySelector(".container")
// seats name ka se const bana lia jiske andar jo seats occupied nhi h unko selsect krlega 
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total= document.getElementById("total");
const movieselect =document.getElementById("movie");

let ticketPrice = parseInt(movieselect.value);
function updateSelectedCount(){
    const selectedSeats=document.querySelectorAll(".row .selected");
    const selectedSeatscount=selectedSeats.length;
    count.innerHTML=selectedSeatscount;
    total.innerHTML=selectedSeatscount*ticketPrice
}
movieselect.addEventListener("change",function(e){
//  e jo h nah esme jo movie hum select krenge uski value a jaegi
    ticketPrice=parseInt(e.target.value);
 updateSelectedCount();
})




container.addEventListener("click",function(a){
    if(a.target.classList.contains("seat")&&!a.target.classList.contains("occupied"))
    {
        a.target.classList.toggle("selected");
        updateSelectedCount();
    }
})