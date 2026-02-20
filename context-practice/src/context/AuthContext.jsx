import { createContext,useState,useContext } from "react";
import axiosInstance from "./axios.js";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const login = async (email,password) =>{
        try{
            const { data } = await axiosInstance.post("/auth/login", {email,password,});
            setUser(data.user);
            localStorage.setItem("token", data.token);
            return { success: true };
        }catch(err){
            console.log('Error in login',err.message)
        }
    }
    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };
    return (<AuthContext.Provider value={{user, login, logout}} >{children}</AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext);