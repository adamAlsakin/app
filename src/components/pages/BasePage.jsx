import { Outlet } from "react-router-dom";
import  Navs from "../navs/Navs";
import Footer from "./Footer";

const BasePage = () => {
    return (
        <>
       <Navs />
        <main className="container_m">
            <Outlet />

        </main>
<Footer />
        </>
    );
};
export default BasePage;