import { useState, useEffect, useRef } from "react";
import styles from "./Topo.module.css";

export default function Topo() {
    const [menuAberto, setMenuAberto] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                menuAberto &&
                !menuRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                setMenuAberto(false);
            }
        }

        function handleScroll() {
            if (menuAberto) {
                setMenuAberto(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [menuAberto]);

    const handleLinkClick = () => {
        setMenuAberto(false);
        // Adiciona um pequeno delay para permitir a animação fechar antes do scroll
        setTimeout(() => {
            window.scrollTo(0, window.scrollY);
        }, 300);
    };

    return (
        <header className={styles.header}>
            <div className={styles["limitar-secao"]}>
                <img
                    src="/assets/logo.png"
                    alt="imagem de um óculos à direita e o nome da ótica à esquerda"
                    className={styles.logo}
                />

                <button
                    ref={buttonRef}
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
                    ref={menuRef}
                    className={`${styles.nav} ${
                        menuAberto ? styles.ativo : ""
                    }`}
                >
                    <a
                        href="#produtos"
                        className={styles.link}
                        onClick={handleLinkClick}
                    >
                        PRODUTOS
                    </a>
                    <a
                        href="#sobre"
                        className={styles.link}
                        onClick={handleLinkClick}
                    >
                        SOBRE
                    </a>
                    <a
                        href="#contato"
                        className={styles.link}
                        onClick={handleLinkClick}
                    >
                        CONTATO
                    </a>
                </nav>
            </div>
        </header>
    );
}
