import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        fetchCountries();
    }, []);

    const handleCountries = (country) => {
        setVisitedCountries([...visitedCountries, country]);
        
        // find country in countries list
        const countryIndex = countries.indexOf(country);
        // remove that country from countries list
        setCountries(countries.toSpliced(countryIndex, 1));
    }

    return ( 
        <>
            <h2>Countries of the world!</h2>
            <CountriesList countries={countries} handleCountries={handleCountries} />
            {/* countries ? <CountryList countries={countries} /> : <p>Loading...</p> */}
            <h2>Visited Countries:</h2>
            <CountriesList countries={visitedCountries} />
        </>
     );
}
 
export default CountriesContainer;