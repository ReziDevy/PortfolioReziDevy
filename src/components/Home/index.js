import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoM from '../../assets/images/M.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = "Bruno Rezende".split(""); // Aqui você coloca seu nome
    const jobArray = "desenvolvedor de software.".split(""); // Aqui você coloca sua profissão

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => {
          clearTimeout(timerId);
        };
    }, []);

    return(
      <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className = {`${letterClass} _8`}>O</span>
                <span className = {`${letterClass} _9`}>l</span>
                <span className = {`${letterClass} _10`}>á</span>
                <br />
                <span className = {`${letterClass} _11`}>S</span>
                <span className = {`${letterClass} _12`}>o</span>
                <span className = {`${letterClass} _13`}>u</span>
                <img src={LogoM} alt = "developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={14} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={17} /> 
                </h1>
                <h2>Ciência da Computação; Estudo na Universidade Estácio De Sá - Brasil - SP</h2>
                <a href="https://www.linkedin.com/in/bruno-rezende-b219901aa/" target="_blank" rel="noopener noreferrer" className="flat-button">CONTACT ME</a> {/* Alterado para redirecionar para seu LinkedIn */}
            </div>
            <Logo className="Home"/>
        </div>
        <Loader type="pacman" />
      </>
    );
}

export default Home;
