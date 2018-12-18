//slideshow automatic
var myIndex = 0;
carousel();

function carousel() {
   
    const mySlides = document.getElementsByClassName("my_slides");
    for (let i = 0; i < mySlides.length; i++) {
       mySlides[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > mySlides.length) {myIndex = 1}    
    mySlides[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000); // cambia cada 4 segundos.
};

//fin de slideshow automatic

//inicio de botones - Filtrado por 9 categorias del dropdown


const btnUrban = document.getElementById("total_urban");
const btnAir = document.getElementById("total_air");



//urbano
btnUrban.addEventListener('click',() => {
if (elemento.style.display === 'none') {
elemento.style.display = 'block';
airFilter.style.display = 'none';
} 
else {
elemento.style.display = 'none';
}
});

//aereo
btnAir.addEventListener('click',() => {
if (airFilter.style.display === 'none') {
elemento.style.display = 'none'
airFilter.style.display = 'block';
} 
else {
airFilter.style.display = 'none';
}
});