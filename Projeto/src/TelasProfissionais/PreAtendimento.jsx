import Header from "../header/Header2"
import styles from '../TelasProfissionais/preAtendimento.module.css'


function preAtendimento() {
    return (
        <div className={styles.container}>
            <Header /> {/* O Header fica no topo normal */}
            
            {/* Esta div abaixo controla o tamanho e posição do card */}
            <div className={styles.contentArea}>
                <section className='card p-4 shadow' style={{ width: '350px' }}>
                    <h3 className="text-center mb-3">Fila de Espera</h3>

                    <form>
                        <div className="mb-3 d-flex  align-items-center">
                            <p>Nome: </p>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default preAtendimento