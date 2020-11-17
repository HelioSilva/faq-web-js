import React from 'react';
import './styles.css'

export default function Cards(props){
    return(
        <div className="cards">
            {props.children}
        </div>
    )
};