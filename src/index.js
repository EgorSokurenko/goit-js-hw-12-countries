import './sass/main.scss';
import conuntrySample from './partials/country';
import conuntrysSample from './partials/countrys';
import fetchCountries from './fetchCountries';
// import notie from 'notie';
// import { VERSION } from 'lodash';
var debounce = require('lodash.debounce');
import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

const input = document.querySelector('#country-input');
const list = document.querySelector('#list-country');
const listTWo = document.querySelector('#list-two');

input.addEventListener('input', debounce(searchCountrys, 500));

function searchCountrys(evt) {
  let country = document.querySelector('#country');
  if (evt.target.value === '') {
    list.removeChild(country);
    return;
  } else if (country) {
    list.removeChild(country);
  }

  let valueInp = evt.target.value;
  fetchCountries(valueInp)
    .then(country => {
      console.log(country);
      let link = country[0].flags[0];
      if (country.length === 1) {
        list.innerHTML = conuntrySample({ country, link });
      } else if (country.length > 1 && country.length <= 10) {
        list.innerHTML = conuntrysSample(country);
      } else if (country.length > 10) {
        error({ text: 'Too many matches found. Please enter a more specific query!' });
      }
    })
    .catch(error => {
      console.log(error);
    });
}
