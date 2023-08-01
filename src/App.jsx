// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import { MapContainer, GeoJSON } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import countryData from "./components/countryData.json"
import CountryDetails from "./components/CountryDetails";



function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [mapData, setMapData] = useState(null);

  const getCountryGeoJson = (countryName) => {
    return countryData.features.find((feature) => {
      const name = feature.properties.ADMIN;
      return name.toLowerCase() === countryName.toLowerCase();
    });
  };

  const handleSearch = async () => {
    try {
      setSelectedCountry(null);
      const res = await axios.get(`https://restcountries.com/v3.1/name/${searchQuery}?fullText=true`)
      const fetchData = res.data[0];
      setMapData(fetchData)
      const geoJson = await getCountryGeoJson(searchQuery);
      setSelectedCountry(geoJson);
      setSearchQuery("")

    } catch (error) {
      console.log("handle search wrong country or mistakes in country name " + error);
    }

  };


  return (
    <div className="App">

      <span className="search">
        <input type="text" placeholder='Search...' className="input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /> <AiOutlineSearch className="searchIcon" onClick={handleSearch} />
      </span>


      <div className="map_detail">
        <div className="details">
          {mapData && (
            <CountryDetails mapData={mapData} />
          )}


        </div>

        <MapContainer center={[20, 77]} zoom={1}
          style={{ width: "70vw", height: "80vh", marginTop: "-28.8%", outline: "none", backgroundColor: "#f2f2f2" }}
        >
          <GeoJSON data={countryData.features} style={{ weight: 0.4, fillColor: "#f2f2f2", color: "black" }} />
          {selectedCountry && (
            <GeoJSON data={selectedCountry} style={{ fillColor: 'green', fillOpacity: 1, color: "green" }} />
          )}

        </MapContainer>

      </div>

    </div >
  );
}


export default App;
