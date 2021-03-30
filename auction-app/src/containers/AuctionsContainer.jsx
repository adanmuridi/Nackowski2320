import React,{useState, useEffect} from 'react';
import AuctionList from '../components/AuctionList/AuctionList';
import NewAuction from '../components/NewAuction/NewAuction';
import Search from '../components/Search/Search';

const AuctionContainer = () => {
    const url = "http://nackowskis.azurewebsites.net/api/auktion/2320"

    const[auctionList, setAuctionList] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(result => {
            setAuctionList(result);
        });
    }, []);

    const create = (title, description, endDate, startingPrice, createdBy) => {
        const url = "http://nackowskis.azurewebsites.net/api/auktion/2320";

        let NewAuction = {
            AuktionID: null,
            Titel: title,
            Beskrivning: description,
            StartDatum: new Date(),
            SlutDatum: endDate,
            Gruppkod: 2320,
            Utropspris: startingPrice,
            SkapadAv: createdBy           
        }

        fetch(url,{
            method: 'POST',
            body: JSON.stringify(NewAuction),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(function (data) {
            console.log('Auction skapad');
        });
    }

    const search = (searchValue) => {
        fetch(url)
        .then(response => response.json())
        .then(result => {
            var filteredList = result.filter(item => item.toLowerCase().includes(searchValue.toLowerCase()));
            setAuctionList(filteredList);
        });
    }

    return(<>
        <Search search={search} />
        <NewAuction create={create} />
        <AuctionList items={auctionList} />
    </>);
}

export default AuctionContainer;