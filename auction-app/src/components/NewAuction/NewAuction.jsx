import React,{useRef, useState} from 'react';

const NewAuction = ({create}) => {
    const title = useRef();
    const description = useRef();
    const endDate = useRef();
    const startingPrice = useRef();
    const createdBy = useRef();

    const[defaultTitle, setDefaultTitle] = useState("");

    return (<div>
        Title<br/>
        <input type="text" ref={title} value={defaultTitle}/><br />
        Beskrivning<br />
        <input type="text" ref={description} /><br />
        Slutdatum<br />
        <input type="date" ref={endDate} /><br />
        Utropspris<br />
        <input type="text" ref={startingPrice} /><br />
        Skapad av<br />
        <input type="text" ref={createdBy} /><br />
        <button onClick={() => create(
                                        title.current.value,
                                        description.current.value,
                                        endDate.current.value,
                                        startingPrice.current.value,
                                        createdBy.current.value)}>Skapa</button>

    </div>);
}

export default NewAuction;