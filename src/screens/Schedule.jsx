import { useState } from 'react'
import { Ic } from '../components/Icons'

const APPTS = [
  { id: 1, svc: 'Маникюр', biz: 'Excel Beauty Center', time: '14:00', date: '29 Апр', day: 29, loc: 'ул. Цар Симеон I 15', st: 'confirmed' },
  { id: 2, svc: 'Преглед', biz: 'Д-р Иванов', time: '11:00', date: '15 Фев', day: 15, loc: 'ул. Дебър 22', st: 'pending' },
]

const ST_LABEL = { confirmed: 'Потвърден', pending: 'Изчакващ', cancelled: 'Отменен' }

function Cal({ appts, selDay, onSel }) {
  const days = []
  for (let i = 0; i < 4; i++) days.push(null)
  for (let i = 1; i <= 30; i++) days.push(i)
  const adays = appts.map(a => a.day)
  const wlbl = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД']

  return (
    <div className="cal-card">
      <div className="cal-hdr">
        <button className="cal-nav">{Ic.arL('var(--txt)', 12)}</button>
        <span className="cal-mo">Април 2022</span>
        <button className="cal-nav">{Ic.arR('var(--txt)', 12)}</button>
      </div>
      <div className="cal-wk-hdr">
        {wlbl.map((l, i) => <div key={l} className={`cal-wlbl${i >= 5 ? ' we' : ''}`}>{l}</div>)}
      </div>
      <div className="cal-grid">
        {days.map((d, i) => {
          const we = (i % 7) >= 5
          const hasAppt = adays.includes(d)
          const isSel = d === selDay
          return (
            <div key={i}
              className={['cday', d === null ? 'empty' : '', isSel ? 'sel' : '', hasAppt ? 'has' : '', we ? 'we' : ''].filter(Boolean).join(' ')}
              onClick={() => d && onSel(d)}>{d}</div>
          )
        })}
      </div>
    </div>
  )
}

export default function Schedule() {
  const [selDay, setSelDay] = useState(29)
  const dayAppts = APPTS.filter(a => a.day === selDay)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }} className="pg-enter">
      <div className="topbar">
        <span className="topbar-title">График</span>
      </div>

      <div className="pg">
        <div className="sch-lay">

          {/* Appointments section (top) */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--navy)' }}>Записани часове</span>
              <span style={{ fontSize: 13, color: 'var(--g2)', fontFamily: 'Inter,sans-serif' }}>
                {selDay} Април 2022
              </span>
            </div>
            {dayAppts.length > 0 ? (
              <div className="appt-row">
                {dayAppts.map(a => (
                  <div key={a.id} className={`appt-card ${a.st}`}>
                    <div className="appt-time">
                      <div className="appt-time-v">{a.time}</div>
                      <div className="appt-time-d">{a.date}</div>
                    </div>
                    <div className="appt-info">
                      <div className="appt-svc">{a.svc}</div>
                      <div className="appt-biz">{a.biz}</div>
                      <div className="appt-loc">📍 {a.loc}</div>
                    </div>
                    <div className={`status ${a.st}`}>{ST_LABEL[a.st]}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ background: 'var(--surf)', borderRadius: 'var(--r-md)', padding: '20px 24px', boxShadow: 'var(--sh)', display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: 'var(--g4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>📅</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--txt-dk)' }}>Няма записани часове</div>
                  <div style={{ fontSize: 12, color: 'var(--g2)', fontFamily: 'Inter,sans-serif', marginTop: 2 }}>Изберете ден с маркер от календара или запазете нов час</div>
                </div>
              </div>
            )}
          </div>

          {/* All upcoming — shown when no day-specific appts */}
          {dayAppts.length === 0 && (
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--txt)', marginBottom: 12 }}>Предстоящи часове</div>
              <div className="appt-row">
                {APPTS.map(a => (
                  <div key={a.id} className={`appt-card ${a.st}`}>
                    <div className="appt-time">
                      <div className="appt-time-v">{a.time}</div>
                      <div className="appt-time-d">{a.date}</div>
                    </div>
                    <div className="appt-info">
                      <div className="appt-svc">{a.svc}</div>
                      <div className="appt-biz">{a.biz}</div>
                      <div className="appt-loc">📍 {a.loc}</div>
                    </div>
                    <div className={`status ${a.st}`}>{ST_LABEL[a.st]}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full-width calendar */}
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--txt)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
              Календар
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginLeft: 'auto', fontSize: 12, color: 'var(--g2)', fontWeight: 400 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} /> Записан час
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--yellow)', display: 'inline-block' }} /> Чакащ
                </span>
              </div>
            </div>
            <Cal appts={APPTS} selDay={selDay} onSel={setSelDay} />
          </div>

        </div>
      </div>
    </div>
  )
}
