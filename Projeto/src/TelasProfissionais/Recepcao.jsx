import styles from './Recepcao.module.css'
import Header from "../header/Header2"
function Recepcao() {
  
    return (
        <main>
            <Header/>
            <div className={styles.alinhamento}>
            <div className={styles.container}>
            
                <div className={styles.content}>
                    <div className="card p-4 shadow" style={{ width: '350px' }}>
                        <h3 className="text-center mb-3">Formulário de Cadastro de Paciente</h3>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Nome</label>
                                <input type="email" className="form-control" placeholder="Digite seu email" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">CPF</label>
                                <input type="number" className="form-control" placeholder="Digite sua senha" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Queixa Principal</label>
                                <input type="text" className="form-control" placeholder="Queixa Principal" />
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Cadastrar
                            </button>
                            
                        </form>
                        
                    </div>
                    <section className='card p-4 shadow' style={{width: '350px'} }>
                             <h3 className="text-center mb-3">Fila de Espera</h3>

                        <form>
                            <div className="mb-3">
                               
                                <label className="form-label">Nome:</label>
                                
                            </div>

                            <div className="mb-3">
                                <label className="form-label">CPF:</label>
                               
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Encaminhar para  o pré Atendimento
                            </button>
                            
                        </form>
                    </section>
                </div>
            </div>

        </div>
        </main>
        

    )
}

export default Recepcao