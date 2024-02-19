const imagesContainer = document.querySelector(".images-container");
imagesContainer.addEventListener("click", handleLikeClick);

function handleLikeClick(event) {
    const target = event.target;
    if (target.classList.contains("like-button")) {
        const image = target.parentNode.querySelector("img");
        image.classList.toggle("liked");
        target.classList.toggle("liked");
    }
}

function addImageToGallery(url) {
    const image = document.createElement("img");
    image.src = url;

    const likeButton = document.createElement("button");
    likeButton.innerHTML = "Нравится";
    likeButton.classList.add("like-button");

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(likeButton);

    imagesContainer.appendChild(imageWrapper);
}

addImageToGallery(
    "https://images.unsplash.com/photo-1686078006708-70b9f593f347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
);
addImageToGallery(
    "https://images.unsplash.com/photo-1682761986616-32d8af51efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1832&q=80"
);
addImageToGallery(
    "https://images.unsplash.com/photo-1684057044985-6cb9a99b4663?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=782&q=80"
);
