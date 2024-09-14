import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider.tsx";

const useAuth = () => {
    const authContext = useContext(AuthContext);
    const { auth } = authContext!
    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    return useContext(AuthContext);
}

export default useAuth;