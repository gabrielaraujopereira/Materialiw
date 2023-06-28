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
class MobileNavbar{
constructor(menu, nav) {
    this.menu = document.querySelector('#menu-icon');
    this.nav = document.querySelector('nav ul');
    this.activeClass = "active";
}

handleClick() {
    console.log(this);
    this.nav.classList.toggle(this.activeClass);
}

addClickEvent() {
    this.menu.addEventListener("click", this.handleClick);
}

init() {
    if (this.menu){
        this.addClickEvent();
    }
    return this;
  }
}

const menu = new MobileNavbar(
    ".menu",
    ".nav ul",
    "nav ul li"
)