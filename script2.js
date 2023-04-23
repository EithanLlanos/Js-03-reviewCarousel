const carousel = document.querySelector('.carousel');
const reviews = carousel.querySelectorAll('.review');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showReview(index) {
  reviews[currentIndex].classList.remove('active');
  reviews[index].classList.add('active');
  currentIndex = index;
}

prevBtn.addEventListener('click', function() {
  let index = currentIndex - 1;
  if (index < 0) {
    index = reviews.length - 1;
  }
  showReview(index);
});

nextBtn.addEventListener('click', function() {
  let index = currentIndex + 1;
  if (index >= reviews.length) {
    index = 0;
  }
  showReview(index);
});

showReview(currentIndex);
