import Country from "./Country";

const CountriesList = ({countries, handleCountries}) => {

    // index of country in array must be used as country.id from object is not present in API
    const mappedCountries = countries.map((country, index) => {
        return <Country
                country={country}
                key={index}
                handleCountries={handleCountries}
                />
    });

    return ( 
        <div>
            {mappedCountries}
        </div>
     );
}
 
export default CountriesList;