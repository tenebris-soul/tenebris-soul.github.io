import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { PLUGIN_DOWNLOAD_FILENAME, PLUGIN_DOWNLOAD_URL } from '../data/download.js';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (event) => {
    event.preventDefault();

    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate('/');
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 80);
  };

  const handleDocsClick = () => {
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 80);
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="logo" to="/" aria-label="Перейти к Hero-секции" onClick={handleLogoClick}>
          <span className="logo-mark" />
          THESAURUS
        </Link>

        <nav className="header-actions" aria-label="Основная навигация">
          <a className="header-link header-download" href={PLUGIN_DOWNLOAD_URL} download={PLUGIN_DOWNLOAD_FILENAME}>
            Скачать плагин
          </a>
          <NavLink className="header-link" to="/docs" onClick={handleDocsClick}>
            Документация
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
