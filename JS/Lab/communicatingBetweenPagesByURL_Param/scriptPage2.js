function showSection(showedSection) {
    let sections = document.getElementsByClassName(showedSection);
    for (let section of sections) {
        section.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    let url = new URL(window.location.href);
    let showedSection = url.searchParams.get('showedSection');
    showSection(showedSection);
});



/*window.onload = function() {
    let url = new URL(window.location.href);
    let showedSection = url.searchParams.get('showedSection');
    showSection(showedSection);
};*/

/***
The difference between document.addEventListener("DOMContentLoaded", function(event) {}) and window.onload = function() {} lies in how they handle the event when the DOM content has finished loading.

document.addEventListener("DOMContentLoaded", function(event) {}):

This method waits for the HTML document to be completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. It is considered more efficient because it allows the script to run as soon as possible without waiting for all external resources to load.
    Multiple event listeners can be added using this method to handle the DOMContentLoaded event.
    This event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
    window.onload = function() {}:

This method waits for the entire page (including external resources like images and stylesheets) to be fully loaded before executing the provided function.
Only one function can be assigned to window.onload, so if multiple functions need to be executed, they must be combined within a single function.
The onload event is triggered when the whole page (including all dependent resources) has finished loading.
    In summary, document.addEventListener("DOMContentLoaded", function(event) {}) is preferred for executing code as soon as the DOM is ready without waiting for all external resources, while window.onload = function() {} is used when you need to wait for all resources to be fully loaded before executing the code.
 */