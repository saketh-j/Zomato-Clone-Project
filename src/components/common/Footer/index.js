import React from 'react'
import './Footer.css'
import {AiFillLinkedin,AiFillInstagram,AiFillTwitterCircle,AiFillYoutube,AiFillFacebook} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='max-width'>
         <div className='first'>
         <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" className='first-logo' alt="logo" />
         
         <div className='first-1'>
           <div>
              <span>India</span>
           </div>
           <div>
             <span>English </span>
           </div>
         </div>
         </div>
         <div className='second'>
           <div>
           <h4>ABOUT ZOMATO</h4>
             <a href="/"> Who we are</a>
             <a href="/"> Blogs</a>
             <a href="/"> careers </a>
             <a href="/"> Report Frauds</a>
             <a href="/"> Contact</a>
             <a href="/"> Investor Relations </a>
           </div>
           <div>
            <h4>ZOMAVERSE</h4>
            <a href="/"> Zomato</a>
             <a href="/">Blink It</a>
             <a href="/">Feeding India </a>
             <a href="/">Hyperpure </a>
             <a href="/">Zomaland </a>
           </div>
           <div>
            <h4>FOR RESTAURANTS</h4>
            <a href="/">Partner with us</a>
            <a href="/">App for you</a>
            <h4>FOR ENTERPRISES</h4>
            <a href="/">Zomato for enterprise</a>
           </div>
           <div>
            <h4>LEARN MORE</h4>
            <a href="/"> Privacy</a>
             <a href="/">Security</a>
             <a href="/">Terms </a>
             <a href="/">Sitemap </a>
           </div>
           <div className="box-4">
            <h4>SOCIAL LINKS</h4>
            <div>
              <i><AiFillLinkedin/></i>
              <i><AiFillInstagram/></i>
              <i><AiFillTwitterCircle/></i>
              <i><AiFillYoutube/></i>
              <i><AiFillFacebook/></i>
            </div>
            <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="img" />
            <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="img" />
           </div>
         </div>
           <hr />
           <p className='third'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
