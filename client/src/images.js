import React from 'react';
import './App.css';

const Images = props => (
    <div className='img-thumbnail imgWrapper'>
        <img onClick={() => props.sortImages(props.id)} id={props.id} src={props.src} className='img-fluid imgSize gridEle ' alt="random image!" data-clicked={props.clicked}/>
    </div>
);

export default Images;
