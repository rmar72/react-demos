import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard.js';

const ImageList = (props) => {

    const images = props.imgs.map((image) => {
        return <ImageCard key={image.id} image={image} />
    })

    return <div className="image-list">{ images }</div>
}

export default ImageList;