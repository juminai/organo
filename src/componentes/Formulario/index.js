import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListSuspensa';
import Button from '../Button';
import { useState } from 'react';

const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('#000000');

    const onSave = (e) => {
        e.preventDefault();
        props.onCadastro({
            nome,
            cargo,
            imagem,
            time,
        });

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    };

    const onSaveTime = (e) => {
        e.preventDefault();
        props.addNovoTime({
            nome: nomeTime,
            cor: corTime,
        });

        setNomeTime('');
        setCorTime('');
    };

    return (
        <section className="formularios">
            <form onSubmit={onSave} className="formulario">
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    valor={nome}
                    onAlterado={(valor) => setNome(valor)}
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                />
                <CampoTexto
                    valor={cargo}
                    onAlterado={(valor) => setCargo(valor)}
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                />
                <CampoTexto
                    valor={imagem}
                    onAlterado={(valor) => setImagem(valor)}
                    label="Imagem"
                    placeholder="Digite o endereco da imagem"
                />
                <ListaSuspensa
                    valor={time}
                    onAlterado={(valor) => setTime(valor)}
                    label="Time"
                    items={props.times}
                />
                <Button>Criar card</Button>
            </form>
            <form onSubmit={onSaveTime} className="formulario">
                <h2>Preencha os dados para criar o novo time</h2>
                <CampoTexto
                    valor={nomeTime}
                    onAlterado={(valor) => setNomeTime(valor)}
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do novo time"
                />
                <CampoTexto
                    valor={corTime}
                    onAlterado={(valor) => setCorTime(valor)}
                    obrigatorio
                    label="Cor"
                    type='color'
                />
                <p className='cor-selecionada'>{corTime}</p>
                <Button>Criar Time</Button>
            </form>
        </section>
    );
};

export default Formulario;
