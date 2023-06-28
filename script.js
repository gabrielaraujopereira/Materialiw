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

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
