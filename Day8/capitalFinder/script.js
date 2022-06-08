const input = document.getElementById("input")


const baseURL = "https://restcountries.com/v3.1/name/";

async function getCountry(countryName){
    const countryURL = baseURL + countryName;
    console.log(countryURL);

    const response = await fetch(countryURL, {
        method: 'GET',
        headers: {'Content-Type': 'application/json',}
    });

    console.log("worked");
    // console.log(response.json);
    return response.json(); 

}

async function init(countryName){
    try{
        const gotCountry = await getCountry(countryName);
        console.log("GET", gotCountry);

        const countryCapital = await gotCountry[0].capital;
        console.log(countryCapital);

        output.innerHTML = countryCapital;
        output.classList.remove('hide');
        
    } catch(err){
        console.log(err);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const countryName = input.value;
    input.value = "";
    
    
    console.log(countryName);
    init(countryName);
})