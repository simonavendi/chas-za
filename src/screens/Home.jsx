import { useState } from 'react'
import { Ic, Stars, PhImg } from '../components/Icons'

const BIZ = [
  { id: 1, name: 'Excel Beauty Center', cat: 'Маникюр & Педикюр',
    desc: 'В Excel Beauty Center ще откриете разнообразие от разкрасяващи услуги. Фризьорство и Колористика; Масаж; Козметик; Маникюр и Педикюр; Миглопластика.',
    img: '/assets/beauty-center.jpg', color: null, rating: 4.0, reviews: 21,
    tags: ['Свободни часове', 'Цена до 30лв', 'Близка локация'], badge: 'Популярен избор',
    loc: 'ул. Цар Симеон I 15, Варна',
    svcs: [{ n: 'Маникюр', p: '25лв', d: '60 мин' }, { n: 'Педикюр', p: '30лв', d: '75 мин' },
           { n: 'Гел лак', p: '35лв', d: '90 мин' }, { n: 'Миглопластика', p: '45лв', d: '120 мин' },
           { n: 'Фризьорство', p: '40лв', d: '60 мин' }], liked: false },
  { id: 2, name: 'Studio Lux', cat: 'Масаж & СПА',
    desc: 'Студио за масажи и спа процедури. Предлагаме различни видове масажи — релаксиращ, спортен, аромамасаж и лечебен масаж.',
    img: null, color: '#8B5CF6', rating: 4.8, reviews: 47,
    tags: ['Свободни часове', 'Близка локация'], badge: null,
    loc: 'бул. Княз Борис I 45, Варна',
    svcs: [{ n: 'Релаксиращ масаж', p: '50лв', d: '60 мин' }, { n: 'Спортен масаж', p: '60лв', d: '75 мин' },
           { n: 'СПА пакет', p: '120лв', d: '180 мин' }, { n: 'Аромамасаж', p: '55лв', d: '60 мин' }], liked: false },
  { id: 3, name: 'Natasha Hair', cat: 'Фризьорски салон',
    desc: 'Модерен фризьорски салон с опитни специалисти. Стрижки, боя за коса, кератиново изправяне и много повече.',
    img: null, color: '#F59E0B', rating: 4.5, reviews: 32,
    tags: ['Свободни часове', 'Цена до 30лв'], badge: null,
    loc: 'ул. Мусала 8, Варна',
    svcs: [{ n: 'Дамска прическа', p: '30лв', d: '60 мин' }, { n: 'Мъжка прическа', p: '15лв', d: '30 мин' },
           { n: 'Боя за коса', p: '80лв', d: '120 мин' }, { n: 'Кератиново изправяне', p: '150лв', d: '180 мин' }], liked: true },
  { id: 4, name: 'Д-р Иванов Зъболекар', cat: 'Зъболекарска практика',
    desc: 'Модерна зъболекарска практика с дигитален рентген и безболезнено лечение. Всички видове стоматологични услуги.',
    img: null, color: '#3B82F6', rating: 4.7, reviews: 89,
    tags: ['Свободни часове', 'Близка локация'], badge: null,
    loc: 'ул. Дебър 22, Варна',
    svcs: [{ n: 'Преглед', p: '30лв', d: '30 мин' }, { n: 'Почистване', p: '60лв', d: '60 мин' },
           { n: 'Пломба', p: '80лв', d: '60 мин' }, { n: 'Избелване', p: '200лв', d: '90 мин' }], liked: false },
  { id: 5, name: 'Козметик Добромира', cat: 'Козметик',
    desc: 'Индивидуални козметични процедури за всеки тип кожа. Дълбоко почистване, лечебни маски и анти-ейджинг терапии.',
    img: null, color: '#EC4899', rating: 5.0, reviews: 28,
    tags: ['Свободни часове', 'Цена до 30лв', 'Близка локация'], badge: null,
    loc: 'ул. Г. Бенковски 3, Варна',
    svcs: [{ n: 'Дълбоко почистване', p: '55лв', d: '90 мин' }, { n: 'Хидратираща маска', p: '40лв', d: '60 мин' },
           { n: 'Анти-ейджинг', p: '90лв', d: '90 мин' }, { n: 'Мезотерапия', p: '120лв', d: '60 мин' }], liked: true },
  { id: 6, name: 'Milicent Studio', cat: 'Фризьорски салон',
    desc: 'Уютен фризьорски салон с персонализиран подход. Стрижки по последна мода и боядисване с луксозни продукти.',
    img: null, color: '#10B981', rating: 3.5, reviews: 12,
    tags: ['Близка локация'], badge: null,
    loc: 'ул. 8-ми приморски полк 1, Варна',
    svcs: [{ n: 'Дамска прическа', p: '35лв', d: '60 мин' }, { n: 'Боя за коса', p: '90лв', d: '120 мин' }], liked: false },
]

const SLOTS_ALL = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
const SLOTS_TAKEN = ['10:00', '12:00', '15:00', '18:00']

function BizCard({ b, onClick }) {
  const [lk, setLk] = useState(b.liked)
  return (
    <div className="card" onClick={onClick}>
      <div className="card-img">
        {b.img ? <img src={b.img} alt={b.name} /> : <PhImg color={b.color} name={b.name} />}
        <div className="card-ov" />
        {b.badge && <div className="card-bdg">{b.badge}</div>}
        <div className="card-acts" onClick={e => e.stopPropagation()}>
          <button className="card-act" onClick={() => setLk(v => !v)}>{Ic.hrt(lk, 15)}</button>
          <button className="card-act">{Ic.bkm(14)}</button>
        </div>
        <div className="card-rat">{Ic.str(true, 13)}<span>{b.rating.toFixed(1)}</span></div>
      </div>
      <div className="card-body">
        <div className="card-name">{b.name}</div>
        <div className="card-cat">{b.cat}</div>
        <div className="card-desc">{b.desc}</div>
        <div className="tags">
          {b.tags.map(t => <span key={t} className="tag">{t}</span>)}
          <span className="tag-rev">{b.reviews} Отзиви</span>
        </div>
      </div>
    </div>
  )
}

function Detail({ b, onClose, onBook }) {
  const [sel, setSel] = useState(null)
  return (
    <>
      <div className="det-ov" onClick={onClose} />
      <div className="det-pn">
        <div className="det-hero">
          {b.img ? <img src={b.img} alt={b.name} /> : <PhImg color={b.color} name={b.name} />}
          <div className="det-hero-ov" />
          <button className="det-back" onClick={onClose}>{Ic.arL('#333', 16)}</button>
          <div className="det-hi">
            <div className="det-hname">{b.name}</div>
            <div className="det-hloc">{Ic.loc('rgba(255,255,255,.7)', 11)}&nbsp;{b.loc}</div>
          </div>
        </div>
        <div className="det-body">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 14, borderBottom: '1px solid var(--g4)', marginBottom: 18 }}>
            <Stars r={b.rating} s={13} />
            <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy)' }}>{b.rating.toFixed(1)}</span>
            <span style={{ fontSize: 12, color: 'var(--g2)' }}>({b.reviews} отзива)</span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 5 }}>
              {b.tags.map(t => (
                <span key={t} style={{ padding: '3px 9px', borderRadius: 100, fontSize: 11, fontWeight: 500, background: 'var(--green-lt)', color: 'var(--green)' }}>{t}</span>
              ))}
            </div>
          </div>
          <div className="det-sec">
            <div className="det-sec-t">За нас</div>
            <p style={{ fontSize: 13, color: 'var(--txt)', lineHeight: 1.65, fontFamily: 'Inter,sans-serif' }}>{b.desc}</p>
          </div>
          <div className="det-sec">
            <div className="det-sec-t">Услуги</div>
            {b.svcs.map(s => (
              <div key={s.n} className="svc-row">
                <span className="svc-name">{s.n}</span>
                <span className="svc-dur">{Ic.clk('var(--g2)', 11)}&nbsp;{s.d}</span>
                <span className="svc-price">{s.p}</span>
              </div>
            ))}
          </div>
          <div className="det-sec">
            <div className="det-sec-t">Свободни часове — днес</div>
            <div className="slots">
              {SLOTS_ALL.map(sl => {
                const tk = SLOTS_TAKEN.includes(sl)
                return (
                  <div key={sl} className={`slot${tk ? ' taken' : ''}${sel === sl ? ' sel' : ''}`}
                    onClick={() => !tk && setSel(sl)}>{sl}</div>
                )
              })}
            </div>
          </div>
          <button className="book-btn" disabled={!sel}
            onClick={() => { if (sel) { onBook(b.name, sel); onClose() } }}>
            {Ic.chk('#fff', 16)}&nbsp;{sel ? `Запази час в ${sel}` : 'Избери свободен час'}
          </button>
        </div>
      </div>
    </>
  )
}

export default function Home({ onBook }) {
  const [tab, setTab] = useState('all')
  const [q, setQ] = useState('')
  const [det, setDet] = useState(null)
  const [ban, setBan] = useState(true)

  const list = BIZ.filter(b =>
    (tab === 'all' || b.liked) &&
    (!q || b.name.toLowerCase().includes(q.toLowerCase()) || b.cat.toLowerCase().includes(q.toLowerCase()))
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }} className="pg-enter">
      <div className="topbar">
        <div className="search-wrap">
          <span className="search-ico">{Ic.srch('var(--green)', 14)}</span>
          <input className="search-in" placeholder="Търси бизнеси..." value={q} onChange={e => setQ(e.target.value)} />
        </div>
        <div className="filt-btn">{Ic.flt('var(--green)', 14)}</div>
        <div className="topbar-r">
          <span className="topbar-loc">{Ic.loc('var(--green)', 12)}&nbsp;Варна, България</span>
        </div>
      </div>

      <div className="pg">
        <div className="ph">
          <div className="ph-ttl">Запази час онлайн</div>
          <div className="ph-sub">за различните услуги, които ползваш!</div>
        </div>

        <div className="tabs">
          <button className={`tab${tab === 'all' ? ' on' : ''}`} onClick={() => setTab('all')}>Общо</button>
          <button className={`tab${tab === 'liked' ? ' on' : ''}`} onClick={() => setTab('liked')}>♥ Любими</button>
        </div>

        {ban && (
          <div className="banner">
            <div style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {Ic.loc('#fff', 14)}
            </div>
            <p>Можеш да промениш локацията си за да видиш обекти за друго място.</p>
            <span className="banner-close" onClick={() => setBan(false)}>✕</span>
          </div>
        )}

        {list.length > 0
          ? <div className="biz-grid">{list.map(b => <BizCard key={b.id} b={b} onClick={() => setDet(b)} />)}</div>
          : <div className="empty">
              <div className="empty-ic">🔍</div>
              <div className="empty-ttl">Няма намерени резултати</div>
              <div className="empty-sub">Опитайте с различни ключови думи</div>
            </div>
        }
      </div>

      {det && <Detail b={det} onClose={() => setDet(null)} onBook={onBook} />}
    </div>
  )
}
