import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

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

  const handleDownloadClick = (event) => {
    event.preventDefault();

    if (location.pathname === '/') {
      document.getElementById('download')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    navigate('/?scroll=download');
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="logo" to="/" aria-label="Перейти к Hero-секции" onClick={handleLogoClick}>
          <span className="logo-mark" />
          THESAURUS
        </Link>

        <nav className="header-actions" aria-label="Основная навигация">
          <a className="header-link header-download" href="#download" onClick={handleDownloadClick}>
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
