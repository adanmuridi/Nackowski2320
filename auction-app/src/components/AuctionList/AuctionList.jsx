import './AuctionList.css'

const AuctionList = () => {

    let list = items.map(auctionItem => {
        return(<AuctionItem item = {auctionItem}/>)
    })

    return (<>{list}</>)
}

export default AuctionList;