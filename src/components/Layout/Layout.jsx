import { Outlet } from "react-router-dom";
import Header from '../Header';
import Footer from "../Footer";
import '../../index.css';

const Layout = () => {
    return (    
        <>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;