import React ,{useState} from 'react'
import Plan from '../../assets/plane.png'
import './Product.css'
import { ProductsData } from '../../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react'
const Product = () => {
    const [menuproduct , setmenuproduct] = useState(ProductsData);
    const [parent]=useAutoAnimate()
    const filter=(type)=>{
        const newitems = ProductsData.filter((product)=> product.type === type);
         setmenuproduct(newitems)

    }
  return (
    <div className='p-container'>
    <img src={Plan} alt="" srcset="" />
    <h1>Our Feature Products</h1>
        <div className="products">
            <ul className='menu'>
                <li onClick={()=>setmenuproduct(ProductsData)}>All</li>
                <li onClick={()=>filter('skin care')}>Skin Care</li>
                <li onClick={()=>filter("conditioner")}>Conditioner</li>
                <li onClick={()=>filter("foundation")} >Foundation</li>
            </ul>

            <div className="list" ref={parent}>
            {menuproduct.map((producte , i)=>{
                const {name ,detail , price , img} = producte
                return(
                    <div className='product'>
                    <div className="left-s" key={i}>
                    <div className="name">
                    <span>{name}</span>
                    <span >{detail}</span>
                    </div>
                    <span className='price'>{price}$</span>

                    <button className="btnn" type="submit">shop now</button>
                </div>

                <img src={img} alt="product" className='img-p' />
                </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default Product