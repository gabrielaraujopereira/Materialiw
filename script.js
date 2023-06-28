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

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();
