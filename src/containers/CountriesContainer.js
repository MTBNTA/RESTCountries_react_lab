import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import VisitedCountries from "../components/VisitedCountries";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        fetchCountries();
    }, []);

    return ( 
        <>
            <CountriesList countries={countries} />
            <VisitedCountries countries={countries}/>
        </>
     );
}
 
export default CountriesContainer;