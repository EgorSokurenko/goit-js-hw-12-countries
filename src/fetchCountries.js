import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

export default function fetchCountries(searchQuery) {
  if (searchQuery === ' ' || searchQuery === '') {
    error({ text: 'ВВЕДИ ЧТО-ТО!!!!!' });
    return;
  }
  return fetch(`https://restcountries.com/v3/name/${searchQuery}`)
    .then(res => {
      if (res.ok != true) {
        error({ text: 'Некоректно' });
        return;
      } else if (res.ok === false) {
        reject('loшпед');
      }
      return res.json();
    })
    .catch(error => {
      console.log(error);
    });
}
