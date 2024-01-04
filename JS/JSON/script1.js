let data;


fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            console.log(post);
        });
    });

