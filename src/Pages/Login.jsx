import { toast } from "react-toastify";
import useAuth from "../Hook/useAuth";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const {googleLogin} = useAuth();
    const navigate = useNavigate();

    const handleLogin = ()=>{
        googleLogin()
        .then(()=>{
            toast.success("Successfully Login");
            navigate('/')
        })
        .catch((error)=>{
            toast.error(error.message)
        })
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className=" flex flex-col justify-center bg-gray-200  py-10 px-8 rounded border border-stone-400 gap-2">
                <p className=" text-center text-3xl font-medium uppercase">Login</p>
                <button onClick={handleLogin} className="btn btn-active btn-accent uppercase">Login With Google</button>   
            </div>
        </div>
    );
};

export default Login;