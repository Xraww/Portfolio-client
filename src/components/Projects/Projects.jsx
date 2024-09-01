import React, { useState, useRef, useEffect } from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { gsap } from "gsap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointer, faXmark, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

import "./Projects.scss"

function Projects() {
    const parallax = useRef(null);

    const scroll = (number) => {
        if (parallax.current) {
            parallax.current.scrollTo(number)
        }
    };

    const handleGSAPAnimation = (titleRef, closeIconRef, imageRef, textRef, clickIconRef, showText) => {
        if (imageRef.current && textRef.current) {
            if (showText) {
                gsap.to(imageRef.current, { opacity: 0, scale: 0.8, duration: 0.5 });
                gsap.to(textRef.current, { opacity: 1, y: 0, duration: 0.5, delay: 0.3 });
                textRef.current.style.pointerEvents = "auto";
                imageRef.current.style.pointerEvents = "none";

                titleRef.current.style.display = "none";
                closeIconRef.current.style.display = "block";
                clickIconRef.current.style.color = "transparent";
            } else {
                gsap.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.5 });
                gsap.to(textRef.current, { opacity: 0, y: 20, duration: 0.5 });
                textRef.current.style.pointerEvents = "none";
                imageRef.current.style.pointerEvents = "auto";

                titleRef.current.style.display = "block";
                closeIconRef.current.style.display = "none";
                clickIconRef.current.style.color = "black";
            }
        }
    };

    const projectsText = [
        {description: "Création de la page d'accueil d'une agence de voyage avec HTML & CSS", problems: "Conception responsive", overcome: "Utilisation de media queries et flexbox", newSkills: "HTML / CSS / Responsive / Git"},
        {description: "Création d'une page web dynamique avec JavaScript", problems: "Gestion des événements et interactions utilisateurs. Manipulation du DOM", overcome: "Utilisation de addEventListener. Fonction modulaire pour gérer les différentes interactions. Cela a permis de maintenir un code propre et facilement déboguable.", newSkills: "Javascript / Modale / Call API (fetch) / NPM / "},
        {description: "Création d'une application web de location immobilière avec React", problems: "Gestion de l'état global et navigation fluide", overcome: "Utilisation de React hooks comme useState et useEffect. Configuration de React Router pour gérer les routes et la navigation.", newSkills: "React / React Router / Animation CSS / Sass (scss) / CRA / Vite"},
        {description: "Développement du back-end d'un site de notation de livres", problems: "Conception de la base de données & Sécurisation de l'API", overcome: "Utilisation de JWT pour l'authentification des utilisateurs. J'ai également utilisé des pratiques comme le chiffrement des mots de passe avec bcrypt.", newSkills: "Node.js / Express / MongoDB / Mongoose / API RESTful"},
        {description: "Débogage et optimisation du site d'une photographe", problems: "Débogage complexe. Optimisation du référencement (SEO). Performance et vitesse de chargement", overcome: "Utilisation d'outils de débogage et de statistiques comme DevTools et Lighthouse. Utilisation de balises sémantiques, de balises meta et de microdata Schema.org.", newSkills: "Déboguage / Optimisation de référencement (SEO) / Lighthouse / Optimisation d'image / Minification de fichiers"},
    ]

    const createParallaxLayer = (offset, title, imageSrc, link, scrollLeft, scrollRight) => {
        const [showText, setShowText] = useState(false);
        const titleRef = useRef(null);
        const closeIconRef = useRef(null);
        const imageRef = useRef(null);
        const textRef = useRef(null);
        const clickIconRef = useRef(null);
    
        useEffect(() => {
            handleGSAPAnimation(titleRef, closeIconRef, imageRef, textRef, clickIconRef, showText);
        }, [showText]);

        return (
            <ParallaxLayer offset={offset} speed={0.5} className="layers">
                <div className="content">
                    <button className="back-button" ref={closeIconRef} onClick={() => setShowText(false)}><FontAwesomeIcon icon={faXmark}/></button>

                    <div className="project-page">
                        <div className="image-icon">
                            <img ref={imageRef} src={imageSrc} alt={`Project ${offset + 1}`} className="project-img" onClick={() => setShowText(true)}/>
                            <span ref={clickIconRef} id="click-icon"><FontAwesomeIcon icon={faHandPointer}/></span>
                        </div>

                        <h3 ref={titleRef}>Projet {offset + 1} - {title}</h3>

                        <div ref={textRef} className="project-text">
                            <div className="titles">
                                <h4>Détails du projet</h4>
                                <h5>Projet {offset + 1} - {title}</h5>
                            </div>

                            <div className="paragraphs">
                                <p><span>Description</span><span className="paragraphs-text">{projectsText[offset].description}</span></p>
                                <p><span>Problèmes rencontrées</span><span className="paragraphs-text">{projectsText[offset].problems}</span></p>
                                <p><span>Comment je les ai surmontées</span><span className="paragraphs-text">{projectsText[offset].overcome}</span></p>
                                <p><span>Compétences développées</span><span className="paragraphs-text">{projectsText[offset].newSkills}</span></p>
                            </div>

                            <a href={link} target="_blank">Lien vers le répository GitHub</a>
                        </div>
                    </div>

                    <FontAwesomeIcon id="arrowleft" icon={faChevronLeft} onClick={() => scroll(scrollLeft)}/>
                    <FontAwesomeIcon id="arrowRight" icon={faChevronRight} onClick={() => scroll(scrollRight)}/>
                </div>
            </ParallaxLayer>
        );
    };

    return (
        <div id="projects"> 
            <h2>Mes projets</h2>

            <div className="parallax">
                <Parallax pages={5} ref={parallax} horizontal>
                    {createParallaxLayer(0, "Booki", "/images/project-1.png", "https://github.com/Xraww/Booki", 4, 1)}
                    {createParallaxLayer(1, "Sophie Bluel | Portfolio", "/images/project-2.png", "https://github.com/Xraww/Architecte", 0, 2)}
                    {createParallaxLayer(2, "Kasa Location", "/images/project-3.png", "https://github.com/Xraww/Kasa", 1, 3)}

                    {createParallaxLayer(3, "Mon vieux grimoire", "/images/project-4.png", "https://github.com/Xraww/Grimoire", 2, 4)}
                    {createParallaxLayer(4, "Nina Carducci | Portfolio", "/images/project-5.png", "https://github.com/Xraww/Photographer", 3, 0)}
                </Parallax>
            </div>
        </div>
    );
};

export default Projects;