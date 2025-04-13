import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
    return (
        <div className={styles.whatsappIcon}>
            <a
                href="https://wa.me/2199999999/?text=Mande%20uma%20mensagem%20para%20a%20ALUCAR%20-%20a%20melhor%20locadora%20de%20veículos%20do%20mundo"
                target="_blank"
                rel="noopener noreferrer"
                title="Contate-nos também pelo Whatsapp"
            >
                <img
                    src="/assets/whatsapp-logo-128x128_resized.png"
                    alt="Whatsapp Oticas Vida"
                />
            </a>
        </div>
    );
}
