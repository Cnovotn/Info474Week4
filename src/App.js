import React from "react";
import { useFetch } from "../hooks/useFetch";

const App = () => {
    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/colinmegill/react-parcel-starter/main/weather.csv"
    );
    console.log("From Hook", loading, data);

    return (
        <div>
            <h1>Clayton Novotney</h1>
            <h2>Info 474</h2>
            <h2>April 20th, 2021</h2>
            <h3>Exploratory Data Analysis, Assignment 2</h3>
            <p>{loading && "Loading Data!"}</p>
            <svg width="500" height="500" style={{border: "1px solid black"}}>
                {data.map((measurement) => {
                    <circle cx={10} cy={measurement.TMAX} r="3" />
                })}
            </svg>
        </div>
    );
};

export default App;