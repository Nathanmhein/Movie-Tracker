import React from 'react';
import ShowCard from '../ShowCard';

export default function ShowList({ showData }) {
    return (
        <>
            {showData.map(s => (
                <ShowCard key={s.id} show={s} />
            ))}
        </>
    );
}