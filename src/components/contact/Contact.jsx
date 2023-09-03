import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section id="contact">
       <div className="contactContent">
        <h1 className='contactTitle'>Contact Me</h1>
        <p className="contactDesc">Please fill up the form below to discuss any work opportunities.</p>
        <form action="" className='contactForm'>
            <input type="text" placeholder='Enter Your Name' name='user_name'/>
            <input type="email" placeholder='Enter Your Email' name='user_email'/>
            <textarea name="message" cols="30" rows="5" placeholder='Input Message'></textarea>
            <button type='submit' value="Submit">Submit</button>
        </form>
       </div>
    </section>
  )
}

export default Contact