/* eslint-disable react/prop-types */
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Card = ({product}) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={product?.image} alt="product_image" className="w-full max-h-72 hover:scale-125 duration-1000" /></figure>
        <div className="card-body">
          <h2 className="card-title">{product?.name}</h2>
          <p>$ {product?.price}</p>
          <div className="card-actions justify-end">
            <div className='flex gap-5'>
                <Rating style={{ maxWidth: 100 }}  value={parseInt(product?.rating)}></Rating>
                <button className="btn btn-sm btn-info btn-outline">Details</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;