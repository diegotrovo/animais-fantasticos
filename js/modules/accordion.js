export default function initAccordion() {
  const faqAccordionList = document.querySelectorAll(
    '[data-anime="faqAccordion"] dt'
  );
  const activeClass = "ativo";

  function activeFaqAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (faqAccordionList.length) {
    faqAccordionList[0].classList.add(activeClass);
    faqAccordionList[0].nextElementSibling.classList.add(activeClass);

    faqAccordionList.forEach((item) => {
      item.addEventListener("click", activeFaqAccordion);
    });
  }
}
