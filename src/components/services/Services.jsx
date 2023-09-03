import React from 'react'
import './services.css'
import webdev from '../../assets/webdevsvg.svg'
import webdesign from '../../assets/webdesignsvg.svg'
import socmed from '../../assets/socmedsvg.svg'
import va from '../../assets/vasvg.svg'

const Services = () => {
  return (
    <section id="services">
        <div className="servicesContent">
            <div className="servicesText">
                <h1 className="servicesTextTitle">Our Services</h1>
                <div className="servicesTextDesc">consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>

        <div className="servicesOffer">
            <div className="servicesOfferBorder">
            <img src={webdev} alt="" className="servicesIcon" />
                <h4 className="borderTitle">Web Development</h4>
                <p className="borderDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className="servicesOfferBorder">
            <img src={webdesign} alt="" className="servicesIcon" />
                <h4 className="borderTitle">Web Design</h4>
                <p className="borderDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className="servicesOfferBorder">
            <img src={socmed} alt="" className="servicesIcon" />
                <h4 className="borderTitle">Social Media Manager</h4>
                <p className="borderDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className="servicesOfferBorder">
            <img src={va} alt="" className="servicesIcon" />
                <h4 className="borderTitle">Virtual Assistant</h4>
                <p className="borderDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
        </div>
    </section>
  )
}

export default Services