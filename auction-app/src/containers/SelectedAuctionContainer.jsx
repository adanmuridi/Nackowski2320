import PlaceBid from '../components/PlaceBid/PlaceBid'
import BidList from '../components/BidList/BidList'
import { useState } from 'react'


const SelectedAuctionContainer = ({id}) => {

    id = 5328;

    const [bids, setBids] = useState([]);

    const GetBids = () => {
        let url = "http://nackowskis.azurewebsites.net/api/bud/2320/" + id;

        fetch(url)
        .then(response => response.json())
        .then(json => {
            setBids(json)
        })

    }

    GetBids();

    const CreateNewBid = (sum, bidder) => {
        let newItem = {
            Summa: sum,
            Budgivare: bidder,
            AuktionID: id
        }
        const url = "https://nackowskis.azurewebsites.net/api/bud/2320/" + id;
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            }
            }).then(function (data) {
            console.log("Bid placed");
           }) 
           
    }
    return (<>
        <PlaceBid create={CreateNewBid}></PlaceBid>
        <BidList items={bids}></BidList>
    </>)
}

export default SelectedAuctionContainer