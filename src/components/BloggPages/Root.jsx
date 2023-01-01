import { Outlet } from "react-router-dom";
import Navbar from "../Special/Navbar";


export default function Root(){
    
    return(
        <>                
        <Navbar/>
        <Outlet/>        
        </>
    );
}