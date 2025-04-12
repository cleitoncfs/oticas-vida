import styles from "./Rodape.module.css";

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <p>
                © {new Date().getFullYear()} Óticas Vida - Todos os direitos
                reservados
            </p>
            <p>Desenvolvido por Cleiton Santos 💻 </p>
        </footer>
    );
}
