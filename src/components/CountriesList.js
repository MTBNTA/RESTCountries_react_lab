import Country from "./Country";

const CountriesList = ({countries}) => {

    const mappedCountries = countries.map((country, index) => {
        return <Country country={country} key={index}/>
    });

    console.log(mappedCountries);

    return ( 
        <>
            {mappedCountries}
        </>
     );
}
 
export default CountriesList;