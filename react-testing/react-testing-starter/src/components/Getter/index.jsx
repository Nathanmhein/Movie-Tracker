import React, { useState, useEffect } from "react";

const Getter = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {

        async function loadData() {
            const res = await fetch("https://official-joke-api.appspot.com/random_ten")
            const data = await res.json();
            setApiData(data);
        }

        loadData();
    }, [])

    function makeJokeElement(j) {
        return <details key={j.id}>
                <summary>{j["setup"]}</summary>
                <p><strong>{j["punchline"]}</strong></p>
               </details>
    } 

    return <>
        <h1>Getter!</h1>
        <ul>{ apiData.map(j => <li key={j.id}>{makeJokeElement(j)}</li>) }</ul>
    </>
}

export default Getter;