import { useState } from "react";

const DogBreeds = () => {
    const [dogBreeds, setDogBreeds] = useState([]);

    return <>
            <h2>Dog Breeds</h2>
            { dogBreeds.map(d => <li>{d}</li>) }
           </>
}



export default DogBreeds;