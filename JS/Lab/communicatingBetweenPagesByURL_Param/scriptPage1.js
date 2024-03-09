function setPressedButton(id){
    console.log(id);
    localStorage.setItem('showedSection', id);
    window.open('page2.html?showedSection=' + id, '_self');
}


