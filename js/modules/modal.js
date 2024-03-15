export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal, botaoMenuMobile, menuListMobile) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    this.botaoMenuMobile = document.querySelector(botaoMenuMobile);
    this.menuListMobile = document.querySelector(menuListMobile);

    this.classAtivo = "active";

    // bind this ao callback para fazer referencia ao objeto da classe
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  handleToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");

    // Fechar MenuMobile ao abrir o modal
    if (this.botaoMenuMobile && this.menuListMobile) {
      if (this.menuListMobile.classList.contains(this.classAtivo)) {
        this.botaoMenuMobile.classList.toggle(this.classAtivo);
        this.menuListMobile.classList.toggle(this.classAtivo);
      }
    }
  }

  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  addEventListener() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.botaoAbrir.addEventListener("click", this.handleToggleModal);
      this.botaoFechar.addEventListener("click", this.handleToggleModal);
      this.containerModal.addEventListener("click", this.cliqueForaModal);
    }
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addEventListener();
    }

    return this;
  }
}
