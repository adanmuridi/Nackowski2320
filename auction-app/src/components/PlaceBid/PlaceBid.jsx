import { useRef } from "react"

const PlaceBid = (props) => {

    const bid = useRef();
    const bider = useRef();

    return (<>
        <input placeholder="Bud" ref={bid}></input>
        <br></br>
        <input placeholder="Budgivare" ref={bider}></input>
        <br></br>
        <button onClick={() => {props.CreateNewBid()}}>Placera bud</button>
        <br></br>
    </>)
}

export default PlaceBid;