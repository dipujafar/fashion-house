import { Helmet } from "react-helmet-async";
import Banner from "../Components/Home/Banner";
import Display from "../Components/Home/Display";


const Home = () => {
    return (
        <div>
            <Helmet>
           <title>JUF | HOME</title>
            </Helmet>
            <Banner></Banner>
            <Display></Display>
        </div>
    );
};

export default Home;