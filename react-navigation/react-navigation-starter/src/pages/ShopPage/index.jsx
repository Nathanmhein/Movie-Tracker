import {useState, useEffect} from 'react';

function Shop() {
  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch('https://fortnite-api.com/v2/cosmetics/br');
    const fortniteData = await response.json()
    setItems(fortniteData.data)
  }

  return (
    <div>
      <h1>Shop Page</h1>
      <div>
        {items.map((el) => (
          <p key={el.id}>{el.name}</p>
        ))}
      </div>
    </div>
  )
}

export default Shop
