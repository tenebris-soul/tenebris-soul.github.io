import { docsSections } from '../data/docsData.js';

function DocsPage() {
  return (
    <section className="docs-layout">
      <aside className="docs-sidebar">
        <span className="eyebrow">Docs</span>
        <h1>Документация</h1>
        <nav aria-label="Разделы документации">
          {docsSections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.title}
            </a>
          ))}
        </nav>
      </aside>

      <div className="docs-content">
        {docsSections.map((section) => (
          <article className="docs-section" id={section.id} key={section.id}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {section.list && (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {section.example && (
              <div className="docs-example">
                <span>Пример</span>
                <code>{section.example}</code>
              </div>
            )}

            {section.table && (
              <div className="docs-table-wrap">
                <table className="docs-table">
                  <thead>
                    <tr>
                      {section.table.headers.map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row) => (
                      <tr key={row.join('-')}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section.note && (
              <div className="docs-note">
                <strong>Заметка</strong>
                <p>{section.note}</p>
              </div>
            )}

            {section.code && (
              <pre className="code-block">
                <code>{section.code}</code>
              </pre>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default DocsPage;
