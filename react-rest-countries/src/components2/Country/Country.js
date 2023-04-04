import React from 'react';
import './Country.css'
const Country = (props) => {
    const {area, region, name, flags} = props.country;
    // const {area, region, population, name} = props.country;
    return (
        <div className='country bg-primary-subtle'>
            <h2>Name:{name.common} </h2>
            <img src={flags.png} alt="" />
            <p>Area:{area} </p>
            <p>Region: {region} </p>
        </div>
    );
};


            // {/* <h2>Country Name: {name.common} </h2>
            // <h3>Population: {population} </h3>
            // <h5>Region: {region} </h5>
            // <h5>Area:{area}</h5> */}

            // {/* <h2>Country Name: {props.country.name.common} </h2>
            // <h3>Population: {props.country.population} </h3>
            // <h5>Region: {props.country.region} </h5>
            // <h5>Area:{props.country.area}</h5> */}

export default Country;