let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showImage(index) {
    images.forEach((image, i) => {
        image.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

setInterval(nextImage, 3000); // Troca de imagem a cada 3 segundos

// Inicializa o carrossel com a primeira imagem visível
showImage(currentIndex);
