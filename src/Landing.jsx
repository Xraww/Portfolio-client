import React, { useState } from "react";

import Menu from "./components/Menu/Menu"
import RightSide from "./components/RightSide/RightSide"

function Landing() {
    const [scrollToSection, setScrollToSection] = useState(null);
    const [activeSection, setActiveSection] = useState(0);
    
    const handleScrollToSection = (index) => {
        if (scrollToSection) {
            scrollToSection(index);
            setActiveSection(index);
        }
    };

    return (
        <>
            <Menu scrollToSection={handleScrollToSection} activeSection={activeSection}/>
            <RightSide setScrollToSection={setScrollToSection} scrollToSection={handleScrollToSection} setActiveSection={setActiveSection}/>
        </>
    )
}

export default Landing;