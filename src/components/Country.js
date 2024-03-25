import { useState } from "react";

const Country = ({country}) => {

    const [countryName, setCountryName] = useState("");
    const [isChecked, setIsChecked] = useState([]);

    return ( 
        <ul>
            {country.name.common}
            <input
            type="checkbox"
            name="checkbox"
            value={countryName}
            onChange={(event) => setIsChecked(event.target.value)}
            />
        </ul>
     );
}
 
export default Country;