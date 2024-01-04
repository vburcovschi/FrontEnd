const loadBtn = document.querySelector(".load-btn");
const cleanBtn = document.querySelector(".clean-btn");
const postsContainer = document.getElementById("posts-container");

const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((post) => {
                const postElement = document.createElement("div");
                postElement.classList.add("post");
                postElement.innerHTML = `<h2>${post.title}</h2>
                                         <p>${post.body}</p>
                                        `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

const cleanData = () => {
    postsContainer.innerHTML = "";
};

loadBtn.addEventListener("click", fetchData);
cleanBtn.addEventListener("click", cleanData);
