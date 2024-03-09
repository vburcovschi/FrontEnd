let sectionID = localStorage.getItem('showedSection');

function showSection(sectionID) {
    let sections = document.getElementsByClassName(sectionID);
    for (let section of sections) {
        section.style.display = 'block';
    }
}

window.onload = function() {
    showSection(sectionID);
}