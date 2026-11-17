import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ShopItem() {
    const {id} = useParams();
    const navigate = useNavigate();

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({images: {}});

  const fetchItem = async () => {
    const response = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/${id}`,
    );
    const item = await response.json();
    setItem(item.data);    
  };

  return (
    <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <img src={item.images.icon} />
        <br/>
        <button onClick={()=>navigate("/shop")}>Back To Shop</button>
    </div>
    );
}

export default ShopItem;