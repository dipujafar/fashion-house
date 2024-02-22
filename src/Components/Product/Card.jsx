/* eslint-disable react/prop-types */
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link, useLocation } from 'react-router-dom';

const Card = ({product}) => {
    const {pathname} = useLocation();
    return (
        <div className="group card card-compact bg-base-100 shadow-xl">
        <figure><img src={product?.image} alt="product_image" className="w-full max-h-72 group-hover:scale-125 duration-1000" /></figure>
        {
          pathname == '/'
          ?
          <div className='absolute bottom-0'>
            <Link to='/shop'>
            <button className='btn btn-info btn-sm'>Shop NOW</button>
            </Link>
          </div>
          :
        <div className="card-body">
          <h2 className="card-title">{product?.name}</h2>
          <p>$ {product?.price}</p>
          <div className="card-actions justify-end">
            <div className='flex gap-5'>
                <Rating style={{ maxWidth: 100 }}  value={parseInt(product?.rating)}></Rating>
                {
               pathname === "/myCart"? "" :  <Link to={`/details/${product?._id}`}>
               <button className="btn btn-sm btn-info btn-outline">Details</button>
               </Link>
                }
               
            </div>
          </div>
        </div>
}
      </div>
    );
};

export default Card;