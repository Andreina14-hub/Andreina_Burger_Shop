import Founder from "../home/Founder";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri"



const About = () => {
    return (
        <section className="about">
            <main>
                <div>
                    <h1>¿Quiénes Somos?</h1>
                    <article>
                        <h4>Hamburguesería</h4>
                        <p>Esto es la Hamburguesería.
                            El lugar con las hamburguesas más sabrosas del planeta.</p>
                        <p>Explora nuestra oferta de comida y hambuguesas.</p>
                        <p>Haz click a continuacion para ver el Menú</p>
                        <Link to="/menu">
                            {<RiFindReplaceLine />}
                        </Link>

                    </article>
                </div>

                <div>
                    <Founder />

                </div>
            </main>
        </section >
    );
};
export default About;
