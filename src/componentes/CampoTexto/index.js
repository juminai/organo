import './CampoText.css';

const CampoTexto = ( {type = 'text', onAlterado, label, valor, obrigatorio, placeholder = ''} ) => {

    const onDigitar = (e) => {
        onAlterado(e.target.value)
    };  

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input
                value={valor}
                onChange={onDigitar}
                required={obrigatorio}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

export default CampoTexto;
