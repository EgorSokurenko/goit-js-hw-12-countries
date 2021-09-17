import './sass/main.scss';
import conuntrySample from './partials/country'
import conuntrysSample from './partials/countrys'
import notie from 'notie'
var debounce = require('lodash.debounce');
var PNotify = require('@pnotify/core');







const input = document.querySelector('#country-input')
const list = document.querySelector('#list-country')
const listTWo = document.querySelector('#list-two')

input.addEventListener('input', debounce(searchCountrys,500))

function searchCountrys(evt){
    let country = document.querySelector('#country')
    if(evt.target.value === ''){
        list.removeChild(country)
        return
    }else if(country){
        console.log(country);
      list.removeChild(country)   
    }
    let valueInp = evt.target.value
    
    fetch(`https://restcountries.eu/rest/v2/name/${valueInp}`)
    .then(res=>res.json())
    .then(
        
        country=>{
            
            if(country.length === 1){
               
                list.insertAdjacentHTML('beforeend', conuntrySample(country))
            }else if(country.length>1&&country.length<=10){
                list.insertAdjacentHTML('beforeend', conuntrysSample(country))
                
            }else if(country.length>10){
                notie.alert({ type: 3, text: 'Too many matches found. Please enter a more specific query!', position: 'bottom' })
                // PNotify.error({
                //     text: 'Too many matches found. Please enter a more specific query!'
                //   });
                    
            }
        })
    .catch(error=>{console.log(error);})
}


