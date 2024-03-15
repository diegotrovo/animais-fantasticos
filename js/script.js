import ScrollSuave from "./modules/scroll-suave.js";
import initAnimateToScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initHorarioFuncionamento from "./modules/horario-funcionamento.js";
import initExemploFetch from "./modules/fetch.js";
import initFetchAnimais from "./modules/fech-animais.js";
import initFetchBitcoin from "./modules/fech-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-tab="menu"] a[href^="#"]');
scrollSuave.init();

initAnimateToScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initHorarioFuncionamento();
initExemploFetch();
initFetchAnimais();
initFetchBitcoin();
