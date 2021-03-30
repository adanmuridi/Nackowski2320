import './AuctionList.css'
import AuctionItem from '../AuctionItem/AuctionItem';

const AuctionList = () => {

    let list = items.map(auctionItem => {
        return(
        <AuctionItem item ={auctionItem}/>)
    })

    return (<>{list}</>)
}

export default AuctionList;