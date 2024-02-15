
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

//   This component is the main page of our website. It will contain a header, content and footer.
const IniLayout = ({ children, showFooter = true, showHeader = true }) => {
    //   If there's no header or footer specified in this layout, we don't render them
    return (<>
        {/*   We only want to display the header if it has been set to be shown */}
        {showHeader && <Header isAuthenticated={true} />}
        {children}
        {showFooter && <Footer />}
    </>)
}
export default IniLayout;