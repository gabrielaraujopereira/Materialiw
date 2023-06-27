function pesquisar(){
    var input,filtro,personagens,persoItens,links;
    input = document.getElementById("pesquisa");
    filtro = input.value.toUpperCase();
    personagens = document.getElementById("personagens");
    persoItens = personagens.getElementsByTagName("li");
    for(var i=0;i<persoItens.length;i++){
        links = persoItens[i].getElementsByTagName("a")[0];
        if(links.innerHTML.toUpperCase().indexOf(filtro)>-1){
            persoItens[i].style.display="";
        }else{
            persoItens[i].style.display="none";
        }
    }
}

Let menu = document.querySelector('#menu-icon');
Let nav = document.querySelector('nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.banner', {delay: 200, origin:'top'});
sr.reveal('.scroll-down', {delay: 500, origin:'right'});