import Header from "../header/Header"
import styles from '../forms/Cadastrar.module.css'
import { Link } from "react-router-dom"

function Login() {
    return (

        <main className={styles.container}>
            <Header />
            <div className={styles.content}>
                <div className="card p-4 shadow" style={{ width: '350px' }}>
                    <h3 className="text-center mb-3">Faça Seu Login</h3>

                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Digite seu email" />
                        </div>
                        <div className={styles.naoPossuiCadastro}>
                            <p>Não possui cadastro?
                               <Link to="/cadastrar">Cadastre-se</Link> 
                            </p>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Senha</label>
                            <input type="password" className="form-control" placeholder="Digite sua senha" />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Logar
                        </button>
                    </form>
                </div>
            </div>
        </main>

    )
}

export default Login