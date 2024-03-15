export default function initAnimaNumeros() {
  function animaNumeros() {
    const numerosList = document.querySelectorAll("[data-numero]");

    numerosList.forEach((numero) => {
      const total = +numero.innerText;

      const incremento = Math.floor(total / 100);

      let start = 0;

      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 30);
    });
  }

  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector(".numeros");
  observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
