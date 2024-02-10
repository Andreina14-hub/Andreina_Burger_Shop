import React from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";
import Founder from "./Founder";
import IniLayout from "../layout/IniLayout"



const Home = () => {
    const options = {
        initial: {
            x: "-100%",
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        },
    };
    return (
        <IniLayout>
            <section className="home">
                <div>
                    <motion.h1 {...options}>Hamburguesería</motion.h1>
                    <motion.p
                        {...options}
                        transition={{
                            delay: 0.2,
                        }}
                    >
                        Regálate una sabrosa hamburguesa.
                    </motion.p>
                </div>
                <motion.a
                    href="/menu"
                    initial={{
                        y: "-100%",
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.4,
                    }}
                >
                    Explorar el menú
                </motion.a>
            </section>
            <Menu />
            <Founder />
        </IniLayout>
    );
};
export default Home



