import React,{useRef, useState} from 'react';

const NewAuction = ({create}) => {
    const title = useRef();
    const description = useRef();
    const endDate = useRef();
    const startingPrice = useRef();
    const createdBy = useRef();

    const[defaultTitle, setTitle] = useState("");
    const[defaultdescription, setDescription] = useState("");
    const[defaultEndDate, setDate] = useState(new Date());
    const[defaultStartingPrice, setStartingPrice] = useState("");
    const[defaultCreatedBy, setCreatedBy] = useState();

    function handleSubmit(e){
        setTitle("");
        setDescription("");
        setDate(new Date());
        setStartingPrice("");
        setCreatedBy("");
        create(
            title.current.value,
            description.current.value,
            endDate.current.value,
            startingPrice.current.value,
            createdBy.current.value)
    }

    return (<div>
        Title<br/>
        <input type="text" ref={title}  value={defaultTitle} onChange={(e) => setTitle(e.target.value)} />
        <label>Error!</label><br />
        Beskrivning<br />
        <input type="text" ref={description} value={defaultdescription} onChange={(e) => setDescription(e.target.value)} />
        <label>Error!</label><br />
        Slutdatum<br />
        <input type="date" ref={endDate} value={defaultEndDate} onChange={(e) => setDate(e.target.value)} />
        <label>Error!</label><br />
        Utropspris<br />
        <input type="text" ref={startingPrice} value={defaultStartingPrice} onChange={(e) => setStartingPrice(e.target.value)} />
        <label>Error!</label><br />
        Skapad av<br />
        <input type="text" ref={createdBy} value={defaultCreatedBy} onChange={(e) => setCreatedBy(e.target.value)}/>
        <label>Error!</label><br />
        <button onClick={() => handleSubmit()} >Skapa</button>
    </div>);
}

export default NewAuction;