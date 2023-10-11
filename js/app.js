// - Creo un array con all'interno le immagini
const images = ['01.webp','02.webp','03.webp','04.webp','05.webp'];
console.log(images);

// - Ciclo le informazioni
//     - creo un template literal
//         - inserisco l'immagine

// const printImage = 
// `<div>
//     <img src="./img/${images[0]}" class="active"></img>
// </div>`

// const imagesDOMElement = document.querySelector('.images');
// imagesDOMElement.innerHTML = printImage

const galleryDOMElement = document.querySelector('.gallery');

for (i = 0; i < images.length; i++){
    const printImage = 
    `<div class="image">
        <img src="./img/${images[i]}">
    </div>`
    
    galleryDOMElement.innerHTML += printImage;
}

const imageDOMElements = document.querySelectorAll('.image');
console.log(imageDOMElements);


let currentIndex = 4;

let currentSlide = imageDOMElements[currentIndex];
currentSlide.classList.add('active');




// SPOSTO CLASSE ACTIVE DALLA PRIMA ALLA SECONDA IMG





// AL CLICK DI UN TASTO LA CLASSE ACTIVE PASSA DA UN ELEMENTO ALL'ALTRO ATTRAVERSO UN CICLO





