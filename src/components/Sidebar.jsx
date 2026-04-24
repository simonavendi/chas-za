import { Ic } from './Icons'

const NAV = [
  { id: 'biz', lbl: 'Бизнеси',   icon: (c) => Ic.biz(c, 18) },
  { id: 'off', lbl: 'Оферти',    icon: (c) => Ic.pct(c, 18) },
  { id: 'sch', lbl: 'График',    icon: (c) => Ic.cal(c, 18) },
  { id: 'msg', lbl: 'Съобщения', icon: (c) => Ic.bll(c, 18), badge: 2 },
  { id: 'pro', lbl: 'Профил',    icon: (c) => Ic.usr(c, 18) },
]

export default function Sidebar({ pg, setPg }) {
  return (
    <div className="sb">
      <div className="sb-logo">
        <div className="sb-logo-mark">{Ic.clk('#fff', 17)}</div>
        <span className="sb-logo-txt">Час<em> За</em></span>
      </div>

      <div className="sb-loc">
        {Ic.loc('var(--green)', 13)}
        <span>Варна, България</span>
        <span className="sb-loc-caret">{Ic.dwn('var(--g2)', 9)}</span>
      </div>

      <nav className="sb-nav">
        {NAV.map(it => {
          const on = pg === it.id
          return (
            <div key={it.id} className={`nav-it${on ? ' on' : ''}`} onClick={() => setPg(it.id)}>
              <div className="nav-ic">{it.icon(on ? '#fff' : 'var(--g2)')}</div>
              <span>{it.lbl}</span>
              {it.badge && !on && <div className="nav-badge">{it.badge}</div>}
            </div>
          )
        })}
      </nav>

      <div className="sb-user" onClick={() => setPg('pro')} title="Към профила">
        <div className="sb-ava"><img src="/assets/avatar1.jpg" alt="Анелия" /></div>
        <div className="sb-ui">
          <div className="sb-uname">Анелия Христова</div>
          <div className="sb-ulvl">🥈 Сребро</div>
        </div>
        <div style={{ color: 'var(--g2)', flexShrink: 0 }}>{Ic.arR('var(--g2)', 12)}</div>
      </div>
    </div>
  )
}
