import React, {useContext} from 'react';
import {useDarkMode} from '../../context/DarkMode';

const DarkMode = () => {
    const {darkMode, setDarkMode} = useDarkMode();

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div role="figure" className={darkMode ? `Container Container-dark` : `Container Container-light`}>
            <button onClick={toggleDarkMode}>Dark mode</button>
        </div>
    )
}

export default DarkMode;