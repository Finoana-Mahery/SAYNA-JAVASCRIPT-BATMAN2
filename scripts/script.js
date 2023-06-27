let slideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("boit")[0].children;
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex].style.display = "flex";
}


/******************************** */


function check()
{

  var check=document.getElementsByClassName("gg-close")[0];
  if( check.style.visibility=="hidden")
  check.style.visibility="visible"; 
 

}
/******************************** */
const form=document.getElementsByClassName("forma");
const messg=document.getElementsByClassName("envoye");
console.log(messg);
function submit(){
  
  messg[0].style.display="block";
  form[0].style.display="none";
  
  

}
/*****************GAME QUIZ*************** */
var compteur=0;
let Quiz= document.getElementsByClassName("q");
for(let i=0; i<15; i++){
  Quiz[i].style.display="none";
}
Quiz[compteur].style.display="flex";
function incremen(){
  compteur++;
  affichage(compteur);
}
function affichage(c){
  Quiz[c].style.display="flex";
  Quiz[c-1].style.display="none";
}

let btn_suivant=document.getElementsByClassName("btn_sv");
for(let i=0; i<14; i++){
  btn_suivant[i].addEventListener("click", incremen);
}



/***********resultat******************** */
let Result= document.getElementsByClassName("resultat");
let btn_resul=document.getElementsByClassName("btn_result");
for(let i=0; i<3; i++){
  Result[i].style.display="none";
}
function affich_result(){
  Quiz[14].style.display="none";
  Result[1].style.display="flex";
  
}
btn_resul[0].addEventListener("click",affich_result);




