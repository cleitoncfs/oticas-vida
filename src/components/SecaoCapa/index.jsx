import styles from "./SecaoCapa.module.css";

export default function SecaoCapa() {
    return (
        <section className={styles["secao-capa"]}>
            <div className={styles["limitar-secao"]}>
                <p>Preços baixos em</p>
                <h1>Óculos de grau e de sol</h1>
                <p>Você só encontra aqui</p>
            </div>
        </section>
    );
}
