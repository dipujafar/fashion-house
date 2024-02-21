import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet-async";
import Card from "../Components/Product/Card";
import Container from "../Components/Shared/Container";



const Products = () => {
    const {data: products} = useQuery({
        queryKey: ['products'],
        queryFn: async () =>{
                const res = await axios('http://localhost:5000/products')
                return res.data;
        }
    });
    return (
        <Container>
            <Helmet>
                <title>JUF | Shop</title>
            </Helmet>
            <Marquee>
                <div className="text-3xl text-blue-800">
                Elevate Your Style with Unparalleled Fashion and Quality Fabrics.
            </div>
            </Marquee>  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products?.map((product,inx)=><Card key={inx} product={product} ></Card>)}
            </div>
        </Container>
    );
};

export default Products;