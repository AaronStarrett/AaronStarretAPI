const baseUrl = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=";
let url;

//search form

const stateSearch = document.querySelector('.stateSearch');
const submitBtn = document.querySelector('.submit');
const searchForm = document.querySelector('form');
const displayIsh = document.querySelector('.displayIsh');


searchForm.addEventListener('submit', fetchResults);

function fetchResults(e){
    console.log(stateSearch.value);
    e.preventDefault();
    url = baseUrl + stateSearch.value;
    console.log(url);

    fetch(url).then(function(result){
        return result.json();
    }).then(function(json){
        displayResults(json);
        console.log(json);
    });
}

function displayResults(json){
    while (displayIsh.firstChild){
        displayIsh.removeChild(displayIsh.firstChild);
    }
    let response = json.teams;
    console.log(response[0].strTeam);

    for(let i = 0; i <= response.length; i++){

        let para = document.createElement('p');

        // let current = response[i].strTeam;

        para.textContent = response[i].strTeam;

        displayIsh.appendChild(para);

        // console.log('Current:', current);    
    }
};










