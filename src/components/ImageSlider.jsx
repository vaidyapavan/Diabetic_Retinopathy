import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import slide1 from "../images/d1.jpg";
import slide2 from '../images/d2.jpg';
import slide3 from '../images/d3.jpg';
import slide4 from '../images/d4.jpg';
import slide5 from '../images/d5.jpg';
import './ImageSlider.css';

// FontAwesome icons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
    { url: slide5 },
    { url: slide3 },
    { url: slide4 },
    { url: slide1 },
    { url: slide2 }
];

function ImageSlider() {
    return (
        <div className="slider-container">
            <SimpleImageSlider 
                className="slider"
                width={500}  // Reduced width for better fit
                height={250}  // Reduced height
                images={images}
                showNavs={true}
                autoPlay={true}
                autoPlayDelay={5.0}
                onClick={(idx, event) => console.log(`Image ${idx + 1} clicked`)}
                customNavs={(onPrev, onNext) => (
                    <div className="custom-navs">
                        <button className="prev-arrow" onClick={onPrev}>
                            <FaArrowLeft size={30} />
                        </button>
                        <button className="next-arrow" onClick={onNext}>
                            <FaArrowRight size={30} />
                        </button>
                    </div>
                )}
            />
        </div>
    );
}

export default ImageSlider;
