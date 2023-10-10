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
        <img src="./img/${images[i]}"></img>
    </div>`
    
    galleryDOMElement.innerHTML += printImage;
}

const imageDOMElement = document.getElementsByClassName('image');
console.log(imageDOMElement);

const firstImageDOMElement = imageDOMElement[0];
const secondImageDOMElement = imageDOMElement[1];
firstImageDOMElement.classList.add('active');


console.log(imageDOMElement[0])

firstImageDOMElement.addEventListener('click',
function(){
    firstImageDOMElement.classList.remove('active');
    secondImageDOMElement.classList.add('active');
})

// - Tutte le immagini avranno display: none

