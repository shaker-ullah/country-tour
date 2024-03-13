import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
    console.log(country)
    const { name, flags, population, area } = country;
    
const [visited, setVisited]=useState(false)

    const handleVisited = () => {
    setVisited(!visited)
}

  
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2 style={{ color: visited ? 'purple': 'red'}}>Name: {name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: { population}</p>
            <p>Area: {area}</p>
            <button onClick={()=>handleVisitedCountry(country?.name?.common)}>Mark Visited</button>
            <button onClick={handleVisited}>{visited?'Visited':'Going' }</button>
            {
                visited && 'I have visited This country'
            }
        </div>
    );
};

export default Country;