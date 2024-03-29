export default function initHorarioFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");

  if (funcionamento) {
    const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);
    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();

    const diaSemanaAberto = diasSemana.indexOf(diaAgora) !== -1;
    const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

    if (diaSemanaAberto && horarioAberto) {
      funcionamento.classList.add("open");
    } else {
      funcionamento.classList.remove("open");
    }
  }
}
