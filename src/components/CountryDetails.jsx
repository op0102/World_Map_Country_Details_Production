// src/components/CountryDetails.js
import React from 'react';

const CountryDetails = ({ mapData }) => {


  return (


    <>

      <h1 className="country_name">{mapData.name.common}</h1>
      <img src={mapData.flags.png} alt="" style={{ width: "190px", height: "100px", marginTop: "-0.8rem" }} />

      <p><b>Capital </b>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {mapData.capital}</p>

      <p> <b>Currency</b>   &nbsp;&nbsp;&nbsp;{`${mapData.currencies[Object.keys(mapData.currencies)].symbol}, ${Object.keys(mapData.currencies)},`} </p>

      <p style={{ marginLeft: "25%" }}>{mapData.currencies[Object.keys(mapData.currencies)].name}</p>

      <p> <b>Population</b> {mapData.population}</p>

      <p> <b>LatLang</b>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${mapData.latlng[0]}, ${mapData.latlng[1]}`}</p>
      <p> <b>Language</b>  &nbsp;
        {Object.values(mapData.languages).map((lang, id) => {
          return <span key={id}>{lang}</span>
        })}

      </p>

      <p> <b>Area</b>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{mapData.area}</p>

      <p> <b>TimeZone</b>&nbsp;&nbsp; {mapData.timezones[0]}</p>

      <p> <b>Region</b>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{mapData.subregion}</p>
    </>
  )
}


export default CountryDetails;
