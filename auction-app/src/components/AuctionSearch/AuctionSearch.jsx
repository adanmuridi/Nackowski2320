import React from 'react';

//useRef för att peka på textbox med sökvärde

const AuctionSearch = ({searchValue, list}) => {

    const searchValue = useRef();

    const filteredAuctions = list.filter(item => item.toLowerCase()
    .includes(searchValue.toLowerCase()));

    //search = callback funktion, innehåller pekare till searchfunktion i container
    //triggar search-event
    return(
        <>
        <input type='text' ref={searchValue}/>
        <br/><br/>
        <button onClick={() => search(searchValue.current.value)}>Sök auktion</button>
        </>
    )
}

export default AuctionSearch;