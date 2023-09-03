import React from 'react'
import './intro.css'
import bg from '../../assets/background.png'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Intro = () => {
    const [text] = useTypewriter({
        words: ['Web Developer', 'Web Designer'],
        loop: {},
        typeSpeed: 120,
    })
  return (
    <section id="intro">
        <div className="introContent">
        <img src={bg} alt="" className="introImgBg" />
        <div className="introText">
            <h2 className="introTextTitle">I'm a <span style={{color: '#F8842B'}}>{text}</span><Cursor/></h2>
            <h2 className="introTextDesc">Aenean scelerisque felis
             ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.</h2>
            <button className='contactBtn'>Contact Us</button>
        </div>
        </div>
    </section>
  )
}

export default Intro