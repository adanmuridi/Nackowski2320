import BidItem from '../BidItem/BidItem'

const BidList = (props) => {

    const list = props.items.map(item =>
        <BidItem summa={item.Summa} budgivare={item.Budgivare}></BidItem>
        )

    return (<>
    {list}
    </>)
}