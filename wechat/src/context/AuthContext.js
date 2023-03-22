import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const loginUser = () => {
        signInWithPopup(auth, new GoogleAuthProvider())
            .then((result) => {
                const user = result.user;
                setUser(user);
                // console.log(user);
                navigate("/chat")
            });
    }

    const value = { user, loginUser };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}