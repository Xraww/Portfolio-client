import React, { useState, useRef } from "react";
import axios from "axios";

import "./Form.scss"

function Form() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [statusColor, setStatusColor] = useState("#000000");
    const formRef = useRef(null);

    const statusMessage = function (state) {
        if (state === "good") {
            setStatus("Message envoyé avec succès");
            setStatusColor("green");
        }
        else if (state === "error") {
            setStatus("Erreur lors de l'envoi du message");
            setStatusColor("red");
        }

        setTimeout(() => {
            setStatus("");
            setStatusColor("#000000");
        }, 2000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/send-email", { email, message }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            statusMessage("good");

            formRef.current.reset();
            setEmail("");
            setMessage("");
        } catch (error) {
            statusMessage("error");
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="email">
                <label htmlFor="email">Email</label>
                <input className="inputs" type="email" id="email" placeholder="Entrez votre e-mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="message">
                <label htmlFor="message">Message</label>
                <textarea className="inputs" name="message" id="message" placeholder="Entrez votre message ici..." required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>

            <div className="btn-submit">
                <button type="submit">Envoyer</button>
                {status && (<p style={{ color: statusColor }}>{status}</p>)}
            </div>
        </form>
    )
}

export default Form;