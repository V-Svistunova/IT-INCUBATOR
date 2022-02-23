let openModalBtn = document.getElementById("modalOpen");
let modal = document.querySelector('.modal');
let closeModalBtn = document.querySelector(".modal-close")

let openVideoModalBtn = document.getElementById("modalVideoOpen");
let modalVideo = document.querySelector('.modal__video');
let closeVideoModalBtn = document.querySelector(".modal__video-close")



// simple slider

let offset = 0;

const sliderLine = document.querySelector('.location__list');
const sliderRight = document.querySelector('.slider__arrow-right');
const sliderLeft = document.querySelector('.slider__arrow-left');

sliderRight.addEventListener('click', function() {
  offset = offset + 400;
  if (offset > 800) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px'
})

sliderLeft.addEventListener('click', function() {
  offset = offset - 400;
  if(offset < 0) {
    offset = 800;
  }
  sliderLine.style.left = -offset + 'px'
})



// modal window

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'flex'
})

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none'
})

window.addEventListener('click', function(event)  {
  if(event.target === modal) {    
    modal.style.display = 'none'
  }
})

// modal from video window

openVideoModalBtn.addEventListener('click', function() {
  modalVideo.style.display = 'flex'
})

closeVideoModalBtn.addEventListener('click', function() {
  modalVideo.style.display = 'none'
})

window.addEventListener('click', function(event)  {
  if(event.target === modal) {    
    modalVideo.style.display = 'none'
  }
})