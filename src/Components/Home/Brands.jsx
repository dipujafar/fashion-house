import Container from "../Shared/Container";
import logo1 from '../../assets/image/logo1.png'
import logo2 from '../../assets/image/logo2.png'
import logo3 from '../../assets/image/logo3.png'
import logo4 from '../../assets/image/ilogo4.png'
import logo5 from '../../assets/image/logo5.png'
import logo6 from '../../assets/image/logo6.png'


const Brands = () => {
    return (
        <Container>
            <p className="uppercase mt-10 text-blue-800 text-3xl font-medium text-center mb-5">Shop Our brand</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <img src={logo1} alt="brand logo" />
                <img src={logo2} alt="brand logo" />
                <img src={logo3} alt="brand logo" />
                <img src={logo4} alt="brand logo" />
                <img src={logo5} alt="brand logo" />
                <img src={logo6} alt="brand logo" />
            </div>
        </Container>
    );
};

export default Brands;