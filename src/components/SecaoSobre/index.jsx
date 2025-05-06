import styles from "./SecaoSobre.module.css";
import { FaStore, FaUserFriends } from "react-icons/fa";

export default function SecaoSobre() {
    return (
        <section id="sobre" className={styles["secao-sobre"]}>
            <div
                className={`${styles["limitar-secao"]} ${styles["container-sobre"]}`}
            >
                <h3>QUEM SOMOS NÓS?</h3>
                <p>
                    Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas
                    Vida iniciou suas atividades focada no atendimento ao
                    público de renda mais baixa, sempre com o objetivo de
                    proporcionar ao cliente bom atendimento, qualidade e preço
                    baixo.
                </p>

                <div className={styles["box-cards"]}>
                    {/* Card 1 - Filiais */}
                    <div className={styles["card"]}>
                        <FaStore className={styles["icon"]} />
                        <h4>NOSSAS FILIAIS</h4>
                        <p>
                            Hoje temos mais de 20 filiais pelo Brasil e na
                            América
                        </p>
                    </div>

                    <img
                        src="/assets/loja.png"
                        alt="Filial da Óticas Vida"
                        className={styles["card-image"]}
                    />

                    {/* Card 2 - Atendimento */}
                    <div className={styles["card"]}>
                        <FaUserFriends className={styles["icon"]} />
                        <h4>ATENDIMENTO FLEXÍVEL</h4>
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>

                    <img
                        src="/assets/atendimento.png"
                        alt="Atendimento na Óticas Vida"
                        className={styles["card-image"]}
                    />
                </div>
            </div>
        </section>
    );
}
