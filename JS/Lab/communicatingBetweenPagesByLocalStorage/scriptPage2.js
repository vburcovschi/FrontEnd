let sectionClassName = localStorage.getItem('showedSection');

function showSection(sectionClassName) {
    let sections = document.getElementsByClassName(sectionClassName);
    for (let section of sections) {
        section.style.display = 'block';
    }
}

window.onload = function() {
    showSection(sectionClassName);
}