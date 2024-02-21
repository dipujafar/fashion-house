/* eslint-disable react/prop-types */
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const DetailsCard = ({product}) => {
    return (
        <div className="group card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
        <figure className="md:w-1/2 relative"><img src={product?.image} alt="Product_image" className=" w-full md:max-h-[calc(100vh-80px)]  object-cover group-hover:scale-110 duration-1000"/>
        <p className="absolute text-xl  bg-blue-400 w-24 h-8 rounded text-center top-0 left-0">$ {product?.price}</p>
        </figure>
        <div className="card-body md:w-1/2">
          <h2 className="card-title">{product?.name}</h2>
          <p className="text-lg font-medium">A product of {product?.brandName}</p>
          <div className="justify-start text-xl text-sky-900">
          <p>{product?.type} type <span>{product?.details?.material}</span></p>
          <p>Available Size : {product?.details?.size}</p>
          <p>{product?.details?.color} color</p>
          </div>
          <Rating style={{ maxWidth: 250 }}  value={parseInt(product?.rating)}></Rating>
          <div className="card-actions justify-end">
            <div className='flex gap-3 flex-wrap'>
                <button className='btn btn-outline btn-info'>Update</button>
            <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DetailsCard;