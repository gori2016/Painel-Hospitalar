import styles from '../header/header.module.css'
import logo from '../imagens/imagemSus.png'

function Header() {
    const textoHeader = ["Olá! Nome do funcionario"]
    return (
        <header className={styles.headerPrincipal}>
            <img className={styles.logo} src={logo} alt="" />
            <ul className={styles.inter}>
                {textoHeader.map((texto) => {

                    return <li>{texto}</li>
                })}
            </ul>
        </header>
    )
}

export default Header