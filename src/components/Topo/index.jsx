import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Topo.module.css";

export default function Topo() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [headerScroll, setHeaderScroll] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMenu = useCallback(() => {
        setMenuAberto((prev) => !prev);
        document.body.style.overflow = !menuAberto ? "hidden" : "auto";
    }, [menuAberto]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                menuAberto &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                toggleMenu();
            }
        }

        function handleScroll() {
            setHeaderScroll(window.scrollY > 50);
            if (menuAberto) toggleMenu();
        }

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
            document.body.style.overflow = "auto";
        };
    }, [menuAberto, toggleMenu]);

    const handleLinkClick = useCallback(() => {
        toggleMenu();
    }, [toggleMenu]);

    return (
        <header
            className={`${styles.header} ${
                headerScroll ? styles.scrolled : ""
            }`}
        >
            <div className={styles["limitar-secao"]}>
                <a href="#inicio" className={styles["logo-link"]}>
                    <img
                        src="/assets/logo.png"
                        alt="Logotipo da Óticas Vida"
                        className={styles.logo}
                    />
                </a>

                <button
                    ref={buttonRef}
                    className={`${styles["menu-hamburguer"]} ${
                        menuAberto ? styles.ativo : ""
                    }`}
                    onClick={toggleMenu}
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuAberto}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>

                <nav
                    ref={menuRef}
                    className={`${styles.nav} ${
                        menuAberto ? styles.ativo : ""
                    }`}
                    aria-label="Navegação principal"
                >
                    <a
                        href="#inicio"
                        className={styles.link}
                        onClick={handleLinkClick}
                    >
                        INÍCIO
                    </a>
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
