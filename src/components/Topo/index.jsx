import styles from "./Topo.module.css";

export default function Topo() {
    return (
        <header className={styles.header}>
            <div className={styles["limitar-secao"]}>
                <img
                    src="/assets/logo.png"
                    alt="imagem de um óculos à direita e o nome da ótica à esquerda"
                    className={styles.logo}
                />

                <nav>
                    <a href="#produtos" className={styles.link}>
                        PRODUTOS
                    </a>
                    <a href="#sobre" className={styles.link}>
                        SOBRE
                    </a>
                    <a href="#contato" className={styles.link}>
                        CONTATO
                    </a>
                </nav>
            </div>
        </header>
    );
}
