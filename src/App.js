import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [times, setTimes] = useState([
        {
            id: uuidv4(),
            nome: 'Programacao',
            cor: '#57C278',
        },
        {
            id: uuidv4(),
            nome: 'Front-End',
            cor: '#82CFFA',
        },
        {
            id: uuidv4(),
            nome: 'DataScience',
            cor: '#A6D157',
        },
        {
            id: uuidv4(),
            nome: 'DevOps',
            cor: '#E06B69',
        },
        {
            id: uuidv4(),
            nome: 'UX & Design',
            cor: '#DB6EBF',
        },
        {
            id: uuidv4(),
            nome: 'Mobile',
            cor: '#FFBA05',
        },
        {
            id: uuidv4(),
            nome: 'Inovacao e Gestao',
            cor: '#FF8A29',
        },
    ]);

    const [colaboradores, setColaboradores] = useState([]);

    const adicionarColaborador = (colaborador) => {
        setColaboradores([
            ...colaboradores,
            { ...colaborador, id: uuidv4(), fav: false },
        ]);
    };

    function deletarColaborador(idColaborador) {
        setColaboradores(
            colaboradores.filter(
                (colaborador) => colaborador.id !== idColaborador
            )
        );
    }

    function changeTimeColor(cor, idTime) {
        setTimes(
            times.map((time) => {
                if (time.id === idTime) {
                    time.cor = cor;
                }
                return time;
            })
        );
    }

    function addNovoTime(novoTime) {
        setTimes([...times, { ...novoTime, id: uuidv4() }]);
    }

    function favoritar(idColaborador) {
        setColaboradores(
            colaboradores.map((colaborador) => {
                if (colaborador.id === idColaborador) {
                    colaborador.fav = !colaborador.fav;
                }
                return colaborador;
            })
        );
    }

    const [showTimes, setShowTimes] = useState(true);

    const toggleTimes = () => {
        setShowTimes(!showTimes);
    };

    return (
        <div className="App">
            <Banner />
            <Formulario
                addNovoTime={addNovoTime}
                times={times.map((time) => time.nome)}
                onCadastro={(colaborador) => adicionarColaborador(colaborador)}
            />
            {colaboradores.length > 0 && (
                <section className="times">
                    <div className="titulo">
                        <h1>Minha Organização</h1>
                        <div className="add-button" onClick={toggleTimes}>
                            <img src="/imagens/button.svg" alt="button-add" />
                        </div>
                    </div>

                    {showTimes &&
                        times.map((time) => (
                            <Time
                                key={time.nome}
                                time={time}
                                colaboradores={colaboradores.filter(
                                    (colaborador) =>
                                        colaborador.time === time.nome
                                )}
                                onDelete={deletarColaborador}
                                onFav={favoritar}
                                changeColor={changeTimeColor}
                            />
                        ))}
                </section>
            )}

            <Rodape />
        </div>
    );
}

export default App;
