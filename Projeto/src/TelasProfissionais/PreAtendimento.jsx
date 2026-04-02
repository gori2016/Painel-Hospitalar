import { useState } from "react";
import Header from "../header/Header2";
import styles from '../TelasProfissionais/preAtendimento.module.css';
import { useFila } from '../context/FilaContext'

function PreAtendimento() {
    const [pacienteSelecionado, setPacienteSelecionado] = useState(null);
    const [aberto, setAberto] = useState(false);

    const { fila } = useFila(); // 

    const abrirPopup = (paciente) => {
        setPacienteSelecionado(paciente);
        setAberto(true);
    };

    const fecharPopup = () => {
        setAberto(false);
        setPacienteSelecionado(null);
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className="container mt-4">
                <div className="card shadow mx-auto" style={{ width: '350px', marginTop: '220px' }}>
                    <div className="card-body">
                        <h3 className="card-title text-center mb-4">Fila de Espera</h3>

                        {fila.length === 0 && ( // ✅ lê do contexto, não do JSON
                            <p className="text-muted text-center">Nenhum paciente na fila</p>
                        )}

                        {fila.map(paciente => ( // ✅ lê do contexto, não do JSON
                            <div key={paciente.id}
                                className="d-flex align-items-center justify-content-between border-bottom py-2">
                                <div>
                                    <p className="mb-0 fw-semibold">{paciente.nome}</p>
                                    <small className="text-muted">{paciente.queixa}</small>
                                </div>
                                <button onClick={() => abrirPopup(paciente)} className="btn btn-primary btn-sm">
                                    Atender
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {aberto && pacienteSelecionado && (
                <div onClick={fecharPopup}
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ background: 'rgba(0,0,0,0.5)', zIndex: 1000 }}>
                    <div onClick={e => e.stopPropagation()} className="bg-white rounded p-4"
                        style={{ width: '100%', maxWidth: '420px' }}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <h5 className="mb-0">{pacienteSelecionado.nome}</h5>
                                <small className="text-muted">{pacienteSelecionado.queixa}</small>
                            </div>
                            <button onClick={fecharPopup} className="btn-close" />
                        </div>
                        <hr />
                        <div className="mb-3">
                            <label className="form-label text-muted small">Alergias</label>
                            <input className="form-control" placeholder="Ex: Dipirona, Penicilina..." />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-muted small">Medicamentos em uso</label>
                            <input className="form-control" placeholder="Ex: Losartana 50mg..." />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-muted small">Observações</label>
                            <textarea className="form-control" rows={3} placeholder="Anotações adicionais..." />
                        </div>
                        <button onClick={fecharPopup} className="btn btn-primary w-100">
                            Encaminhar ao médico →
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PreAtendimento;