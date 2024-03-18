const fs = require('fs').promises;

async function getLatLng(cityNameAndCountry) {
    try {
        const data = await fs.readFile('./src/worldcities.json', 'utf-8');
        const cities = JSON.parse(data);
        const city = cities.find(city => city.city === cityNameAndCountry);
        if (city) {
            return { lat: city.lat, lng: city.lng };
        } else {
            throw new Error('City not found');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Example usage
getLatLng('Kano, Nigeria')
    .then(coords => console.log(coords))
    .catch(error => console.error(error));