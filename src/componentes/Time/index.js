import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';
import './Time.css';

const Time = ({ time, colaboradores, onDelete, changeColor, onFav }) => {

    return (
        colaboradores.length > 0 && (
            <section
                className="time"
                style={{ backgroundColor: hexToRgba(time.cor, 0.5)}}
            >
                <input
                    type="color"
                    className="input-cor"
                    value={time.cor}
                    onChange={(e) => changeColor(e.target.value, time.id)}
                />
                <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>

                <div className="colaboradores">
                    {colaboradores.map((colaborador) => {
                        return (
                            <Colaborador
                                key={colaborador.id}
                                colaborador={colaborador}
                                cor={time.cor}
                                onDelete={onDelete}
                                onFav={onFav}
                            />
                        );
                    })}
                </div>
            </section>
        )
    );
};

export default Time;
