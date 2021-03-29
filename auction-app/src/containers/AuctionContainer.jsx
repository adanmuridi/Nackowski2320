import React, {useState} from 'react';
import AuctionSearch from '../components/SWAPISearch';

const AuctionContainer = () => {

    const[result, setResult] = useState([]);

    
    const search = (searchValue) => {

        const url = '';

        fetch(url).then(response => response.json())
        .then(result => {
            
            
            const{} = result;
            alert('Antal träffar: ' + count);
            setResult(results);
        })

    }

    
    return(
        <>

        </>
    )
}

export default AuctionContainer;