import { useState } from "react";

const Clicker = () => {
    const [clickerValue, setClickerValue] = useState(0);

    function handleClick() {
        setClickerValue(prev => prev + 1);
    }

    return <>
            <h1>Clicker!</h1>
            <p role="figure">{clickerValue}</p>
            <button onClick={handleClick}>Click me!</button>
        </>
}

export default Clicker;