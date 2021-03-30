import React,{useRef} from 'react';

const Search = ({search}) => {
    const searchValue = useRef();

    return(<>
        <input type="text" ref={searchValue} />
        <button onClick={() => search(searchValue.current.value)}>Sök</button>
    </>);
}

export default Search;