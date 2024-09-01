import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faDownload, faEnvelope, faLocationDot, faGlobe } from "@fortawesome/free-solid-svg-icons"

import Form from "../../components/Form/Form"
import "./Contact.scss"

function Contact() {
    const email = "contact.xraww@gmail.com";
    const [message, setMessage] = useState(email);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setMessage("Copié dans le presse-papiers !");
                setIsCopied(true);
                setTimeout(() => {
                    setMessage(email);
                    setIsCopied(false);
                }, 2000);
            })
            .catch((err) => {
                console.error("Erreur lors de la copie :", err);
            });
    };

    return (
        <div id="contact">
            <h2>Me contacter</h2>

            <div className="boxes-and-form">
                <div className="boxes">
                    <div className="box-item">
                        <span><FontAwesomeIcon icon={faLocationDot}/>Occitanie, France</span>
                    </div>

                    <div className="box-item">
                        <span><FontAwesomeIcon icon={faGlobe}/>À distance</span>
                    </div>

                    <div className="box-item" id={isCopied ? "copied" : ""}  onClick={handleCopy}>
                        <span><FontAwesomeIcon icon={faEnvelope}/>{message}</span>
                    </div>
                </div>

                <div className="text-line">
                    <div className="line"></div>
                    <p>Ou alors, vous pouvez utiliser le formulaire</p>
                    <div className="line"></div>
                </div>

                <Form/>
            </div>
            
            <footer>
                <div className="top">
                    <button><FontAwesomeIcon icon={faDownload}/>Télécharger mon cv</button>

                    <div className="icons-container">
                        <div className="line"></div>

                        <div className="icons">
                            <a href="https://github.com/Xraww" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href="https://twitter.com/home" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                            <a href="https://www.linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                        </div>

                        <div className="line"></div>
                    </div>
                </div>

                <div className="bottom">
                    <p>© 2024 Xraww. All rights reserved</p>
                    <p>Développé avec<span><FontAwesomeIcon icon={faReact}/></span>et hébergé sur<span><FontAwesomeIcon icon={faGithub}/></span></p>
                    <a href="https://github.com/Xraww/Portfolio" target="_blank">Voir le repository</a>
                </div>
            </footer>
        </div>
    )
}

export default Contact;