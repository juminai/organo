import './Colaborador.css';
import { IoMdCloseCircle } from 'react-icons/io';
import { FaStar, FaRegStar } from 'react-icons/fa6';

const Colaborador = ({ onDelete, cor, colaborador, onFav }) => {
    const favProps = {
        size: 25,
        color: '#FFCC00',
    };

    return (
        <div className="colaborador">
            <IoMdCloseCircle
                size={25}
                color={cor}
                className="deletar-colaborador"
                onClick={() => onDelete(colaborador.id)}
            />
            <div className="top" size style={{ backgroundColor: cor }}>
                <img
                    src={
                        colaborador.imagem !== ''
                            ? colaborador.imagem
                            : '/favicon.ico'
                    }
                    alt={colaborador.nome}
                />
            </div>
            <div className="bottom">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div onClick={() => onFav(colaborador.id)}>
                    {colaborador.fav ? (
                        <FaStar {...favProps} />
                    ) : (
                        <FaRegStar {...favProps} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Colaborador;
