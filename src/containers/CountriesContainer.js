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
     
    }

    return ( 
        <>
            <CountriesList countries={countries} handleCountries={handleCountries} />
            <CountriesList countries={visitedCountries} />
        </>
     );
}
 
export default CountriesContainer;