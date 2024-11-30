import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Notfound from "./Notfound";
import Layout from "./Layout/Layout";
import Homepage from "../Pages/HomePages";
import Cadastro from "./Cadastro";
import '../index.css';
import ProductListing from "./ProductListing";
import ProductListingPage from "../Pages/ProductListingPage";
import ProductViewPage from "../Pages/Productviewpage";
import ProductDetails from "./ProductDetails";


const Paths = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="/produtos" element={<ProductListingPage/>}/>
                    <Route path="/product/:id" element={<ProductViewPage />} />
                    <Route path="/product-details/:id" element={<ProductDetails />} />
                    </Route>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                    <Route path="*" element={<Notfound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;