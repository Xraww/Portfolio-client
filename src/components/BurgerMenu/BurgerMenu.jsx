import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

import "./BurgerMenu.scss"

function BurgerMenu({ scrollToSection, activeSection }) {
    const [isOpen, setIsOpen] = useState(false);
    const [icon, setIcon] = useState(faBars);
    const sections = ["home", "projects", "skills", "contact"];
    const displaySections = ["Accueil", "Projets", "Compétences", "Contacter"];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        
        if (isOpen) {
            setIcon(faBars)
        } else {
            setIcon(faXmark)
        }
    };

    return (
        <>
            <header>
                <button id="hamburger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={icon} />
                </button>

                <h2 className="title"><a href="https://github.com/Xraww/Portfolio" target="_blank" rel="nofollow noopener noreferrer">Portfolio</a></h2>
            </header>

            <div className={`BurgerMenu ${isOpen ? "active" : ""}`}>
                <nav>
                    <ul className="nav-links">
                        {sections.map((section, index) => (
                            <li key={section} onClick={() => scrollToSection(index)} className={activeSection === index ? "selected" : ""}>
                                {displaySections[index]}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default BurgerMenu;