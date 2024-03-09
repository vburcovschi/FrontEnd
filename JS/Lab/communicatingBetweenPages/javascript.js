//localStorage.setItem('showedSection', 'first');


let sectionID = localStorage.getItem('showedSection');

function setPressedButton(id){
    console.log(id);
    localStorage.setItem('showedSection', id);
    window.open('page2.html');
}

function showSection(sectionID) {
    let sections = document.getElementsByClassName(sectionID);
    console.log(sections);
    for (let section of sections) {
        section.style.display = 'block';
    }
}

showSection(sectionID);