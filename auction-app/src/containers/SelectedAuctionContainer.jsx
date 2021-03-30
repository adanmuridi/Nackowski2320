import PlaceBid from '../components/PlaceBid/PlaceBid'
import BidList from '../components/BidList/BidList'
import { useState } from 'react'


const SelectedAuctionContainer = () => {

    const [bids, setBids] = useState([]);

    const GetBids = () => {
        const url = "http://nackowskis.azurewebsites.net/api/bud/2320"
        fetch("http://nackowskis.azurewebsites.net/api/bud/2320/1")
        .then(response => response.json())
        .then(json => {
            setBids(json)
        })

    }

    GetBids();

    const CreateNewBid = () => {

    }
    return (<>
        <PlaceBid create={CreateNewBid}></PlaceBid>
        <BidList items={bids}></BidList>
    </>)
}

export default SelectedAuctionContainer