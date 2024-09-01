import React, { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Home from "../../components/Home/Home"
import Projects from "../../components/Projects/Projects"
import Skills from "../../components/Skills/Skills"
import Contact from "../../components/Contact/Contact"

import "./RightSide.scss"

function RightSide({ setScrollToSection, scrollToSection, setActiveSection }) {
    const parallax = useRef(null);

    useEffect(() => {
        setScrollToSection(() => (index) => {
            parallax.current.scrollTo(index);
        });

        const handleScroll = () => {
            const currentScroll = parallax.current.current / parallax.current.space;
            setActiveSection(Math.round(currentScroll));
        };

        const parallaxInstance = parallax.current.container.current;
        parallaxInstance.addEventListener("scroll", handleScroll);

        return () => {
            parallaxInstance.removeEventListener("scroll", handleScroll);
        };
    }, [setScrollToSection, setActiveSection]);

    return (
        <div className="rightSide">
            <Parallax pages={4} ref={parallax}>
                <ParallaxLayer offset={0} speed={0.5} id="layer-1" className="parallax-layer">
                    <Home scrollToSection={scrollToSection}/>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.5} id="layer-2" className="parallax-layer">
                    <Projects/>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={0.5} id="layer-3" className="parallax-layer">
                    <Skills/>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.5} id="layer-4" className="parallax-layer">
                    <Contact/> 
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default RightSide;