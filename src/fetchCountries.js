import { error } from "@pnotify/core";

export default function fetchCountries(searchQuery){
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(res=>{
            if(res.ok!=true){
                return
            }else if(res.json().length>10){
                reject('loшпед')
                return
            }
            return res.json()})
}
