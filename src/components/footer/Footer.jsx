import React from 'react'
import './footer.css'
import { AiFillHome, AiFillMail, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai';
import { BsFillTelephoneFill, BsFacebook } from 'react-icons/bs';


const Footer = () => {
  return (
    <div className="footer">
       <div className="footerContent">
       <div className="address">
        <h4 className="addressTitle">Address</h4>
            <div className="home">
            <div className="footerIcon"><AiFillHome/></div>
            <p>Cauayan City, Isabela</p>
            </div>
            <div className="home">
            <div className="footerIcon"><BsFillTelephoneFill/></div>
            0927717584
            </div>
            <div className="home">
            <div className="footerIcon"><AiFillMail/></div>
            johnreymaiquez11@gmail.com
            </div>
        </div>
        <div className="socmed">
            <p className="addressTitle">Social Media</p>
            <div className="social">
                <div className="footerIcon"><BsFacebook/> </div>
                John Rey Maiquez
            </div>
            <div className="social">
                <div className="footerIcon"><AiFillInstagram/> </div>
                johnnreey
            </div>
            <div className="home">
                <div className="footerIcon"><AiFillTwitterCircle/></div>
                johnnreey
            </div>
        </div>
       </div>
        <p className='footerDesc'>© 2023 John Rey Maiquez. All rights reserved.</p>
    </div>
  )
}

export default Footer