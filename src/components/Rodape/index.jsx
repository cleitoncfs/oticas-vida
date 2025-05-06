import styles from "./Rodape.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles["rodape-container"]}>
                <p className={styles["footer-copyright"]}>
                    © {new Date().getFullYear()} Óticas Vida - Todos os direitos
                    reservados
                </p>
                <p className={styles["footer-credits"]}>
                    Desenvolvido por{" "}
                    <a
                        href="https://portfolio-cleiton.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles["footer-link"]}
                        aria-label="Portfólio do desenvolvedor (abre em nova aba)"
                    >
                        <span>Cleiton Santos</span>
                        <FaExternalLinkAlt className={styles["link-icon"]} />
                    </a>
                </p>
            </div>
        </footer>
    );
}
