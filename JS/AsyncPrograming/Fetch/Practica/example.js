import fetch from 'node-fetch';
//const URL = "https://jsonplaceholder.typicode.com/albums?_start=0&_limit=5";
const URL = "https://jsonplaceholder.typicode.com/users";
let data;
/*const fetchData = () =>{
    fetch(URL)
        .then(res => res.json()).then(res => {
        getValues(res)
        })
        .catch(err => console.log(err.message))
}*/

const fetchData = async () =>{
    try {
    let json = await  fetch(URL);
    let data  = await json.json();
    console.log(data)
    }catch (e){
        console.log(e.message);
    }finally {
        console.log("Operation finished")
    }
}
fetchData();

const getValues = (obj) => {
    obj.forEach(elem => {
        //const values = Object.entries(elem);
        const values = Object.values(elem);
        console.log(values)
    })
}


async function fetchPosts(id) {
    try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if (!res.ok) {
            console.log(res.status)
            throw new Error("Нет такого поста");

        }
        console.log(res.status)
        let post = await res.json();
        console.log(post);
    } catch (e) {
        console.log(e.message, "Отработал блок catch");
    }
}

// fetchPosts(101);
