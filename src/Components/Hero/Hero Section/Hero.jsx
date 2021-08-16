import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <div>
            <div className="hero-container">
                <div className="left-side">
                    Doctian
                    <button className="start-button">Get Started</button>
                </div>
                <div className="right-side">
                    We at Doction will provide you <b>Endless Medical Support 24x7</b>.
                </div>
            </div>
        </div>
    )
}

export default Hero
