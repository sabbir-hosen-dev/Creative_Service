import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-top wrap">
      <div className="footer-colum">
        <h2>Let us handle your project, <br />professionally.</h2>
        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
      </div>
      <div className="footer-colum">
        <form action="">
          <input type="email" name="email" id="email" placeholder='Your email address' />
          <input type="text" name="name" id="name" placeholder='Your name /company name' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
          <div className="">
          <button type="submit" className="btn">Send</button>
          </div>
        </form>
      </div>
      </div>
      <div className="footer-bottom">
        <p>copyright Orange labs {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
