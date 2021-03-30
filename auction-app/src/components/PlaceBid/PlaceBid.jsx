import { useRef } from "react"

const PlaceBid = (props) => {

    const bid = useRef();
    const bidder = useRef();

    return (<>
        <input placeholder="Bud" ref={bid}></input>
        <br></br>
        <input placeholder="Budgivare" ref={bidder}></input>
        <br></br>
        <button onClick={() => {props.create(bid.current.value, bidder.current.value)}}>Placera bud</button>
        <br></br>
    </>)
}

export default PlaceBid;