import './Colaborador.css'

const Colaborador = ( props ) => {
    return (
        <div className='colaborador'>
            <div className='top' style={{ backgroundColor: props.cor }}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='bottom'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador