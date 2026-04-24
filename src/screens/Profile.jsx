import { Ic, Stars } from '../components/Icons'

const REVIEWS = [
  { img: '/assets/avatar1.jpg', from: 'Анелия', to: 'Excel', svc: 'Маникюр', r: 5, date: '8 фев',
    txt: 'Много съм доволна! Бях при Дарина! Изключителна маникюристка с голям избор от материали!' },
  { img: '/assets/avatar1.jpg', from: 'Анелия', to: 'Милисент', svc: 'Фризьор', r: 3, date: '1 ян',
    txt: 'Не съм доволна. Чаках доста преди да бъда приета и ме потстрига прекалено късо!' },
  { img: '/assets/avatar1.jpg', from: 'Анелия', to: 'Добромира', svc: 'Козметик', r: 5, date: '6 дек',
    txt: 'Много съм доволна! Изключителна козметичка с голям избор от продукти!' },
]

export default function Profile() {
  const r = 48, c = 2 * Math.PI * r, pct = 0.8

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }} className="pg-enter">
      <div className="topbar">
        <span className="topbar-title">Профил</span>
      </div>

      <div className="pg">
        <div className="prof-lay">
          <div className="prof-card">
            <div className="prof-tip">
              {Ic.shd('var(--yellow)', 13)}
              <span className="prof-tip-txt">
                Още <strong>20 отзива</strong> и ще достигнеш <strong>Златно ниво</strong>! Ниво с привилегии и отстъпки!
              </span>
            </div>
            <div className="prof-top">
              <div className="prof-ava-w">
                <svg style={{ position: 'absolute', inset: -6, width: 'calc(100% + 12px)', height: 'calc(100% + 12px)' }} viewBox="0 0 112 112">
                  <circle cx="56" cy="56" r="52" fill="none" stroke="var(--g3)" strokeWidth="4" />
                  <circle cx="56" cy="56" r="52" fill="none" stroke="var(--yellow)" strokeWidth="4"
                    strokeDasharray={`${2 * Math.PI * 52 * pct} ${2 * Math.PI * 52 * (1 - pct)}`}
                    strokeDashoffset={2 * Math.PI * 52 * 0.25} strokeLinecap="round" />
                </svg>
                <div className="prof-ava"><img src="/assets/avatar1.jpg" alt="Анелия" /></div>
                <div className="prof-pct">80%</div>
              </div>
              <div className="prof-name">Анелия Христова</div>
              <div className="prof-city">{Ic.loc('var(--g2)', 11)}&nbsp;Варна, България</div>
              <div className="prof-lvl">{Ic.shd('var(--g2)', 11)}&nbsp;Сребро</div>
              <a className="prof-link">Научи повече за нивата и привилегиите →</a>
            </div>
            <div className="prof-stats">
              <div className="prof-stat"><div className="prof-stat-v">20/40</div><div className="prof-stat-l">Отзива</div></div>
              <div className="prof-stat"><div className="prof-stat-v">12</div><div className="prof-stat-l">Часа</div></div>
              <div className="prof-stat"><div className="prof-stat-v">3</div><div className="prof-stat-l">Любими</div></div>
            </div>
            <div className="prof-acts">
              <div className="prof-act">
                <div className="prof-act-ic">{Ic.sup('var(--g2)', 17)}</div>
                <span className="prof-act-l">Поддръжка</span>
              </div>
              <div className="prof-act">
                <div className="prof-act-ic">{Ic.set('var(--g2)', 17)}</div>
                <span className="prof-act-l">Настройки</span>
              </div>
            </div>
          </div>

          <div>
            <div className="rev-card">
              <div className="rev-ttl">Отзиви</div>
              {REVIEWS.map((rv, i) => (
                <div key={i} className="rev-it">
                  <div className="rev-top">
                    <div className="rev-ava"><img src={rv.img} alt={rv.from} /></div>
                    <div className="rev-meta">
                      <div className="rev-who">{rv.from} <span style={{ color: 'var(--g2)' }}>▸</span> <span className="rev-to">{rv.to}</span></div>
                      <div className="rev-svc">{rv.svc}</div>
                      <div className="rev-stars">
                        <Stars r={rv.r} s={12} />
                        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--navy)', marginLeft: 5 }}>{rv.r}.0</span>
                      </div>
                    </div>
                    <div className="rev-date">{rv.date}</div>
                  </div>
                  <div className="rev-txt">{rv.txt}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
