export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"');
  const botaoFechar = document.querySelector('[data-modal="fechar"');
  const containerModal = document.querySelector('[data-modal="container"');

  const botaoMenuMobile = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");

    // se Mobile > fecha MenuMobile ao abrir o modal
    if (botaoMenuMobile && menuList) {
      if (menuList.classList.contains("active")) {
        botaoMenuMobile.classList.toggle("active");
        menuList.classList.toggle("active");
      }
    }
  }

  function cliqueForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
