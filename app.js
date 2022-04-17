// API à utiliser pour les images de chiens: https://dog.ceo/api/breeds/image/random

document.getElementById('btn').addEventListener('click', () => {    
     fetchImage();
     radomIDRegistry (); 
     randomAge();   
});

function fetchImage(){
    // console.log('bouton marche');
fetch('https://dog.ceo/api/breeds/image/random')
    .then((reponse) => {
         return reponse.json(); 
     })
     .then(data => {
        //  console.log(data);
        let urlphoto = data.message;
        // console.log(urlphoto);
        let photo = document.getElementById('dogsAPI')
        photo.src=urlphoto
 
     });

}

function radomIDRegistry () {

document.getElementById('dogId').innerHTML =
Math.floor(Math.random() * 99999) + 21024;

document.getElementById('dogRegistry').innerHTML =
Math.floor(Math.random() * 999) + 123;

}


function randomAge(){

b = Math.floor(Math.random() * 30);
if (b <=1) {
    document.getElementById('dogAge').innerHTML =
    b +' Year';
} else {
    document.getElementById('dogAge').innerHTML =
    b +' Years';
}

}






