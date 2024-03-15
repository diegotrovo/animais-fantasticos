export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-tab="menu"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    // Forma 1
    // const offsetTopSection = section.offsetTop;
    // window.scrollTo(0, offsetTopSection);

    // Forma 2
    // window.scrollTo({
    //   top: offsetTopSection,
    //   behavior: "smooth",
    // });

    // Forma 3
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
