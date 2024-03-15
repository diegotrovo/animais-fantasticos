export default function initAnimateToScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  function animateScroll() {
    sections.forEach((section) => {
      const halfWindowHeight = window.innerHeight * 0.6;
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - halfWindowHeight < 0;

      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  if (sections.length) {
    animateScroll();

    window.addEventListener("scroll", animateScroll);
  }
}
