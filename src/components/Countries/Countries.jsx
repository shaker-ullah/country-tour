import { useEffect } from "react";
import { useState } from "react";
import Country from "../Countey/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
const [visitedConries, setVisitedCountries]=useState([])


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
        .then(data =>setCountries(data))
    }, [])
    
    const handleVisitedCountry = country => {
        setVisitedCountries([...visitedConries, country])
        console.log(country)
}


    return (
        <div className="main">
            <h1 className="title">Countries {countries.length}</h1>
            <div>
                <h5>Visited Countries { visitedConries.length}</h5>
            <ul>
                    {
                        visitedConries.map(country => <li key={country.cca2}>{ country?.area}</li>)
                  }
                    
            </ul>
            </div>
          
            <div className="countries">
            {
                countries.map(country => <Country country={country}
                    key={country.cca2}
                handleVisitedCountry={handleVisitedCountry}></Country>)
            }
          </div>
        </div>
    );
};

export default Countries;