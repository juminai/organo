import './Colaborador.css';
import { IoMdCloseCircle } from 'react-icons/io';

const Colaborador = ({ onDelete, cor, colaborador }) => {
    return (
        <div className="colaborador">
            <IoMdCloseCircle
                size={25}
                className="deletar-colaborador"
                onClick={() => onDelete(colaborador.id)}
            />
            <div className="top" size style={{ backgroundColor: cor }}>
                <img src={colaborador.imagem !== '' ? colaborador.imagem : '/favicon.ico'} alt={colaborador.nome} />
            </div>
            <div className="bottom">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    );
};

export default Colaborador;
