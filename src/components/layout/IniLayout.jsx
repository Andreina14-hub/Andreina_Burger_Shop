
import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const IniLayout = ({ children, showFooter = true }) => {

    return (<>
        <Header isAuthenticated={true} />
        {children}
        {showFooter && <Footer />}
    </>)
}
export default IniLayout;