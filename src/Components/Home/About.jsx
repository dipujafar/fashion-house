import Container from "../Shared/Container";
import logo from "../../assets/logo/Fashion-House-logo.png"


const About = () => {
    return (
        <Container>
            <p className="uppercase mt-10 text-blue-800 text-3xl font-medium text-center">About Us</p>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <img src={logo} alt="logo_image" />
                <div>
                    <p className=" flex-1 flex justify-center items-center">
                    <img src={logo} alt="logo_image" className="w-16" />
                    <span className="uppercase text-2xl font-medium text-blue-600">JU Fashion</span>
                    </p>
                    <p className="flex-1 text-xl max-w-96 ">
                    Welcome to JU Fashion, your go-to destination for trendy clothing and footwear. Explore a diverse range of high-quality products, including stylish T-shirts, shirts, and shoes. With two outlets in Feni and Dhaka, JU Fashion is your ultimate destination for fashion-forward choices. Elevate your style with our brand's signature products.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default About;