import React from 'react'
import {useGlobalContext} from './Globalcontext';
import Button from '../components/Button/Button';


const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <article className="hero-info">
                    <h1>
                    Any Variation<br /> 
                    That Fits Your <br />
                    Imagination
                    </h1>
                    <p>
                    Our extensive selection of gems feature ten different shapes as well as 
                    a range of carat sizes to suit every preference
                    </p>
                    <Button text="SHOW NOW"/>
                
                </article>

                {/* <article className="hero-images">
                <img src={phoneImg} className="phone-img" alt="phone"/>
                </article> */}
            </div>
        </section> 
    )
}

export default Hero
