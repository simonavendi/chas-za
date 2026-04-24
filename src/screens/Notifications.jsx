import { useState, useEffect, useRef } from 'react'
import { Ic } from '../components/Icons'

const NOTIFS = [
  { id: 1, biz: 'Excel Beauty Center', svc: 'Маникюр',
    msg: 'Напомняме Ви, че имате записан час утре в 14:00ч. Очакваме Ви!', time: '07:34', unread: 2,
    img: '/assets/avatar3.jpg', clr: '#6FDB45', ini: 'EX' },
  { id: 2, biz: 'Д-р Иванов', svc: 'Зъболекар',
    msg: 'Потвърждаваме часа Ви от 7 на 15 февруари. Пристигнете 5 мин. по-рано.', time: '14:15', unread: 0,
    img: '/assets/avatar4.jpg', clr: '#3B82F6', ini: 'ДИ' },
  { id: 3, biz: 'Natasha Hair', svc: 'Фризьор',
    msg: 'Съжаляваме да Ви уведомим, че заявеният час беше отменен. Моля запазете нов.', time: 'Вчера', unread: 0,
    img: '/assets/avatar5.jpg', clr: '#F59E0B', ini: 'НХ' },
  { id: 4, biz: 'Козметик Добромира', svc: 'Козметик',
    msg: 'Благодарим за посещениято. Моля оставете отзив за нашата услуга.', time: '8 фев', unread: 0,
    img: '/assets/avatar6.jpg', clr: '#EC4899', ini: 'КД' },
  { id: 5, biz: 'Studio Lux', svc: 'Масажист',
    msg: 'Благодарим за посещението. Можете да оставите отзив и да споделите опита си.', time: '8 фев', unread: 0,
    img: '/assets/avatar1.jpg', clr: '#8B5CF6', ini: 'СЛ' },
]

export default function Notifications() {
  const [act, setAct] = useState(null)
  const [msgs, setMsgs] = useState(() => {
    const m = {}
    NOTIFS.forEach(n => { m[n.id] = [{ from: 'biz', txt: n.msg, time: n.time }] })
    return m
  })
  const [draft, setDraft] = useState('')
  const bubRef = useRef(null)

  const send = () => {
    if (!draft.trim() || !act) return
    setMsgs(p => ({ ...p, [act]: [...(p[act] || []), { from: 'me', txt: draft, time: 'Сега' }] }))
    setDraft('')
  }

  useEffect(() => {
    if (bubRef.current) bubRef.current.scrollTop = bubRef.current.scrollHeight
  }, [msgs, act])

  const curNotif = NOTIFS.find(n => n.id === act)
  const curMsgs = msgs[act] || []

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }} className="pg-enter">
      <div className="topbar">
        <span className="topbar-title">Съобщения</span>
        <div style={{ marginLeft: 'auto', width: 22, height: 22, borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          {Ic.plus('#fff', 12)}
        </div>
      </div>

      <div className="msg-lay">
        {/* Conversation list */}
        <div className="msg-lst">
          <div className="msg-lst-hdr">Разговори</div>
          {NOTIFS.map(n => (
            <div key={n.id} className={`msg-it${act === n.id ? ' on' : ''}${n.unread > 0 ? ' unread' : ''}`} onClick={() => setAct(n.id)}>
              {n.img
                ? <div className="msg-ava"><img src={n.img} alt={n.biz} /></div>
                : <div className="msg-ava-ph" style={{ background: n.clr }}>{n.ini}</div>}
              <div className="msg-ic">
                <div className="msg-it-top">
                  <span className="msg-it-name">{n.biz}</span>
                  <span className="msg-it-time">{n.time}</span>
                </div>
                <div className="msg-it-svc">{n.svc}</div>
                <div className="msg-it-prev">{n.msg}</div>
              </div>
              {n.unread > 0 && <div className="msg-nbadge">{n.unread}</div>}
            </div>
          ))}
        </div>

        {/* Chat panel */}
        <div className="msg-det">
          {curNotif ? (
            <>
              <div className="msg-det-hdr">
                {curNotif.img
                  ? <div className="msg-ava"><img src={curNotif.img} alt={curNotif.biz} /></div>
                  : <div className="msg-ava-ph" style={{ background: curNotif.clr, width: 40, height: 40 }}>{curNotif.ini}</div>}
                <div>
                  <div className="msg-det-name">{curNotif.biz}</div>
                  <div className="msg-det-svc">{curNotif.svc}</div>
                </div>
              </div>
              <div className="msg-bubbles" ref={bubRef}>
                {curMsgs.map((m, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: m.from === 'me' ? 'flex-end' : 'flex-start' }}>
                    <div className={`bub ${m.from === 'me' ? 'tx' : 'rx'}`}>
                      {m.txt}
                      <div className="bub-time">{m.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="msg-bar">
                <input className="msg-in" placeholder="Напишете съобщение..."
                  value={draft} onChange={e => setDraft(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && send()} />
                <button className="msg-send" onClick={send}>{Ic.snd('#fff', 14)}</button>
              </div>
            </>
          ) : (
            <div className="msg-empty">
              <div style={{ fontSize: 42, marginBottom: 8 }}>💬</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--txt-dk)' }}>Изберете разговор</div>
              <div style={{ fontSize: 13, color: 'var(--g2)', fontFamily: 'Inter,sans-serif', marginTop: 3 }}>Кликнете на бизнес от списъка</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
