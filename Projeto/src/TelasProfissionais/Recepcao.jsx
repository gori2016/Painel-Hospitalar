import { useState } from 'react'; // 1. Faltava importar o useState
import styles from './Recepcao.module.css';
import Header from "../header/Header2";
import { Link } from 'react-router-dom';

function Recepcao() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [queixa, setQueixa] = useState("");
    const [fila, setFila] = useState([]);

    function gerarSenha() {
        return Math.floor(1000 + Math.random() * 9000);
    }

    // 2. Função para lidar com o envio do formulário
    function lidarComCadastro(e) {
        e.preventDefault(); // Impede a página de recarregar

        const novoPaciente = {
            id: Date.now(),
            nome: nome,
            cpf: cpf,
            queixa: queixa,
            senha: gerarSenha(),
            status: "RECEPCAO"
        };

        setFila(prev => [...prev, novoPaciente]);

        // Limpa o formulário
        setNome("");
        setCpf("");
        setQueixa("");
    }

    // 3. Função encaminhar (precisa existir para o botão funcionar)
    function encaminhar(id) {
        console.log("Encaminhando paciente:", id);
        // Aqui você faria a lógica de mudar o status ou mover de lista
    }

    // O RETURN PRECISA ESTAR DENTRO DA FUNÇÃO RECEPCAO
    return (
        <main>
            <Header />
            <div className={styles.alinhamento}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className="card p-4 shadow" style={{ width: '350px' }}>
                            <h3 className="text-center mb-3">Cadastro de Paciente</h3>

                            {/* 4. Adicionado o onSubmit aqui */}
                            <form onSubmit={lidarComCadastro}>
                                <div className="mb-3">
                                    <label className="form-label">Nome</label>
                                    <input
                                        value={nome}
                                        type="text"
                                        className="form-control"
                                        placeholder="Digite seu Nome"
                                        onChange={(e) => setNome(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">CPF</label>
                                    <input
                                        value={cpf}
                                        type="text"
                                        className="form-control"
                                        placeholder="Digite seu CPF"
                                        onChange={(e) => setCpf(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Queixa Principal</label>
                                    <input
                                        value={queixa}
                                        type="text"
                                        className="form-control"
                                        placeholder="Queixa Principal"
                                        onChange={(e) => setQueixa(e.target.value)}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Cadastrar
                                </button>
                            </form>
                        </div>

                        <section className='card p-4 shadow' style={{ width: '350px' }}>
                            <h3 className="text-center mb-3">Fila de Espera</h3>

                            {fila.length === 0 && (
                                <p className="text-muted text-center">Nenhum paciente na fila</p>
                            )}

                            {fila.map(paciente => (
                                <div key={paciente.id} className="border-bottom py-2">
                                    <p className="mb-0 fw-semibold">{paciente.nome}</p>
                                    <small className="text-muted">Senha: {paciente.senha}</small>
                                    <div className="mt-2">
                                        <Link to="/preAtendimento">
                                            <button
                                                onClick={() => encaminhar(paciente.id)}
                                                className="btn btn-primary btn-sm w-100"
                                            >
                                                Encaminhar para o pré-atendimento
                                            </button>
                                        </Link>

                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
} // <--- A função Recepcao agora fecha aqui, DEPOIS do return.

export default Recepcao;