document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('troca');
    let image = document.querySelector('img');
    let imageIndex = 0;
    let images = ['emoji 1.jpg', 'emoji 2.jpg', 'emoji 3.jpg'];

    button.addEventListener('click', function() {
        image.src = images[imageIndex];
        imageIndex = (imageIndex + 2) % images.length;
    });
});