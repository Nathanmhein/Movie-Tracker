import { useState, useEffect } from "react";

const DogBreeds = () => {
    const [dogBreeds, setDogBreeds] = useState([]);
    async function getBreeds() {
        try {
            const response = await fetch("https://dog.ceo/api/breed/Shiba/images");
            const result = await response.json();
            console.log("Dogs",result);
            const breeds = result.message.slice(0,50);

            setDogBreeds(breeds);
        }
        catch (err){
            console.log(err);
        }
    }
    
    useEffect(()=>{getBreeds()},[]);
    
    return (
        <>
            <h2>Dog Breeds</h2>
            <div className="dog-gallery">
                {dogBreeds.map((breed) => (
                    <img                    
                    src={breed}
                    alt="Dog"
                    />
                ))}
            </div>
        </>
    )
}



export default DogBreeds;