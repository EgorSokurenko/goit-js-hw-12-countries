import './sass/main.scss';
import conuntrySample from './partials/country'
import conuntrysSample from './partials/countrys'
import fetchCountries from './fetchCountries'
import notie from 'notie'
import { VERSION } from 'lodash';
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
      list.removeChild(country)   
    }
    let valueInp = evt.target.value
    fetchCountries(valueInp)
    .then(
        country=>{
            
            if(country.length === 1){
               
                list.innerHTML=conuntrySample(country)
            }else if(country.length>1&&country.length<=10){
                list.innerHTML=conuntrysSample(country)
                
            }else if(country.length>10){
                reject('There was an error :(');
                
                    
            }
        })
    .catch(error=>{
        
        console.log(error);
        notie.alert({ type: 3, text: 'Произошла ошибочка :(', position: 'bottom' })
        })
}

function errorLog(){
    notie.alert({ type: 3, text: 'Произошла ошибочка :', position: 'bottom' })
}
