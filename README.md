# CityLatLng

## Description

City LatLng is a Node.js package that allows users to retrieve latitude and longitude coordinates based on city names. It provides a simple interface to fetch geographical coordinates from a JSON dataset containing a list of cities worldwide.

## Installation

To install City LatLng, use npm:
    
    npm install city-latlng

## Usage

    const cityLatLng = require('city-latlng');
    getLatLng('Kaduna, Nigeria')
        .then(coords => console.log(coords))
        .catch(error => console.error(error));

## API
### cityLatLng(cityNameAndCountry)

 - cityNameAndCountry: An string of city name and it's country seperated by commer example `Kaduna, Nigeria` for which you want to retrieve latitude and longitude coordinates.

Returns a Promise that resolves to an object, containing its latitude and longitude coordinates. If a city name is not found in the dataset, it will be skipped, and an error message will be logged.

## Dependencies

- node-fetch: For making HTTP requests to fetch the city data.

## Contribution

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## Authors

Musa Jibril [musjib999@gmail.com](mailto:musjib999@gmail.com)






## Calculating loan

### Sample code:

var calcLibrary = require("@muhammad-tanko/loancalculator");

var Calculator = new calcLibrary.LoanCalc();

    Calculator.LoanCalc(1000000,//loan amount you are requesting for
     20, //Number of installments you want 
     70  // Your credit score (should not be less than 70)
     );


