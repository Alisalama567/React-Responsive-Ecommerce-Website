import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png'
import{
    InboxIcon,
    PhoneIcon ,
    LocationMarkerIcon,
    LoginIcon ,
    UsersIcon ,
    LinkIcon ,
} from '@heroicons/react/outline'
const Footer = () => {
  return (
   <div>
         <hr className='hr' />

    <div className='f-container'>
    <div className="logo">
        <img src={Logo} alt="" srcset="" />
        <span>Amazon</span>
      </div>
      <div className="footer">
        <div className="contact">
        <span>Contact Us</span>
        <div className="details">
            <div className="l-details">
            <LocationMarkerIcon className='l-logo' />
            <span>Cairo - Alqnqter Al-Khayraya</span>
            </div>
            <div className="l-details">
            <PhoneIcon className='l-logo' />
            <span>20-01140570424</span>
            </div>

            <div className="l-details">
            <InboxIcon className='l-logo' />
            <span>alisal2ma456@gmail.com</span>
            </div>
        </div>
        </div>
        <div className="contact">
        <span>Account</span>
        <div className="details">
         <div className="l-details">
            <LoginIcon className='l-logo' />
            <span>Sign in</span>
            </div>
         </div>
         </div>
         <div className="contact">
        <span>Company</span>
        <div className="details">
         <div className="l-details">
            <UsersIcon className='l-logo' />
            <span>About us</span>
            </div>
         </div>
         </div>

         <div className="contact">
        <span>Resources</span>
        <div className="details">
         <div className="l-details">
            <LinkIcon className='l-logo' />
            <span>Safety Privacy & Terms</span>
            </div>
         </div>
         </div>
         {/* footer */}
      </div>
    </div>
    </div>

  )
}

export default Footer