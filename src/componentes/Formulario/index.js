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

    const onSave = (e) => {
        e.preventDefault();
        props.onCadastro({
            nome,
            cargo,
            imagem,
            time,
        });

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        
    };

    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
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
        </section>
    );
};

export default Formulario;
