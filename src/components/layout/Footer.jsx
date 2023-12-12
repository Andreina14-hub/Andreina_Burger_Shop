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
                <a href="https://youtube.com/xyz">
                    <IoLogoYoutube />
                </a>
                <a href="https://instagram.com/xyz">
                    <IoLogoInstagram />
                </a>
                <a href="#">
                    <IoLogoGithub />
                </a>
            </aside>
        </footer>);
};
export default Footer 
