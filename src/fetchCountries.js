import { error } from "@pnotify/core";

export default function fetchCountries(searchQuery){
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(res=>{
            
            if(res.ok!=true){
                return reject()
                
            }else if(res.ok===false){
                reject('loшпед')
                
            }
            return res.json()})
            .catch(error=>{console.log(error)})
        }
    
