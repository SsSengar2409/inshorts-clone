import React from "react";
import "./NavInshorts.css"
import HamburgerDrawer from "./HamburgerDrawer";

const NavInshorts = ({ setCategory }) => {
    return (
        <div className="navbar">
            <div className="icon">
                <HamburgerDrawer setCategory={setCategory} />
            </div>
            <img className="inshorts" alt="inshorts" src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" />
        </div>
    )
}
export default NavInshorts;