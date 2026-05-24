import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { PLUGIN_DOWNLOAD_FILENAME, PLUGIN_DOWNLOAD_URL } from '../data/download.js';
import { audiences, coreCards, demos, features, reasons, steps } from '../data/homeData.js';
import heroImage from '../data/images/heroSection.png';
import demo1 from '../data/images/demo1.png';
import demo2 from '../data/images/demo2.png';
import demo3 from '../data/images/demo3.png';

const demoImages = [demo1, demo2, demo3];

function MuseumMockup() {
  return (
    <div className="museum-mockup" aria-label="Визуальный макет виртуального музея">
      <div className="mockup-toolbar">
        <span />
        <span />
        <span />
        <strong>Unity 6 Scene</strong>
      </div>
      <div className="mockup-image-wrap">
        <img src={heroImage} alt="Сцена виртуального музея в Unity 6" />
      </div>
    </div>
  );
}

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.get('scroll') === 'download') {
      window.setTimeout(() => {
        document.getElementById('download')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  }, [location.search]);

  return (
    <>
      <section className="hero section">
        <div className="hero-copy">
          <span className="eyebrow">Unity 6 asset plugin</span>
          <h1>Создавайте виртуальные музеи в Unity 6 без кода</h1>
          <p>
            Thesaurus - ассет-плагин для Unity 6, который помогает быстро собирать интерактивные музейные пространства,
            выставки и геймифицированные образовательные проекты.
          </p>
          <div className="hero-actions">
            <Button href={PLUGIN_DOWNLOAD_URL} download={PLUGIN_DOWNLOAD_FILENAME}>Скачать плагин</Button>
            <Button to="/docs" variant="secondary">Открыть документацию</Button>
          </div>
        </div>
        <MuseumMockup />
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Основа проекта"
          title="Что такое Thesaurus?"
          text="Плагин позволяет создавать виртуальные музеи в Unity 6 с помощью готовых компонентов"
        />
        <div className="card-grid three">
          {coreCards.map((card, index) => (
            <FeatureCard key={card.title} title={card.title} text={card.text} index={index} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="Аудитория" title="Для кого создан Thesaurus?" />
        <div className="card-grid four">
          {audiences.map(([title, text], index) => (
            <FeatureCard key={title} title={title} text={text} index={index} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="Инструменты" title="Возможности" />
        <div className="card-grid three">
          {features.map(([title, text], index) => (
            <FeatureCard key={title} title={title} text={text} index={index} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="Workflow" title="Как это работает" />
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="Сценарии" title="Два сценария использования" />
        <div className="scenario-grid">
          <article className="scenario-card">
            <h3>Классический виртуальный музей</h3>
            <p>Подходит для:</p>
            <ul>
              <li>выставок</li>
              <li>цифровых галерей</li>
              <li>исторических экспозиций</li>
              <li>образовательных туров</li>
            </ul>
          </article>
          <article className="scenario-card accent">
            <h3>Геймифицированный музей</h3>
            <p>Подходит для:</p>
            <ul>
              <li>квестов</li>
              <li>интерактивных экскурсий</li>
              <li>обучающих игр</li>
              <li>музеев с заданиями, достижениями и сюжетными маршрутами</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section why-section">
        <SectionTitle eyebrow="Преимущества" title="Почему Thesaurus" />
        <div className="reason-list">
          {reasons.map((reason) => (
            <span key={reason}>{reason}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="Превью" title="Демонстрация" />
        <div className="demo-grid">
          {demos.map((demo, index) => (
            <article className="demo-card" key={demo}>
              <div className="demo-visual">
                <img src={demoImages[index]} alt={demo} />
              </div>
              <h3>{demo}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section download-section" id="download">
        <div>
          <span className="eyebrow">Download</span>
          <h2>Начните создавать свой виртуальный музей</h2>
          <p>Скачайте Thesaurus, импортируйте его в Unity 6 и соберите первую интерактивную экспозицию без написания кода.</p>
        </div>
        <div className="download-actions">
          <Button href={PLUGIN_DOWNLOAD_URL} download={PLUGIN_DOWNLOAD_FILENAME}>Скачать плагин</Button>
          <Button to="/docs" variant="secondary">Читать документацию</Button>
        </div>
      </section>

      <section className="section docs-cta">
        <div>
          <SectionTitle
            eyebrow="Поддержка"
            title="Нужна помощь с настройкой?"
            text="В документации описаны установка, основные компоненты, настройка экспонатов, создание интерактивных зон и способы расширения Thesaurus."
          />
          <Button to="/docs">Перейти к документации</Button>
        </div>
      </section>
    </>
  );
}

export default HomePage;
