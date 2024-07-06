import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select
                onChange={(e) => props.onAlterado(e.target.value)}
                required={props.obrigatorio}
                value={props.valor}
            >
                {props.items.map((item) => (
                    <option key={item}>{item}</option>
                ))}
                <option value=''></option>
            </select>
        </div>
    );      
};

export default ListaSuspensa;
