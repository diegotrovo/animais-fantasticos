import outsideClick from "./outside-click.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  const eventosClick = ["touchstart", "click"];

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("active");

    outsideClick(this, eventosClick, () => {
      this.classList.remove("active");
    });
  }

  if (dropdownMenus) {
    dropdownMenus.forEach((menu) => {
      eventosClick.forEach((userEvent) => {
        menu.addEventListener(userEvent, handleClick);
      });
    });
  }
}
