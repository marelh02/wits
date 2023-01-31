import { Outlet } from "react-router-dom";
import Navbar from "../ElementalComponents/Navbar";
import Interactions from "../ElementalComponents/Interactions";
import RTE from "../RichText/RTE"
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";


export default function Root(){
    
    return(
        <>                
        <Navbar/>
        <Outlet/> 
        </>
    );
}