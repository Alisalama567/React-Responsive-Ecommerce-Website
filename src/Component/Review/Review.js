import React  from 'react'
import './Review.css'
import {TestimonialsData} from '../../data/testimonials'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'

const Review = () => {
    // const [reviews , setReviews] = useState(TestimonialsData)
  return (
    <div className='r-container'>
     <div className="review">
        <span>Reviews</span>
     </div>
     <Swiper
     className='myswiper'
     loopFillGroupWithBlank={true}
     slidesPerView={3}
     spaceBetween={30}
     slidesPerGroup={1}
     loop={false}
     breakpoints={{
      856:{
        slidesPerView: 3
      },
      640 :{
         slidesPerView: 2
      },
      0:{
        slidesPerView: 1
      }
     }}
      >
     
     {TestimonialsData.map((rev , i)=>{
        const {name , image , comment} = rev
        return(
            <SwiperSlide>
         <div className='reviews'>
       <div className="swiperr">
       <img src={image} alt="" srcset="" className='r-img'/>
        <span>{comment}</span>
        <hr />
       <span>{name}</span>
       </div>
       </div>
            </SwiperSlide>
        )
     })}
    </Swiper>
    </div>

  )
}

export default Review