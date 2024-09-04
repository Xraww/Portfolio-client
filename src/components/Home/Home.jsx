import "./Home.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import pp from "/images/moon.jpg"

function Home({ scrollToSection }) {
    return (
        <div id="home">
            <div className="introducing">
                <div className="about-me">
                    <div className="text">
                        <h1 className="glitch">Salut, c'est <span>Alexis</span></h1>
                        <h2>Je suis un apprenti <span>Développeur Web</span></h2>
                        <p>Sous le pseudonyme Xraww, je suis un passionné de jeux vidéo et de développement. Mon parcours dans le monde du code a débuté grâce à mon amour pour les jeux vidéo, qui m'a poussé à explorer les coulisses de leur création. J'ai commencé par m'immerger dans l'univers des mods, notamment en travaillant avec Lua sur GTA V (FiveM). Cette expérience m'a ouvert la voie vers le développement web, où j'ai pu élargir mes compétences.</p>
                    </div>

                    <div className="education">
                        <h3>Mes formations</h3>
                        
                        <div className="list">
                            <span>Baccalauréat STI2D - SIN</span>
                            <span>Développeur web - OpenClassrooms</span>
                            <span>Autodidacte</span>
                        </div>
                    </div>

                    <div className="buttons">
                        <button className="btn btn-text">Recrutez moi</button>
                        <button className="btn btn-text" onClick={() => scrollToSection(3)}>Contacter</button>
                        <a href="https://www.linkedin.com/" className="btn btn-icons" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="https://github.com/Xraww" className="btn btn-icons" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                </div>

                <img src={pp} alt="profile picture"/>
            </div>
        </div>
    )
}

export default Home;