import Country from "./Country";

const CountriesList = ({countries}) => {

    const mappedCountries = countries.map((country) => {
        return <Country country={country} key={country.name.common}/>
    });

    return ( 
        <>
            {mappedCountries}
        </>
     );
}
 
export default CountriesList;