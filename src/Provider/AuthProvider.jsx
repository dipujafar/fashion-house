import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            if(currentUser){
                setUser(currentUser);
                setLoading(false)
            }
            else{
                setUser(null);
                setLoading(true);
            }
        });
        return ()=>{
            return unsubscribe();
        }
    },[])

    const userData = {
        user,
        loading,
        googleLogin
    }
    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;