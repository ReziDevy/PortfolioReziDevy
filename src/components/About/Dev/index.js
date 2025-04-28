import "./index.scss"; 
import AnimatedLetters from "../../AnimatedLetters"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faCss3, faJava, faHtml5, faAmazon, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import DevList from "../DevList";

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return (
        <>
            <div className="container about-page"> 
                <div className="text-zone"> 
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={"About me".split("")} idx={15}/>
                    </h1>
                    <p>
                        Sou um desenvolvedor full-stack em formação, com uma paixão pela criação de soluções tecnológicas eficientes e inovadoras. Embora ainda esteja em processo de aprendizado, tenho muita determinação e foco em desenvolver minhas habilidades tanto no front-end quanto no back-end.
                        <br/>
                        Com experiência prática em linguagens como Java, Python, HTML/CSS/JS, e SQL, estou sempre em busca de novos desafios para expandir meus conhecimentos. Tenho uma visão analítica para resolver problemas, uma boa comunicação com minha equipe, e sou movido pela busca de excelência em cada projeto que me envolvo.
                        <br/>
                        Minha jornada como desenvolvedor está apenas começando, mas minha motivação é forte e estou pronto para enfrentar o que vier pela frente. Se você está procurando alguém que combine aprendizado contínuo com um forte desejo de crescer, estou pronto para contribuir e aprender ao mesmo tempo.
                    </p>
                    <DevList />
                    <Link to="/about" className="flat-button">LANGUAGES</Link>
                    <br/>
                    <Link to="/about/tech" className="flat-button">FRAMEWORKS/TECHNOLOGIES</Link>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner"> 
                        <div className="face1">
                            <FontAwesomeIcon icon={faAmazon}/>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faPython} color="#ffd700"/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faJava} color="#EC4D28"/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default About;
