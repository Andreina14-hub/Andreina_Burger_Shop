import React from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";
import Popup from 'reactjs-popup';
const handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (!name || !email) return alert('Please fill out all fields');
    try {
        let res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });
        //res.ok will be true if server response was successful
        if (res.ok) {
            alert(`Message sent!`);
        } else {
            throw new Error('Something went wrong!');
        }
    } catch (error) {
        console.log(error);
    };
};

const Contact = () => {
    return (
        <section className="contact">
            <motion.form
                initial={{
                    x: "-100vw",
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{ delay: 0.2 }}
            >
                <h2>Contáctanos</h2>
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Mensaje..." cols="30" rows="10"></textarea>
                <Popup trigger={<button type="button">Enviar</button>}
                >
                    <div style={{ color: "$red", transform: 'translate(0%,-500%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
                        <h2>Gracias por tu mensaje!</h2>
                        <p>Tu mensaje ha sido enviado. Te responderemos lo antes posible.</p>
                    </div>
                </Popup>
            </motion.form>

            <motion.div
                className="formBorder"
                initial={{
                    x: "100vw",
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{ delay: 0.2 }}
            >
                <motion.div
                    initial={{
                        y: "-100vh",
                        x: "50%",
                        opacity: 0,
                    }}
                    animate={{
                        x: "50%",
                        y: "-50%",
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1,
                    }}
                >
                    <img src={burger} alt="Burger" />
                </motion.div>
            </motion.div>
        </section >
    );
};

export default Contact;
