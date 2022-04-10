const Handlebars = require('handlebars');

import '../css/common.css';
import '../css/gallery.css';
import countries from './countries.json';
// import itemsTemplate from '../templates/gallery-items.hbs';

const template = Handlebars.compile(
  '{{#each this}}<li class="gallery__item"><div class="gallery__thumb"><img src="{{flag}}" alt="Флаг {{name}}" width="320"></div><h2>{{name}}</h2><p><b>Столица: {{capital}}</b> </p><p><b>Валюта:</b> {{currency}}</p><p><b>Официальный язык:</b> {{language}}</p><p><b>Население:</b> {{population}} человек</p>{{#if infected}}<p style="color: red;">Всё пропало!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>{{/if}}{{#unless infected}}<p style="color: green;">Фух, пронесло</p>{{/unless}}</li>{{/each}}',
);

const galleryRef = document.querySelector('.js-gallery');

const markup = template(countries);
galleryRef.insertAdjacentHTML('beforeend', markup);
