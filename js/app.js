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

console.log(imageDOMElements.length);

let currentIndex = 0;

let currentSlide = imageDOMElements[currentIndex];
currentSlide.classList.add('active');

// CONTROLLI

const buttonDownDOMElement = document.querySelector('.btn-down');
buttonDownDOMElement.addEventListener('click', function(){
    console.log('click down');

    if (currentIndex < imageDOMElements.length - 1){
        currentSlide.classList.remove('active');

        currentIndex++;

        currentSlide = imageDOMElements[currentIndex];
        currentSlide.classList.add('active');
    } else {
        currentSlide.classList.remove('active');

        currentIndex = 0;

        currentSlide = imageDOMElements[currentIndex];
        currentSlide.classList.add('active');
    }

})

const buttonUpDOMElement = document.querySelector('.btn-up');
buttonUpDOMElement.addEventListener('click', function(){
    console.log('click up');

    if (currentIndex  > 0){
        currentSlide.classList.remove('active');

        currentIndex--;

        currentSlide = imageDOMElements[currentIndex];
        currentSlide.classList.add('active');
    } else {
        currentSlide.classList.remove('active');

        currentIndex = imageDOMElements.length - 1;

        currentSlide = imageDOMElements[currentIndex];
        currentSlide.classList.add('active');
    }

})