import React from 'react'
import leftShowcase from '../Assets/images/img-2.svg'
import rightShowcase from '../Assets/images/img-1.svg'

const showcase = () => {
  return (        
  <nav className="showcase">
    <img src={leftShowcase}/>
    <div className="showcase-items">
        <h2>
          sale up to 50% off <span>Online shopping free home deilvery over $100</span>
        </h2>
        <a className="btn-theme">Shop now</a>
    </div>
    <img id="hide-img" src={rightShowcase} alt="placeholder image"/>
  </nav>
)
}

export default showcase