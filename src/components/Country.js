import { useState } from "react";

const Country = ({country, handleCountries}) => {

    const handleClick = (event) => {
        handleCountries(country)

    }

    return ( 
        <ul>
            {country.name.common}
            {country.flag}
            <button
            onClick={handleClick}
            >Visit! </button>
        </ul>
     );
}
 
export default Country;