const carousel = document.getElementById('carousel');
const dotsContainer = document.getElementById('dots');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
            
let currentSlide = 0;
const totalSlides = 3;
            
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = `h-3 rounded-full transition-all duration-300 ${i === 0 ? 'bg-[#EC6227] w-8' : 'bg-gray-300 w-3'}`;
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}
function updateDots() {
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
        if (i === currentSlide) {
            dots[i].className = 'w-8 h-3 rounded-full bg-[#EC6227] transition-all duration-300';
        } else {
            dots[i].className = 'w-3 h-3 rounded-full bg-gray-300 transition-all duration-300';
        }
    }
}
function goToSlide(index) {
    currentSlide = index;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(currentSlide);
});
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
});
            