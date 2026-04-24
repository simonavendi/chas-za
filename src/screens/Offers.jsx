import { PhImg } from '../components/Icons'

const OFFERS = [
  { id: 1, biz: 'Excel Beauty Center', svc: 'Маникюр', img: '/assets/beauty-center.jpg', clr: null,
    disc: '-30%', pNew: '17.50лв', pOld: '25лв', val: 'Валидно до 28 Февруари 2022' },
  { id: 2, biz: 'Studio Lux', svc: 'СПА пакет', img: null, clr: '#8B5CF6',
    disc: '-20%', pNew: '96лв', pOld: '120лв', val: 'Валидно до 15 Февруари 2022' },
  { id: 3, biz: 'Natasha Hair', svc: 'Боя за коса', img: null, clr: '#F59E0B',
    disc: '-15%', pNew: '68лв', pOld: '80лв', val: 'Валидно до 28 Февруари 2022' },
  { id: 4, biz: 'Козметик Добромира', svc: 'Дълбоко почистване', img: null, clr: '#EC4899',
    disc: '-25%', pNew: '41лв', pOld: '55лв', val: 'Валидно до 7 Март 2022' },
]

export default function Offers() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }} className="pg-enter">
      <div className="topbar">
        <span className="topbar-title">Специални оферти</span>
      </div>

      <div className="pg">
        <div className="offer-hero">
          <div className="offer-hero-lbl">Ексклузивно за теб</div>
          <div className="offer-hero-ttl">Специално подбрани оферти на промоционални за теб цени!</div>
        </div>

        <div className="off-grid">
          {OFFERS.map(o => (
            <div key={o.id} className="off-card">
              <div className="off-img">
                {o.img ? <img src={o.img} alt={o.biz} /> : <PhImg color={o.clr} name={o.biz} />}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(0,0,0,.1),rgba(0,0,0,.4))' }} />
                <div className="off-disc">{o.disc}</div>
              </div>
              <div className="off-body">
                <div className="off-name">{o.biz}</div>
                <div className="off-svc">{o.svc}</div>
                <div className="off-prices">
                  <span className="off-new">{o.pNew}</span>
                  <span className="off-old">{o.pOld}</span>
                </div>
                <div className="off-val">{o.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
