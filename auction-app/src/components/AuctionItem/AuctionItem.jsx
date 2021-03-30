import React from 'react';

const AuctionItem = ({item}) => {
    return(
        <>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>{item.endDate}</p>
        <p>{item.startingPrice}</p>
        <p>{item.createdBy}</p>
        </>
    )

}

export default AuctionItem;