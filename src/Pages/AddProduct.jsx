import axios from "axios";
import Container from "../Components/Shared/Container";
import Marquee from "react-fast-marquee";
import { toast } from "react-toastify";

const AddProduct =  () => {
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const material = form.material.value;
    const color = form.color.value;
    const product = {
     image,
      name,
      type,
      price,
      rating,
      brandName,
      details:{
        material,
        color,
        size: "M, L, XL"
      }
    };

    const res = await axios.post('https://fashion-house-server.vercel.app/products', product);

    if(res?.data?.insertedId){
        toast.success("Successfully Add This Products");
        form.reset();
    }

  };
  return (
    <div>
      <div className="bg-gray-200 p-2 md:p-5 rounded-lg  min-h-screen shadow-xl shadow-gray-900">
        <Container>
            <Marquee>
        <h1 className="text-3xl font-medium text-center mb-5">ADD A PRODUCT</h1>
        </Marquee>
        <form onSubmit={handleAddProduct} className="p-2 w-11/12 mx-auto">
          {/* input image and rating name */}
          <div className="mb-4 md:flex">
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">Image:</label>
              <input
                type="text"
                name="image"
                id=""
                required
                placeholder="Product Image URL"
                className=" w-11/12 py-1 px-2 border border-black rounded  bg-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">RATING:</label>
              <input
                type="number"
                name="rating"
                id=""
                required
                placeholder="Product Rating"
                className=" w-11/12  py-1 px-2 border border-black rounded  bg-transparent"
                
              />
            </div>
          </div>
          {/* input name and brand name */}
          <div className="mb-4 md:flex">
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">NAME:</label>
              <input
                type="text"
                name="name"
                id=""
                required
                placeholder="Product Name"
                className=" w-11/12 py-1 px-2 border border-black rounded  bg-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">
                BRAND NAME:
              </label>
              <input
                type="text"
                name="brandName"
                id=""
                required
                placeholder="Brand Name"
                className=" w-11/12  py-1 px-2 border border-black rounded bg-transparent"
              />
            </div>
          </div>
          {/* input type and price name */}
          <div className="mb-4 md:flex">
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">TYPE:</label>
              <input
                type="text"
                name="type"
                id=""
                required
                placeholder="Product type"
                className=" w-11/12 py-1 px-2 border border-black rounded  bg-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">PRICE:</label>
              <input
                type="text"
                name="price"
                id=""
                required
                placeholder="Product Price"
                className=" w-11/12  py-1 px-2 border border-black rounded  bg-transparent"
              />
            </div>
          </div>
             {/* input material and color name */}
          <div className="mb-4 md:flex">
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">Material:</label>
              <input
                type="text"
                name="material"
                id=""
                required
                placeholder="Product Material"
                className=" w-11/12 py-1 px-2 border border-black rounded  bg-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">Color:</label>
              <input
                type="text"
                name="color"
                id=""
                required
                placeholder="Product Color"
                className=" w-11/12  py-1 px-2 border border-black rounded  bg-transparent"
                
              />
            </div>
          </div>

          <input
            type="submit"
            value="Add Product"
            className="mt-5 btn btn-outline w-full"
          />
        </form>
        </Container>
      </div>
    </div>
  );
};

export default AddProduct;