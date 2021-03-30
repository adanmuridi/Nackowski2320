import React from 'react';

const AuctionItem = ({item}) => {
    return(
        <>
        <h3>{item.Titel}</h3>
        <p>{item.Beskrivning}</p>
        <p>{item.SlutDatum}</p>
        <p>{item.Utropspris}</p>
        <p>{item.SkapadAv}</p>
        </>
    );
}

export default AuctionItem;