import React from  'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Card({href, img_url, img_alt, title, description }){
    return(
        <>
        <Link to={href} className="card">
            <nav>
                <img src={img_url} alt={img_alt} />
            </nav>
            <div className="description">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Link>
    </>
    )
};