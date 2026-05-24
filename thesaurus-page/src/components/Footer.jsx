import { Link, useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const goToDownload = (event) => {
    event.preventDefault();
    navigate('/?scroll=download');
  };

  return (
    <footer className="footer">
      <div>
        <Link className="footer-logo" to="/">THESAURUS</Link>
        <p>Ассет-плагин для Unity 6, который помогает создавать виртуальные музеи, выставки и интерактивные образовательные проекты.</p>
      </div>
      <div className="footer-links">
        <Link to="/docs">Документация</Link>
        <a href="/#download" onClick={goToDownload}>Скачивание</a>
        <span>Unity 6</span>
        <span>Copyright 2026 Thesaurus</span>
      </div>
    </footer>
  );
}

export default Footer;
