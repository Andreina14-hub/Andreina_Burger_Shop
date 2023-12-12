import React from "react";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import DropdownMenu from "../layout/DropdownMenu";


const Header = ({ isAuthenticated = false }) => {
    return (
        <nav>
            <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
                <IoFastFoodOutline />
            </motion.div>

            <div>
                <Link to="/">Inicio</Link>
                <DropdownMenu />
                <Link to="/About">¿Quiénes Somos?</Link>
                <Link to="/contact">Contacto</Link>
                <Link to="/me">Inicio de secion</Link>

            </div>
        </nav>
    );
};

export default Header;