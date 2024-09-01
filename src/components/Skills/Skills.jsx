import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faSass, faJs, faReact, faCss3Alt, faNode } from "@fortawesome/free-brands-svg-icons"
import { faServer, faDatabase, faBars, faGear, faGlobe } from "@fortawesome/free-solid-svg-icons"
import "./Skills.scss"

function Skills() {
    const skills = [
        {name: "HTML", percentage: 70, icon: faHtml5},
        {name: "CSS", percentage: 60, icon: faCss3Alt},
        {name: "Sass", percentage: 50, icon: faSass},
        {name: "Responsive", percentage: 55, icon: faBars},
        {name: "Javascript", percentage: 60, icon: faJs},
        {name: "React", percentage: 45, icon: faReact},
        {name: "SEO", percentage: 55, icon: faGear},
        {name: "Node.js", percentage: 40, icon: faNode},
        {name: "API", percentage: 40, icon: faGlobe},
        {name: "MongoDB", percentage: 45, icon: faServer},
        {name: "MySQL", percentage: 50, icon: faDatabase},
    ];

    const technologies = ["Git", "Postman", "B2 Anglais", "Adaptabilité", "Agilité d'apprentissage", "Motivé"];

    return (
        <div id="skills">
            <div className="skills">
                <h2>Mes compétences</h2>

                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <span className="percent">{skill.percentage}%</span>

                            <div className="content">
                                <div className="top">
                                    <FontAwesomeIcon className="skill-icon" icon={skill.icon}/>
                                    <span>{skill.name}</span>
                                </div>

                                <div className="progress-bar">
                                    <div className="progress" style={{width: skill.percentage + "%"}}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="additional-skills">
                <h3>Technologies et compétences additionnelles</h3>

                <div className="technologies-list">
                    {technologies.map((tech, index) => (
                        <div key={index} className="technology-item">
                            <div className="ball"></div>
                            <span>{tech}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;