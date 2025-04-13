import { useRef } from "react";
import styles from "./SecaoContatos.module.css";

export default function SecaoContato() {
    const textareaRef = useRef(null);

    const handleEnviar = () => {
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

                <div className={styles["formulario-contato"]}>
                    <textarea
                        ref={textareaRef}
                        className={styles.textarea}
                        placeholder="Escreva sua mensagem aqui..."
                        rows="4"
                    />
                    <button className={styles.botao} onClick={handleEnviar}>
                        Enviar
                    </button>
                </div>

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
                        height="250"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className={styles["contato-container"]}>
                    <div className={styles["contato-conteudo"]}>
                        <h4>Contato</h4>
                        <div>
                            <img
                                src="/assets/local.png"
                                title="Ícone local"
                                alt="Pino de localização"
                            />
                            <span>Nova Iguaçu, RJ</span>
                        </div>
                        <div>
                            <img
                                src="/assets/telefone.png"
                                title="Ícone telefone"
                                alt="Ícone de um telefone"
                            />
                            <span>(21) 9999-9999</span>
                        </div>
                        <div>
                            <img
                                src="/assets/email.png"
                                title="Ícone email"
                                alt="Ícone de uma carta"
                            />
                            <span>contato@oticavida.com</span>
                        </div>
                    </div>
                    <div className={styles["contato-conteudo"]}>
                        <h4>Nossas Redes Sociais</h4>
                        <div>
                            <img
                                src="/assets/fb.png"
                                title="Ícone facebook"
                                alt="logo do facebook"
                            />
                            <span>/OticaVida</span>
                        </div>
                        <div>
                            <img
                                src="/assets/ig.png"
                                title="Ícone instagram"
                                alt="logo do instagram"
                            />
                            <span>@oticavidarj</span>
                        </div>
                        <div>
                            <img
                                src="/assets/tt.png"
                                title="Ícone twitter"
                                alt="logo do twitter"
                            />
                            <span>@oticavidarj</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
