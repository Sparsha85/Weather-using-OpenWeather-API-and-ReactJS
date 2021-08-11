import React, { useState, useEffect } from 'react';
import "./style.css";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=02ef06cbdef3f64c1ee459731ccc0a78`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])
    return(
        <>
        <div className="bkg">
            <div className="box">
                <div className="inputData">
                    <input
                    type="search"
                    placeholder="Enter City"
                    className="inputField"
                    onChange={(event) => {
                        setSearch(event.target.value)
                    }} />
                </div>
        {city ? (
            <div>
            <div className="info">
                <h2 className="location">
                <i className="fas fa-street-view"></ i>
                {search}
                </h2>
                <div className="temp">
                    {city.temp - 273}
                </div>
                    <h3 className="tempmin_max"> Min : {city.temp_min -273} Cel | Max : {city.temp_max -273} Cel</h3>
        </div>
        </div>
        ) : (
            <h1>
                No data found
            </h1>
        )

        }

            <div className = "wave -one"></div>
            <div className = "wave -two"></div>
            <div className = "wave -three"></div>

            </div>
        </div>
        </>
    )
}

export default Tempapp;