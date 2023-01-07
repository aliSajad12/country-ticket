let countryBox = document.getElementById('countries');
let citySelect = document.getElementById('cities');

let countryPhotos = [
    {id: 1, name: 'Australia', img: 'img/2.jpg'}
]

let countriesData = {
    Afghanistan: ['Kabul', 'Bamiyan', 'Mazar-e-sharif', 'Herat', 'Ghazni'],
    USA: ['Nevada', 'Los Vegas', 'Indiana-Police', 'Los Angeles', 'California'],
    Canada: ['Ottawa', 'Toronto', 'Winnipeg', 'Fredericton', 'Halifax'],
    Australia: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
    London: ['Bath', 'Birmingham', 'Bradford', 'Bristol', 'Cambridge'],
}

countryBox.addEventListener('change', () =>{

    if(countryBox.value === 'Please'){
        citySelect.innerHTML = '';
        citySelect.innerHTML += `<option>Select City</option>`;

    } else{
        let mainCountry = countryBox.value;
        let mainCountryCity = countriesData[mainCountry];

        let countryName = document.getElementById('countryName');
        countryName.innerText = mainCountry;

        let countryPhoto = document.getElementById('countryPhoto');

        switch(countryBox.value){
            case 'Afghanistan':
                countryPhoto.setAttribute('src', 'img/Afg.jpg');
                countryPhoto.style.display = 'block';
            break;  
            case 'USA':
                countryPhoto.setAttribute('src', 'img/Usa.jpg');
                countryPhoto.style.display = 'block';
            break;  
            case 'Australia':
                countryPhoto.setAttribute('src', 'img/Austra.jpg');
                countryPhoto.style.display = 'block';
            break;  
            case 'Canada':
                countryPhoto.setAttribute('src', 'img/Canada.jpg');
                countryPhoto.style.display = 'block';
            break;  
            case 'London':
                countryPhoto.setAttribute('src', 'img/London.jpg');
                countryPhoto.style.display = 'block';
            break;  
        }

        citySelect.innerHTML = '';

        mainCountryCity.forEach((city) => {
            // console.log(city)
            citySelect.innerHTML += `<option>${city}</option>`;
        });
    };
})