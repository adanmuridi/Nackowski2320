import React, {useState} from 'react';
import AuctionSearch from '../components/AuctionSearch';

const AuctionContainer = () => {

    const[result, setResult] = useState([]);

    
    const search = (searchValue) => {

        const url = '';

        fetch(url).then(response => response.json())
        .then(result => {
            
            
            const{} = result;
            setResult(results);
        })
    }

    
    return(
        <>

        </>
    )
}

export default AuctionContainer;