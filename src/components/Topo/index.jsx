import { useState } from "react";
import styles from "./Topo.module.css";

export default function Topo() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header className={styles.header}>
            <div className={styles["limitar-secao"]}>
                <img
                    src="/assets/logo.png"
                    alt="imagem de um óculos à direita e o nome da ótica à esquerda"
                    className={styles.logo}
                />

                {/* Botão Hamburguer */}
                <button
                    className={`${styles["menu-hamburguer"]} ${
                        menuAberto ? styles.ativo : ""
                    }`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                    aria-expanded={menuAberto}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav
                    className={`${styles.nav} ${
                        menuAberto ? styles.ativo : ""
                    }`}
                >
                    <a
                        href="#produtos"
                        className={styles.link}
                        onClick={() => setMenuAberto(false)}
                    >
                        PRODUTOS
                    </a>
                    <a
                        href="#sobre"
                        className={styles.link}
                        onClick={() => setMenuAberto(false)}
                    >
                        SOBRE
                    </a>
                    <a
                        href="#contato"
                        className={styles.link}
                        onClick={() => setMenuAberto(false)}
                    >
                        CONTATO
                    </a>
                </nav>
            </div>
        </header>
    );
}
