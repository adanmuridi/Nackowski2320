import React from 'react';

//useRef för att peka på textbox med sökvärde

const AuctionSearch = ({searchValue}) => {

    const searchValue = useRef();

    //search = callback funktion, innehåller pekare till searchfunktion i container
    //triggar search-event
    return(
        <>
        <input type='text' ref={searchValue}/>
        <button onClick={() => search(searchValue.current.value)}>Söötsch</button>
        </>
    )
}

export default AuctionSearch;