import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAuth from "../Hook/useAuth";
import axios from "axios";
import Card from "../Components/Product/Card";
import Marquee from "react-fast-marquee";
import Container from "../Components/Shared/Container";


const MyCart = () => {
    const {user}  = useAuth()
    const {data: products, } = useQuery({
        queryKey: ["cart", user.email],
        queryFn: async()=>{
            const res = await axios.get(`https://fashion-house-server.vercel.app/cart/${user?.email}`);
            return res.data
        }
    });
    return (
        <Container>
            <Helmet>
                <title>JUF | CART</title>
            </Helmet>
                { products?.length ? <Marquee> <p className="text-2xl font-medium mb-2">You added {products?.length} clothe on your card </p> </Marquee>: ""}
            {
                products?.length
                ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {products?.map(product=><Card key={product._id} product={product}></Card>)}</div>
                :
               <div className="flex justify-center items-center h-screen">
               <Marquee> <p className="text-2xl font-medium">You added No Clothe on your card </p> </Marquee>
               </div>
            }
        </Container>
    );
};

export default MyCart;