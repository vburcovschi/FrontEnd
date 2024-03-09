function showSection(showedSection) {
    let sections = document.getElementsByClassName(showedSection);
    for (let section of sections) {
        section.style.display = 'block';
    }
}

window.onload = function() {
    let url = new URL(window.location.href);
    let showedSection = url.searchParams.get('showedSection');
    showSection(showedSection);
}