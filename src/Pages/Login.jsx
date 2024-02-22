import { toast } from "react-toastify";
import useAuth from "../Hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const {googleLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = ()=>{
        googleLogin()
        .then(()=>{
            toast.success("Successfully Login");
            navigate(location?.state ? location?.state : '/' )
        })
        .catch((error)=>{
            toast.error(error.message)
        })
    }
    return (
        <div className="flex flex-col justify-center items-center bg-gray-200 h-screen">
            <div className=" flex flex-col justify-center bg-gray-300  py-10 px-8 rounded border border-stone-400 gap-2">
                <p className=" text-center text-3xl font-medium uppercase">Login</p>
                <button onClick={handleLogin} className="btn btn-active btn-accent uppercase">Login With Google</button>   
            </div>
        </div>
    );
};

export default Login;