import Country from "./Country";

const CountriesList = ({countries, handleCountries}) => {

    const mappedCountries = countries.map((country, index) => {
        return <Country country={country} key={index} handleCountries={handleCountries} />
    });

   // const mappedVisitedCountries = visitedCountries.

    return ( 
        <div>
            <h2>Countries I want to visit:</h2>
            {mappedCountries}

            <h2>Visited Countries:</h2>
        </div>
     );
}
 
export default CountriesList;