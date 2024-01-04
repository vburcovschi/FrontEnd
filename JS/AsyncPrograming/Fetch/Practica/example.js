import fetch from 'node-fetch';
const URL = "https://jsonplaceholder.typicode.com/albums?_start=0&_limit=5";
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