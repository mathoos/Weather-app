/*

const CLEFAPI = '0bd35073a3ad84f60d34d7314e43b93f';
let resultatsAPI;

const temps = document.querySelector('.temps');
const temperature = document.querySelector('.temperature');
const localisation = document.querySelector('.localisation');
const heure = document.querySelectorAll('.heure-nom-prevision');
const tempPourH = document.querySelectorAll('.heure-prevision-valeur');
const joursDiv = document.querySelectorAll('.jour-prevision-nom');
const tempJoursDiv = document.querySelectorAll('.jour-prevision-temp');
const imgIcone = document.querySelector('.logo-meteo');
const chargementContainer = document.querySelector('.overlay-icone-chargement');

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        //console.log(position)
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        AppelAPI(long, lat);
    }, () =>{
        alert(`Vous avez refusé la géolocalisation, l'application ne peut pas fonctionner. Veuillez l'activer`)
    })
}

function AppelAPI(long, lat){
    
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${CLEFAPI}`)
    .then((reponse) =>{
        return reponse.json()

    })
    .then((data) =>{
        
        resultatsAPI = data; 
        temps.innerText = resultatsAPI.current.weather[0].description;
        temperature.innerText = `${Math.trunc(resultatsAPI.current.temp)}°`; //Math.trunc permet de tronquer le chiffre après la virgule
        localisation.innerText = resultatsAPI.timezone;


        // les heures par tranche de trois avec les températures

        let heureActuelle = new Date().getHours();

        for(let i = 0; i < heure.length; i++){
            let heureIncr = heureActuelle + i * 3;
            if(heureIncr > 24){
                heure[i].innerText = `${heureIncr - 24} h`;
            }
            else if(heureIncr === 24){
                heure[i].innerText = `00h`
            }
            else{
                heure[i].innerText = `${heureIncr} h`;
            }           
        }

        // températures toutes les 3h

        for(let j = 0; j < tempPourH.length; j++){
            tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
        }

        // 3 premières lettres des jours 

        for(let k = 0; k < tabJoursEnOrdre.length; k++){
            joursDiv[k].innerText = tabJoursEnOrdre[k].slice(0,3);
        }

        // température par jours 

        for(let m = 0; m < 7 ; m++ ){
            tempJoursDiv[m].innerText = `${Math.trunc(resultatsAPI.daily[m + 1].temp.day)}°`
        }

        // Logo qui change en fonction du temps 

        if(heureActuelle >= 6 && heureActuelle < 21){
            imgIcone.src = `ressources/jour/${resultatsAPI.current.weather[0].icon}.svg`
        }
        else{
            imgIcone.src = `ressources/nuit/${resultatsAPI.current.weather[0].icon}.svg`
        }
        chargementContainer.classList.add('disparition')


    })
}



// GESTION DE TEMPS 


const joursSemaine = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

let ajd = new Date();
let options = {weekday: 'long'};
let jourActuel = ajd.toLocaleDateString('fr-FR', options);

jourActuel = jourActuel.charAt(0).toUpperCase() + jourActuel.slice(1);

let tabJoursEnOrdre = joursSemaine.slice(joursSemaine.indexOf(jourActuel)).concat(joursSemaine.slice(0, joursSemaine.indexOf(jourActuel)));

*/