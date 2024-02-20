let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://picsum.photos/v2/list/?limit=5');

xhr.onload = function() {
    if (xhr.status != 200) {
        console.log("Error: " + xhr.status);
    } else {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};

xhr.onprogress = function(event) {
    console.log(`Loaded ${event.loaded} of ${event.total}`);
}

xhr.onerror = function() {
    console.log("Request failed with error", xhr.status);
}

xhr.send();