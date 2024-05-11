let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[n].style.display = 'block';
    for(i=0;i>=10;1++) {
        document.getElementById("slide").style.opacity=(i*10)
        setInterval(nextSlide, 100)
    }
}
 
function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
}
 
function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    showSlide(currentSlide);
}
 
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    document.getElementById("slide").style.opacity=("50% ");
    setInterval(nextSlide, 6000); // 6초마다 자동 슬라이드 

});