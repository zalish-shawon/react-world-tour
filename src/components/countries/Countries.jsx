import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = (country) => {
        console.log('add this to your visited country');
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    return (
        <div >
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited countries: {visitedCountries.length} </h5>
                <ul>
                    {
                        visitedCountries.map(country => <p style={{lineHeight: '10px'}} key={country.cca3}>{country.name.common}</p> )
                    }
                </ul>
            </div>
            <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry ={handleVisitedCountry}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;