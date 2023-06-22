import React from 'react'
import './Rate.css'
import '../Hero/Hero.css'
import Rateimg from '../../assets/testimonialHero.png'
import {motion} from 'framer-motion'
const Rate = () => {
  const transition = {'duration' : 8,type:'spring'}

  return (
    <div className='R-container'>
    <div className="R-side">
    <div className="text1">
    <span>TOP RATED</span>
    <span>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE 
    JOY MAN CHILDREN REJOICED</span>
        
    </div>
        
    </div>
    <div className="wrapperr">
    <motion.img 
    initial={{scale:'0'}}
    whileInView={{scale:'1'}}
    transition={transition}
    src={Rateimg} alt="" srcset="" />

    </div>
    <div className="l-side">
    <div className="text2">
    <span>100k</span>
        <span>HAPPY CUSTOMERS WITH US</span>
    </div>
        
    </div>

    </div>
  )
}

export default Rate