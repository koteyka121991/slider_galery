let gallerySlidePrewImgs = document.querySelectorAll('.gallery__slide-prew img'),
    gallery = [];

for (let i = 0; i < gallerySlidePrewImgs.length; i++) {
    gallery[i] = gallerySlidePrewImgs[i].src;
    gallerySlidePrewImgs[i].remove();
};

let step = 0,
    offset = 0;

const draw = () => {
    console.log(offset);
    let img = document.createElement('img');
    img.src = gallery[step];
    img.classList.add('img-slide');
    img.style.left = offset * 270 + 'px';
    document.querySelector('.gallery__slide-prew').appendChild(img);
}
draw();







// const gallerySlideMain = document.querySelector('.gallery__slide-main'),
//     gallerySlidePrew = document.querySelector('.gallery__slide-prew'),
//     gallerySlidePrewImgs = document.querySelector('.gallery__slide-prew img'),
//     buttonPrew = document.querySelector('.button-prew'),
//     buttonNext = document.querySelector('.button-next');
// let position = 0,
//     imgPosition = 0,
//     index = 0;



// const init = () => {
//     console.log(position);
//     width = gallerySlidePrew.offsetWidth;
//     gallerySlidePrew.style.width = width * gallerySlidePrewImgs.length + 'px;'
//     gallerySlidePrewImgs.forEach(item => {
//         item.style.width = width + "px";
//         item.style.height = "auto";

//     });
// };

// window.addEventListener('resize', init);

// // const nextPrewiew = () => {
// //     widthPrewElem = gallerySlidePrewImgs.offsetWidth;
// //     imgPosition += widthPrewElem;
// //     // index++;

// //     if (index >= gallerySlidePrewImgs.length) {
// //         index = 0;
// //     }
// //     gallerySlidePrew.style.transform = 'translate(-' + imgPosition + 'px)';
// // }

// // const prewPrewiew = () => {
// //     widthPrewElem = gallerySlidePrewImgs.offsetWidth;
// //     imgPosition - widthPrewElem;

// //     if (imgPosition < gallerySlidePrewImgs.length) {
// //         imgPosition = 0;
// //     }

// //     gallerySlidePrew.style.transform = 'translate(-' + imgPosition + 'px)';
// // }

// buttonNext.addEventListener("click", () => {

//     nextPrewiew();
// });

// buttonPrew.addEventListener("click", () => {

//     prewPrewiew();
// });




// const gallerySlideMain = document.querySelector('.gallery__slide-main'),
//     gallerySlideMainImgs = document.querySelectorAll('.gallery__slide-main img'),
//     gallerySlidePrew = document.querySelector('.gallery__slide-prew'),
//     gallerySlidePrewImgs = document.querySelectorAll('.gallery__slide-prew img'),
//     gallerySlider = document.querySelector('.gallery-slider'),
//     buttonPrew = document.querySelector('.button-prew'),
//     buttonNext = document.querySelector('.button-next');
// let index = 0,
//     position = 0,
//     width;






// function init() {
//     console.log(position);
//     width = gallerySlidePrew.offsetWidth;
//     gallerySlidePrew.style.width = width * gallerySlidePrewImgs.length + 'px;'
//     gallerySlidePrewImgs.forEach(item => {
//         item.style.width = width + "px";
//         item.style.height = "auto";

//     });


//     offsetElements();
// };

// init();

// const activeSlide = init();

// window.addEventListener('resize', init);

// buttonNext.addEventListener('click', () => {
//     index++;
//     if (index >= gallerySlidePrewImgs.length) {
//         index = 0;
//     }

//     offsetElements();
// });

// buttonPrew.addEventListener('click', () => {
//     index--;
//     if (index < 0) {
//         index = gallerySlidePrewImgs.length - 1;
//         // count = gallerySlidePrew.length - 1;
//     }
//     offsetElements();
// });


// function offsetElements() {
//     gallerySlidePrew.style.transform = 'translate(-' + index * width + 'px)';

// };