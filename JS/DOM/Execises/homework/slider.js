const images = ["asset/image1.jpg", "asset/image2.jpg", "asset/image3.jpg"];

let currentIndex = 0;
const imageElement = document.getElementById("image");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

function updateImage() {
    imageElement.src = images[currentIndex];
}

function showPreviousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateImage();
}

function showNextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateImage();
}

prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);


updateImage();
