import Country from "./Country";

const CountriesList = ({countries}) => {

    const mappedCountries = countries.map((country, index) => {
        return <Country country={country} key={index}/>
    });

    // console.log(mappedCountries);

    const handleCheckbox = (event) => {
        event.preventDefault();

        // code here
    }

    return ( 
        <div>
            <h2>Countries I want to visit:</h2>
            {mappedCountries}
        </div>
     );
}
 
export default CountriesList;