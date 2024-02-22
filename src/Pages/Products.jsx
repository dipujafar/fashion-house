import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet-async";
import Card from "../Components/Product/Card";
import Container from "../Components/Shared/Container";
import { useLocation } from "react-router-dom";


const Products = () => {
    const {pathname} = useLocation();
    const {data: products, isLoading} = useQuery({
        queryKey: ['products'],
        queryFn: async () =>{
                const res = await axios.get('https://fashion-house-server.vercel.app/products')
                return res.data;
        }
    });
    
    if(isLoading){
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg text-blue-600"></span>
        </div>
    }
    return (
        <Container>
            <Helmet>
                <title>JUF | Shop</title>
            </Helmet>
            <Marquee>
                { pathname == '/'?
                  <div className=" mt-5 text-3xl font-medium text-blue-800 mb-2 uppercase">
                  Shop Our Collection
              </div>
                 :
                <div className="text-3xl text-blue-800 mb-2 uppercase">
                Elevate Your Style with Unparalleled Fashion and Quality Fabrics.
            </div>
            }
            </Marquee>  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                { pathname === "/"
                ?
                products?.slice(0,6 )?.map((product)=><Card key={product?._id} product={product} ></Card>)
                :
                products?.map((product)=><Card key={product?._id} product={product} ></Card>)
                }
            </div>
        </Container>
    );
};

export default Products;