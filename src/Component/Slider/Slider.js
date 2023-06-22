import React from 'react'
import './Slider.css'
import {Swiper , SwiperSlide} from 'swiper/react'
import { Pagination , Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {SlideProducts, SliderProducts} from '../../data/products'
const Slider = () => {
  return (
    <div className='s-container'>
    
      <Swiper

      modules={[Pagination , Navigation]}
      className='myswiper'
     navigation={true}
      loopFillGroupWithBlank={true}
      slidesPerView={3}
      spaceBetween={40}
      slidesPerGroup={1}
      loop={true}
      >
      {SliderProducts.map((slides , i)=>{
        const {name , detail , price , img}=slides;
        return(
          <SwiperSlide>
          <div className="left-s" key={i}>
            <div className="name">
              <span>{name}</span>
              <span>{detail}</span>
            </div>
            <span className='price'>{price}$</span>

            <button className="btnn" type="submit">shop now</button>
          </div>

          <img src={img} alt="product" className='img-p' />
       </SwiperSlide>
      )
      })}
      </Swiper>
    </div>
  )
}

export default Slider
