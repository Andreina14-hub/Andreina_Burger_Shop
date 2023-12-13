import { IoLogoGithub, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Hamburguesería</h2>
                <p>Intentamos darte el mejor sabor posible.</p>
                <em>Prestamos atención a tus comentarios.</em>
                <strong>Todos los derechos reservados @Hamburguesería</strong>
            </div>
            <aside>
                <h4>Síguenos</h4>
                <a href="https://youtube.com/" target="blank_">
                    <IoLogoYoutube />
                </a>
                <a href="https://instagram.com/" target="blank_">
                    <IoLogoInstagram />
                </a>
                <a href="https://github.com/Andreina14-hub/Andreina_Burger_Shop" target="blank_">
                    <IoLogoGithub />
                </a>
            </aside>
        </footer>);
};
export default Footer 
