import { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountry}) => {
    // console.log(country);
    const {name, flags, population, area, cca3} = country

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }

    const passWithParams = () => {
        handleVisitedCountry(country)
    }
    console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited ? 'visited' : ''}`}>
            <h3 style={{color: visited ? 'purple' : 'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passWithParams}>Mark visited</button> <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button> <br />
            {visited ? "I have visited this country" : 'I want to visit'}
            
        </div>
    );
};

export default Country;