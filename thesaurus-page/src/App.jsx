import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import DocsPage from './pages/DocsPage.jsx';

function App() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs" element={<DocsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
