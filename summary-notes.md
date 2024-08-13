### React summary notes

**Common Structure**

- All `.js` / `.jsx` files in a `./src` folder
  - An `.index.jsx`/`main.jsx` —> entrypoint file
  - An `App.jsx` —> top level/ parent component
  - A `./components` folder —> small, self-contained pieces (button, form, etc..)
    - Within `components`, create a folder for each component that will contain its own styling and tests, making them truly self-contained portable units
  - A `./layouts` folder —> chunks of a page (navbar, header, footer, etc..)
  - A `./pages` folder —> whole pages (About, Contact, etc..)
- An `index.html` file
- A `./public` folder —> assets such as images

---

### Props

- **Props being passed in the parent: `App`**
  - Keys and values
 
    
  ```jsx
  <Component name="A" type="B" /> -> {name: 'A', type: 'B'}
  ```
- **As the child, receiving the props**
  - 1st way

 
  ```jsx
  function Component(props) {
    return <h1>{props.name}</h1>;
  }
  ```
  - 2nd way


  ```jsx
  function Component({ name, type }) {
    return <h1>{name}</h1>;
  }
  ```

---

### useEffect

- Making a request to an API for data from a backend server
- Interacting with browser APIs (using `document` or `window` directly)
- Using timing functions such as `setTimeout` and `setInterval`
- Case scenarios of using `useEffect`

```jsx
// 1. What happens when an empty dependency array is provided?
// Side logic gets triggered once after the initial rendering
useEffect(() => {
   console.log("i have loaded")
}, [])

// 2. What happens when the dependency array contains a state value?
// Side logic gets triggered once after initial rendering & when specialVal changes aka during the updating phase
useEffect(() => {
   console.log("I fire when special val changes")
}, [val])

// 3. What happens if no dependency array is provided? 
// Side logic is gonna run after EVERY re-render
// Can lead to an infinite loop - it is not recommended to do that
useEffect(() => {
	 console.log("I fire on every update")
})
```

- Example of making a request to an API

```jsx
import { useState, useEffect } from "react";

const Beers = () => {
    const [beers, setBeers] = useState([]);

    async function getBeers() {
        const fetchAPI = "https://api.punkapi.com/v2/beers";

        try {
            const result = await fetch(fetchAPI);
            const data = await result.json();
            const beerNames = data.map(beer => beer.name)
            setBeers(beerNames)
            console.log("hello")
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        // function that makes a request to an API
        getBeers()
    }, [])

    return <>
            <h2>Beers</h2>
            { beers.map(b => <li>{b}</li>) }
           </>
}

export default Beers;
```
