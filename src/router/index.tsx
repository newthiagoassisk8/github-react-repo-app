import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home/home";

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />} />

        </Routes>
    )
}
