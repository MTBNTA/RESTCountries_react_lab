const Country = ({country}) => {

    // const countryName = country.map((name) => {
    //     return <li key={name.id}>{name.common}</li>
    // });

    return ( 
        <ul>
            {country.name.common}
        </ul>
     );
}
 
export default Country;