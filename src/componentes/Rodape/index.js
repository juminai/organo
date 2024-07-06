import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="rodape">
            <div className="redes">
                <ul>
                    <li>
                        <a href='https://www.facebook.com/'>
                            <img src="/imagens/facebook.svg" />
                        </a>
                    </li>
                    <li>
                        <a href='https://x.com/home'>
                            <img src="/imagens/twitter.svg" />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/'>
                            <img src="/imagens/instagram.svg" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="logo">
                <img src="/imagens/Logo.svg" />
            </div>
            <div className="p">
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    );
};

export default Rodape;
