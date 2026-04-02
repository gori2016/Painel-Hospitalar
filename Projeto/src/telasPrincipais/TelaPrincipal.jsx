import Header from "../header/Header"
import styles from '../telasPrincipais/TelaPrincipal.module.css'
import Footer from "../footer/Footer"
function TelaPrincipal() {
    return (
        <div>
            <Header />
            <main className={styles.container}>
                <div className={styles.container2}>
                    <p className={styles.paragrafo}>Paciente</p>
                </div>
                <div className={styles.container2}>
                    <p className={styles.textoPrincipal}>Marcelo Bezerra</p>
                </div>
                <div className={styles.container2}>
                    <div className={styles.chamada}><p>Chamada 2</p></div>
                </div>
                <div className={styles.container2}>
                    <p className={styles.paragrafoConsultorio}>Consultório 3</p>
                </div>
            </main>
            <Footer/>
           
        </div>
    )
}

export default TelaPrincipal
