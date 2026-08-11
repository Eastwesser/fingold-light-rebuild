import { FG_NEWS } from '../../../data/newsData';
import { useNewsToggle } from '../../../hooks/useNewsToggle';

function isExternal(url: string) {
  return url.startsWith('http');
}

function linkProps(url: string) {
  return isExternal(url) ? { target: '_blank', rel: 'noopener' } : {};
}

/**
 * Новости с динамической загрузкой (fn-*) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 4172-4366.
 */
function News() {
  const { expanded, toggle } = useNewsToggle();
  const [featured, ...top] = FG_NEWS.slice(0, 3);
  const archive = FG_NEWS.slice(3);

  return (
    <div id="fgb-news">
      <section className={`fn-section${expanded ? ' is-expanded' : ''}`}>
        <div className="fn-inner">
          <div className="fn-head">
            <div>
              <p className="fn-kicker">Новости компании</p>
              <h2 className="fn-heading">
                ФИНГОЛД в <span>медиа</span>
              </h2>
            </div>
            <button className="fn-all" type="button" aria-expanded={expanded} onClick={toggle}>
              {expanded ? 'Свернуть' : 'Все новости'}
            </button>
          </div>

          {/* Top 3 cards */}
          <div className="fn-grid">
            <article
              className="fn-card fn-card--dark"
              style={{
                backgroundImage: `linear-gradient(90deg,rgba(11,20,29,.88),rgba(11,20,29,.26)),url('${featured.image.replace(/'/g, '%27')}')`,
              }}
            >
              <div className="fn-card-body">
                <div className="fn-tag">{featured.tag}</div>
                <h3>{featured.title}</h3>
                <p>{featured.description}</p>
                <a className="fn-link" href={featured.url} {...linkProps(featured.url)}>
                  Читать далее
                </a>
              </div>
              <span className="fn-card-arrow">›</span>
            </article>

            {top.map((item) => (
              <article className="fn-card" key={item.url + item.title}>
                <div
                  className="fn-card-img"
                  style={{ backgroundImage: `url('${item.image.replace(/'/g, '%27')}')` }}
                ></div>
                <div className="fn-card-body">
                  <div className="fn-tag">{item.tag}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a className="fn-link" href={item.url} {...linkProps(item.url)}>
                    Читать далее
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Archive */}
          <div className="fn-archive">
            {archive.map((item) => (
              <a
                className="fn-arc-card"
                href={item.url || '#'}
                key={item.url + item.title}
                {...linkProps(item.url || '')}
              >
                <div
                  className="fn-arc-img"
                  style={{ backgroundImage: `url('${item.image.replace(/'/g, '%27')}')` }}
                ></div>
                <div className="fn-arc-body">
                  <div className="fn-tag">{item.tag || 'Медиа'}</div>
                  <h3>{item.title}</h3>
                  {item.description && <p>{item.description}</p>}
                  <span className="fn-link">Читать далее</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default News;
