let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
    setTimeout(showSlides, 3000);
}

showSlides();

document.getElementById('home-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('ai-article').style.display = 'block';
    document.getElementById('js-article').style.display = 'none';
});

document.getElementById('js-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('ai-article').style.display = 'none';
    document.getElementById('js-article').style.display = 'block';
});
