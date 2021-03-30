import BidItem from '../BidItem/BidItem'

const BidList = ({items}) => {

    const list = items.map(item =>
        <BidItem summa={item.Summa} budgivare={item.Budgivare}></BidItem>
        )

    return (<>
    {list}
    </>)
}

export default BidList;