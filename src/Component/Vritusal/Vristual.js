import React from 'react'
import './Vritusal.css'
import Shade from'../../assets/shade.png'
import ReactCompareImage from 'react-compare-image'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
const Vristual = () => {
  return (
    <div className='vritsual'>
    <div className="v-left">
    <span>VIRTUAL TRY-ON</span>
    <span>NEVER BUY THE WRONG</span>
    <span>SHADE AGAIN!</span>
    <span>Try Now!</span>
    <img src={Shade} alt="" srcset="" />

    </div>
      <div className="v-right">
      <div className="v-wrapper">
   <ReactCompareImage leftImage={Before} rightImage={After} />
      </div>
        
      </div>
    </div>
  )
}

export default Vristual
