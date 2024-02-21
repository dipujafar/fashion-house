import { useLoaderData, useParams } from "react-router-dom";
import Container from "../Components/Shared/Container";
import { Helmet } from "react-helmet-async";
import DetailsCard from "../Components/Details/DetailsCard";


const Details = () => {
    const productData = useLoaderData();
    console.log(productData)
    return (
        <Container>
            <Helmet>
                <title>JUF | Clothe Details</title>
            </Helmet>
            <DetailsCard product={productData}></DetailsCard>
        </Container>
    );
};

export default Details;