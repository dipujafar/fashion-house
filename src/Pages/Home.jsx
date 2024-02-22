import { Helmet } from "react-helmet-async";
import Banner from "../Components/Home/Banner";
import Display from "../Components/Home/Display";
import Brands from "../Components/Home/Brands";
import About from "../Components/Home/About";


const Home = () => {
    return (
        <div>
            <Helmet>
           <title>JUF | HOME</title>
            </Helmet>
            <Banner></Banner>
            <Display></Display>
            <Brands></Brands>
            <About></About>
        </div>
    );
};

export default Home;