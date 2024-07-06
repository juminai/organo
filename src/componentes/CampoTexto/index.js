import './CampoText.css';

const CampoTexto = (props) => {

    const onDigitar = (e) => {
        props.onAlterado(e.target.value)
    };  

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
                value={props.valor}
                onChange={onDigitar}
                required={props.obrigatorio}
                type="text"
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default CampoTexto;
