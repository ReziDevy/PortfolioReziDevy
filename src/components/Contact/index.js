import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters" 
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

      const sendEmail = (e) => {
        e.preventDefault() 

        emailjs
            .sendForm(
                'service_lj8o2ab', 
                'template_wn3x5jn', 
                refForm.current, 
                '_5KSx35ggTJ2W2nLV'
            )
            .then(
                () => {
                    alert("Message successfully sent! I will get back to you within 1 to 2 business days.")
                    window.location.reload(false)
                }, 
                () => { 
                    alert("Failed to send the message, please try again")
                }
            )
      }

    return(
        <>
            <div className = "container contact-page">
                <div className = "text-zone">
                    <table>
                        <tr>
                            <td className="left-side">
                                <h1>
                                    <AnimatedLetters letterClass={letterClass} strArray = {"Contact me".split("")} idx = {15} />
                                </h1>
                                <p>
                                    <br/>
                                    Agradecemos o seu interesse em entrar em contato! 
                                    <br/>
                                    <br/>Valorizo ​​a comunicação aberta e estou aberto a quaisquer perguntas, feedbacks ou oportunidades de colaboração. Não hesite em entrar em contato comigo preenchendo o formulário de contato.
                                    <br/>
                                    <br/>
                                    <a target = "_blank" rel = "noreferrer" href = "https://www.linkedin.com/in/bruno-rezende-b219901aa/">
                                        <FontAwesomeIcon icon={faLinkedin}  class = "icon" color = "#4d4d4e" />
                                    </a>
                                    <a target = "_blank" rel = "noreferrer" href = "mailto:rezendecontatotrabalho@gmail.com">
                                        <FontAwesomeIcon icon={faEnvelope} class = "icon" color = "#4d4d4e" />
                                    </a>
                                </p>
                            </td>
                            <td className="right-side">
                                <div className="contact-form" onSubmit={sendEmail}>
                                    <form ref={refForm}>
                                        <ul>
                                            <li className = "half">
                                                <input type="text" name="name" placeholder="Name" required />
                                            </li>
                                            <li className="half">
                                                <input type="email" name="email" placeholder = "Email" required />
                                            </li>
                                            <li>
                                                <input placeholder = "Subject" type="text" name="subject" required/>
                                            </li>
                                            <li>
                                                <textarea placeholder="Message" name="message" required></textarea>
                                            </li>
                                            <li>
                                                <input type="submit" className="flat-button" value="SEND" />
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact