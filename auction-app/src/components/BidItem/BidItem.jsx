import '../BidItem/BidItem.css'


const BidItem = (props) => {
    return (<>
        <label>Budgivare: {props.budgivare}</label>
        <div>
        <label>Bud: {props.summa}</label>
        </div>
        <br></br>
        </>
    )
}

export default BidItem;