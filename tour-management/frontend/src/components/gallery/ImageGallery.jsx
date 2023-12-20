import React from "react";
import Gallery from "./gallery";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const ImageGallery = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
            <Masonry gutter='1rem'>
                {
                    Gallery.map((item, index) => (
                        <img
                        className="masonry__img"
                            src={item} key={index} alt="" style={{
                            width: '100%',
                            display: 'block',
                            borderRadius: '10px',
                        }} />
                    ))
                }
            </Masonry>
        </ResponsiveMasonry>
    );
}

export default ImageGallery;
