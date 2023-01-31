import { Navigate, Outlet } from "react-router-dom";
import { witsisLoged } from "../witsUserSession";

export default function ProtectedRoute() {
    if(!witsisLoged()) return<Navigate to="signin"/>
    return <Outlet/>
  }