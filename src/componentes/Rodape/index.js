import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="rodape">
                        <div className="redes">
                <ul>
                    <li>
                        <a href='https://www.facebook.com/'>
                            <img src="/imagens/facebook.png" />
                        </a>
                    </li>
                    <li>
                        <a href='https://x.com/home'>
                            <img src="/imagens/twitter.png" />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/'>
                            <img src="/imagens/instagram.png" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="logo">
                <img src="/imagens/logo.png" />
            </div>
            <div className="p">
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    );
};

export default Rodape;
