import { useRef } from "react";
import styles from "./SecaoContatos.module.css";
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";

export default function SecaoContato() {
    const textareaRef = useRef(null);

    const handleEnviar = (e) => {
        e.preventDefault();
        const mensagem = textareaRef.current.value.trim();

        if (mensagem) {
            alert("Mensagem enviada com sucesso!");
            textareaRef.current.value = "";
        } else {
            alert("Por favor, escreva uma mensagem antes de enviar.");
        }
    };

    return (
        <section id="contato" className={styles["secao-contato"]}>
            <div className={styles["limitar-secao"]}>
                <h3>Fale conosco</h3>

                <form
                    className={styles["formulario-contato"]}
                    onSubmit={handleEnviar}
                >
                    <textarea
                        ref={textareaRef}
                        className={styles.textarea}
                        placeholder="Escreva sua mensagem aqui..."
                        rows="5"
                        required
                    />
                    <button type="submit" className={styles.botao}>
                        Enviar Mensagem
                    </button>
                </form>

                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre
                    em contato através de nossas redes sociais ou da central de
                    atendimento.
                </p>

                <div className={styles.mapa}>
                    <iframe
                        title="Localização da Ótica Vida"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2034103823026!2d-43.45130198503415!3d-22.85913468503924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x996560b2c358cb%3A0xe89cb8b51efcb867!2sNova%20Igua%C3%A7u%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1615576615203!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="350"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className={styles["contato-container"]}>
                    <div className={styles["contato-conteudo"]}>
                        <h4>Contato</h4>
                        <div>
                            <FaMapMarkerAlt />
                            <span>Nova Iguaçu, RJ</span>
                        </div>
                        <div>
                            <FaPhone />
                            <span>(21) 9999-9999</span>
                        </div>
                        <div>
                            <FaEnvelope />
                            <span>contato@oticavida.com</span>
                        </div>
                    </div>
                    <div className={styles["contato-conteudo"]}>
                        <h4>Nossas Redes Sociais</h4>
                        <div>
                            <FaFacebook />
                            <span>/OticaVida</span>
                        </div>
                        <div>
                            <FaInstagram />
                            <span>@oticavidarj</span>
                        </div>
                        <div>
                            <FaTwitter />
                            <span>@oticavidarj</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
