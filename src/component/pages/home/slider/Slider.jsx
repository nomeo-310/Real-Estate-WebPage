import React from 'react'
import { useState } from 'react';
// import { useEffect } from 'react';
// import { useRef } from 'react';
import './slider.scss';
import { slideImages } from './sliderImage';
import rightArrow from './images/arrow-right.svg';
import leftArrow from './images/arrow-left.svg';

const Slider = () => {
    // const autoPlayRef = useRef();
    // const [autoPlay, setAutoPlay] = useState(true);

    // useEffect(() => {
    //     autoPlayRef.current = nextSlide;
    // });

    // useEffect(() => {
    //     const play =()=> {
    //         autoPlayRef.current()
    //     }
    //     const interval = setInterval(play, 6000)
    //     return () => clearInterval(interval)
    // }, [])
    
    const getWidth = ()=> window.innerWidth;
    const [state, setState] = useState({translate:0, transition: 0.45, activeIndex: 0});
    const { translate, transition, activeIndex } = state;

    const SliderArrow =({direction, handleClick})=> {
        return(
            <div className={`slider-arrow ${direction}`} onClick={handleClick}>
                {direction === 'right' ? <img src={rightArrow} alt='right_arrow'/> : <img src={leftArrow} alt='left_arrow'/>}
            </div>
        )
    };

    const nextSlide =()=> {
        if (activeIndex === slideImages.length - 1) {
           return setState({...state, translate: 0, activeIndex: 0});
        }
        setState({...state,translate: (activeIndex + 1) * getWidth(), activeIndex: activeIndex + 1});
        
    };

    const previousSlide =()=> {
        if (activeIndex === 0) {
           return (setState({...state, translate: (slideImages.length - 1) * getWidth(), activeIndex: slideImages.length - 1}));
        }
        setState({...state, activeIndex: activeIndex - 1, translate: (activeIndex - 1) * getWidth()});
    };

    const Dot =({active})=> {
        return (
            <span className="dot" style={{width: `${active ? `18px`: `10px`}`, height: `${active ? `18px`: `10px`}`, border: `${active ? `4px solid #6262fb`: `none`}`}}></span>
        )
    };
    
    return(
        <div className="slider">
            <div className="slider-content" style={{transform: `translateX(-${translate}px)`, transition: `transform ease-out ${transition}s`, width: `${getWidth() * slideImages.length}px`}}>
                {slideImages.map((slideImage) => (
                    <div className="slide" style={{backgroundImage: `url(${slideImage.img})`}} key={slideImage.id}>
                        <div className="slide-details">
                            <h3>Location: {slideImage.location}</h3>
                            <h3>{slideImage.beds} Bedroom<span></span>{slideImage.house_type}<span></span>3 Bathrooms<span></span>{slideImage.area} sqm</h3>
                            <h3 style={{ fontSize:`20px`, marginTop: `20px`}}>Anual Rent: <span className="mdi mdi-currency-ngn"></span>{slideImage.rent.toLocaleString()}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {/* {!autoPlay && (
                <>
                <SliderArrow direction='left' handleClick={previousSlide}/>
                <SliderArrow direction='right' handleClick={nextSlide}/>
                </>
            )} */}
            <SliderArrow direction='left' handleClick={previousSlide}/>
            <SliderArrow direction='right' handleClick={nextSlide}/>      
            <div className="dots">
                {slideImages.map((slide) => (<Dot key={slide} active={activeIndex + 1 === slide.id}/>))}
            </div>
        </div>
    )
}

export default Slider;
