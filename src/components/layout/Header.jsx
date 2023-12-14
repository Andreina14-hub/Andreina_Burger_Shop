import React from "react";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import DropdownMenu from "../layout/DropdownMenu";


const Header = ({ isAuthenticated = false }) => {
    return (
        <nav>
            <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
                <Link to="/">
                    <IoFastFoodOutline
                        className="custom-style"
                    />
                </Link>
            </motion.div>
            <div>
                <DropdownMenu className="dropdown-menu" />
                <Link to="/About">¿Quiénes Somos?</Link>
                <Link to="/contact">Contacto</Link>
                <Link to="/me">{< FaUser />}</Link>
                <Link to="/cart">{<FiShoppingCart />}</Link>
                <Link to="/login">{<FiLogIn />}</Link>

            </div>
        </nav >
    );
};

export default Header;