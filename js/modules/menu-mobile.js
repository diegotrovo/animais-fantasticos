import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventosClick = ["touchstart", "click"];

  function openMenu(event) {
    event.preventDefault();
    menuButton.classList.toggle("active");
    menuList.classList.toggle("active");

    outsideClick(menuList, eventosClick, () => {
      menuButton.classList.remove("active");
      menuList.classList.remove("active");
    });
  }

  if (menuButton && menuList) {
    eventosClick.forEach((userEvent) =>
      menuButton.addEventListener(userEvent, openMenu)
    );
  }
}
