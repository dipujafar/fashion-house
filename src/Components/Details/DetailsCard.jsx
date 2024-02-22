/* eslint-disable react/prop-types */
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Swal from 'sweetalert2';
import useAuth from '../../Hook/useAuth';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DetailsCard = ({product}) => {
    const {_id, image, name, price, brandName, type, rating, details } = product || {};
    const {user} = useAuth(); 

    const handleAddCart = ()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to add to cart",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add it!"
          }).then( async(result) => {
            if (result.isConfirmed) {
                const productData = {
                    image,
                    name,
                    brandName,
                    price, 
                    type, 
                    rating, 
                    details,
                    email: user?.email
                }
                const res = await axios.post('http://localhost:5000/cart', productData);
                if(res?.data?.insertedId){
                    Swal.fire({
                            title: "Added Your Cart!",
                            text: "This product Added Your Cart.",
                            icon: "success"
                          });
                } 
            }
          });
    }
    return (
        <div className="group card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
        <figure className="md:w-1/2 relative"><img src={image} alt="Product_image" className=" w-full md:max-h-[calc(100vh-80px)]  object-cover group-hover:scale-110 duration-1000"/>
        <p className="absolute text-xl  bg-blue-400 w-24 h-8 rounded text-center top-0 left-0">$ {price}</p>
        </figure>
        <div className="card-body md:w-1/2">
          <h2 className="card-title">{name}</h2>
          <p className="text-lg font-medium">A product of {brandName}</p>
          <div className="justify-start text-xl text-sky-900">
          <p>{type} type <span>{details?.material}</span></p>
          <p>Available Size : {details?.size}</p>
          <p>{details?.color} color</p>
          </div>
          <Rating style={{ maxWidth: 250 }}  value={parseInt(rating)}></Rating>
          <div className="card-actions justify-end">
            <div className='flex gap-3 flex-wrap'>
              <Link to={`/update/${_id}`}>
                <button className='btn btn-outline btn-info'>Update</button>
                </Link> 
            <button onClick={handleAddCart} className="btn btn-primary ">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DetailsCard;