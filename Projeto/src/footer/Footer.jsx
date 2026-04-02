import styles from '../footer/Footer.module.css'
function Footer() {
    return (
        <footer className={styles.container}>
            <h1 className={styles.titulo}>Ultimas Chamadas</h1>
            <div className={styles.container2}>
                <div className={styles.container3}>
                    <p className={styles.nome}>Hora:</p>
                    <p className={styles.texto}>Igor Borges</p>
                </div>
                <hr className={styles.linha} />

                <div className={styles.container3}>
                    <p className={styles.nome}>Hora:</p>
                    <p className={styles.texto}>Igor Borges</p>
                </div>
                <hr className={styles.linha} />

                <div className={styles.container3}>
                    <p className={styles.nome}>Hora:</p>
                    <p className={styles.texto}>Igor Borges</p>
                </div>


                <hr className={styles.linha} />
            </div>
        </footer>
    )
}

export default Footer