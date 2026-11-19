import { useState, useEffect } from 'react';
import ShowCard from '../ShowCard';
import ShowList from '../ShowList';
import { useShow } from '../../contexts';

export default function SearchWidget() {
    const [inputValue, setInputValue] = useState('');
    const [searchString, setSearchString] = useState('24');
    //const [showData, setShowData] = useState([]);
    const {showData,setShowData}=useShow();

    useEffect(() => {
        async function searchAPI() {
            const response = await fetch(
                `https://api.tvmaze.com/search/shows?q=${searchString}`
            );

            const rawData = await response.json();
            const data = rawData.map((s) => s.show);

            setShowData(data);
        }

        searchAPI();
    }, [searchString]);

    function handleInput(e) {
        const newInput = e.target.value;
        setInputValue(newInput);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSearchString(inputValue);
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    required
                    value={inputValue}
                    onChange={handleInput}
                />
                <input type="submit" value="Search" />
            </form>

            <ShowList/>
        </>
    );
}