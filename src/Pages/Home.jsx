import { Helmet } from "react-helmet-async";
import Banner from "../Components/Home/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
           <title>JUF | HOME</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;