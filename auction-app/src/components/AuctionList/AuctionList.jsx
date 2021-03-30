import './AuctionList.css'
import AuctionItem from '../AuctionItem/AuctionItem';

const AuctionList = ({items}) => {

    let list = items.map(auctionItem => {
        return(
        <AuctionItem item={auctionItem} key={auctionItem.AuktionID}/>)
    })

    return (<>{list}</>)
}

export default AuctionList;