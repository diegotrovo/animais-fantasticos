export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numerosList = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind do objeto da classe aos callbacks
    this.handleMutation = this.handleMutation.bind(this);
  }

  animaNumeros() {
    this.numerosList.forEach((numero) => {
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
      }, 50 * Math.random());
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numerosList.length && this.observerTarget && this.observerClass) {
      this.addMutationObserver();
    }

    return this;
  }
}
