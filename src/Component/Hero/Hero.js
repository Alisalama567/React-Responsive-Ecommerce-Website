import React from 'react'
import './Hero.css'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import HeroImg from '../../assets/hero.png'
import {motion} from 'framer-motion'
const Hero = () => {
  const transition = {'duration' : 3,type:'spring'}
  return (
    <div className='containerr'>
      {/* left-side */}
      <div className='h-side'>
        <span className='text1'>SKIN PROTECTION CREAM</span>
        <div className='text2'>
            <span>Trendy <span>Collection</span></span>
            <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>
        </div>
      </div>
       {/* middle side */}
     <div className="wrapper">
        <motion.div 
        initial={{bottom:'2rem'}}
        whileInView={{bottom:'0rem'}}
         transition ={transition}
         className="bluecricle">
        </motion.div>


        <motion.img 
        initial={{bottom:'-2rem'}}
        whileInView={{bottom:'0rem'}}
        transition={transition}
        src={HeroImg} alt="" width={600} />
          
            <motion.div
          //       initial={{left:'34rem'}}
          // whileInView={{left:'37rem'}}
          // transition={transition}
             className="cart2">
                <RiShoppingBagFill />
                </motion.div>
            <motion.div 
        //     initial={{left:'37rem'}}
        // whileInView={{left:'42rem'}}
        // transition={transition}
            className="sigub">
                <span>Best Signup Offers</span>
                <div>
                    <BsArrowRight />
                </div>
        </motion.div>
     </div>
       {/* right-side */}

       <div className="h-side">
        <div className="traffic">
            <span>1.5m</span>
            <span>Monthly traffic</span>
        </div>
        <div className='customers'>
            <span>100k</span>
            <span>Happy Customers</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
