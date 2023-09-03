import React from 'react'
import './about.css'
import aboutImg from '../../assets/aboutImg.png'

const About = () => {
  return (
    <section id="about">
        <div className="aboutContent">
            <div className="aboutText">
            <h1 className="aboutTextTitle">About Us</h1>
            <p className="aboutTextDesc">There are many variations of passages of Lorem Ipsum available,
             but the majority have suffered alteration in some form, by injected humour, or randomised words 
             which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
             you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
            </div>
            <img src={aboutImg} alt="" className="aboutImg" />
        </div>
    </section>
  )
}

export default About