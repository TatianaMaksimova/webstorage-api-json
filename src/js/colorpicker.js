const Handlebars = require('handlebars');

// import colorCardTpl from '../templates/color-card.hbs';
// import colorCardsTpl from '../templates/color-cards.hbs';
// import template from '../templates/color-card.hbs';
import colors from './colors.json';
import '../css/common.css';
import '../css/colorpicker.css';

const template = Handlebars.compile(
  '{{#each this}}<div class="color-card"><div class="color-swatch" data-hex="{{hex}}" data-rgb="{{rgb}}"style="background-color: {{hex}}"></div><div class="color-meta"><p>HEX: {{hex}}</p><p>RGB: {{rgb}}</p></div></div>{{/each}}',
);
// console.log(template({ hex: '#f44336', rgb: '244,67,54' }));

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', onPaletteContainerClick);

function createColorCardsMarkup(colors) {
  // return colors.map(color => colorCardTpl(color)).join('');
  // return colors.map(template).join('');
  // return colorCardsTpl(colors);
  return template(colors);
}

function onPaletteContainerClick(evt) {
  const isColorSwatchEl = evt.target.classList.contains('color-swatch');

  if (!isColorSwatchEl) {
    return;
  }

  const swatchEl = evt.target;
  const parentColorCard = swatchEl.closest('.color-card');

  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}
