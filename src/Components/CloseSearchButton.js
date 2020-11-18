import React from 'react';
import {Link} from 'react-router-dom';


const CloseSearchButton = ({onReset})=>{

    return (
        <Link to="/">
        <button onClick={onReset} className="close-search">Close</button>
      </Link>
    );
}
export default CloseSearchButton;