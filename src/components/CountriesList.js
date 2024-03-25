import Country from "./Country";

const CountriesList = ({countries, handleCountries}) => {

    const mappedCountries = countries.map((country, index) => {
        return <Country country={country} key={index} handleCountries={handleCountries} />
    });

    return ( 
        <div>
            <h2>Countries of the World!</h2>
            {mappedCountries}
        </div>
     );
}
 
export default CountriesList;