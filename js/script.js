import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initHorarioFuncionamento from "./modules/horario-funcionamento.js";
import initExemploFetch from "./modules/fetch.js";
import initFetchAnimais from "./modules/fech-animais.js";
import initFetchBitcoin from "./modules/fech-bitcoin.js";

import initAnimateToScroll from "./modules/scroll-animacao.js";

const scrollSuave = new ScrollSuave('[data-tab="menu"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="faqAccordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menuAnimais"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"',
  '[data-modal="fechar"',
  '[data-modal="container"',
  '[data-menu="button"]',
  '[data-menu="list"]',
  '[data-modal="botaoLogin"]'
);
modal.init();

const toolTip = new Tooltip("[data-tooltip]");
toolTip.init();

initDropdownMenu();
initMenuMobile();
initHorarioFuncionamento();
initExemploFetch();
initFetchAnimais();
initFetchBitcoin();

initAnimateToScroll();
