export const Ic = {
  biz: (c, s=20) => <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><rect x="1" y="6" width="18" height="13" rx="2" stroke={c} strokeWidth="1.5"/><path d="M5 6V4a5 5 0 0110 0v2" stroke={c} strokeWidth="1.5"/><path d="M7 13h6M10 10v6" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  pct: (c, s=20) => <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><circle cx="7" cy="7" r="2.5" stroke={c} strokeWidth="1.5"/><circle cx="13" cy="13" r="2.5" stroke={c} strokeWidth="1.5"/><path d="M4 16L16 4" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  cal: (c, s=20) => <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="14" rx="2" stroke={c} strokeWidth="1.5"/><path d="M2 9h16M6 2v4M14 2v4" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  bll: (c, s=20) => <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><path d="M10 2a6 6 0 00-6 6v3l-1.5 2.5h15L16 11V8a6 6 0 00-6-6z" stroke={c} strokeWidth="1.5"/><path d="M8 15a2 2 0 004 0" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  usr: (c, s=20) => <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><circle cx="10" cy="6.5" r="3.5" stroke={c} strokeWidth="1.5"/><path d="M2.5 17.5c0-4 3.4-6 7.5-6s7.5 2 7.5 6" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  srch: (c, s=15) => <svg width={s} height={s} viewBox="0 0 15 15" fill="none"><circle cx="6.5" cy="6.5" r="4.5" stroke={c} strokeWidth="1.4"/><path d="M10 10l3.5 3.5" stroke={c} strokeWidth="1.4" strokeLinecap="round"/></svg>,
  flt: (c, s=15) => <svg width={s} height={s} viewBox="0 0 15 15" fill="none"><path d="M2 4h11M4 8h7M6 12h3" stroke={c} strokeWidth="1.4" strokeLinecap="round"/></svg>,
  loc: (c, s=13) => <svg width={s} height={s} viewBox="0 0 13 13" fill="none"><path d="M6.5 1A4.5 4.5 0 002 5.5c0 3.5 4.5 6.5 4.5 6.5S11 9 11 5.5A4.5 4.5 0 006.5 1z" stroke={c} strokeWidth="1.3"/><circle cx="6.5" cy="5.5" r="1.5" stroke={c} strokeWidth="1.3"/></svg>,
  str: (f=true, s=12) => <svg width={s} height={s} viewBox="0 0 12 12" fill={f ? '#F8C40E' : 'none'}><path d="M6 1l1.24 3.55H11L8.38 6.59l1.24 3.55L6 8.1l-3.62 2.04L3.62 6.59 1 4.55h3.76L6 1z" stroke="#F8C40E" strokeWidth={f ? 0 : 1.1}/></svg>,
  hrt: (f=false, s=14) => <svg width={s} height={s} viewBox="0 0 14 14" fill={f ? '#E15554' : 'none'}><path d="M7 12.5L1.5 7A3.5 3.5 0 016.99 2.5L7 2.5A3.5 3.5 0 0112.5 7L7 12.5z" stroke="#E15554" strokeWidth="1.3"/></svg>,
  bkm: (s=14) => <svg width={s} height={s} viewBox="0 0 12 14" fill="#F8C40E"><path d="M1 1h10v12L6 9.5 1 13V1z"/></svg>,
  arL: (c, s=14) => <svg width={s} height={s} viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  arR: (c, s=14) => <svg width={s} height={s} viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  snd: (c, s=15) => <svg width={s} height={s} viewBox="0 0 15 15" fill="none"><path d="M13 2L2 6.5l4.5 2 2 4.5L13 2z" stroke={c} strokeWidth="1.3" strokeLinejoin="round"/></svg>,
  clk: (c, s=13) => <svg width={s} height={s} viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke={c} strokeWidth="1.3"/><path d="M6.5 4v2.5L8.5 8" stroke={c} strokeWidth="1.3" strokeLinecap="round"/></svg>,
  shd: (c, s=13) => <svg width={s} height={s} viewBox="0 0 13 13" fill="none"><path d="M6.5 1L11 3v4c0 2.5-2 4.5-4.5 5C4 11.5 2 9.5 2 7V3L6.5 1z" stroke={c} strokeWidth="1.3"/></svg>,
  sup: (c, s=17) => <svg width={s} height={s} viewBox="0 0 17 17" fill="none"><circle cx="8.5" cy="8.5" r="7" stroke={c} strokeWidth="1.4"/><path d="M8.5 5.5a2 2 0 110 4M8.5 12.5v.5" stroke={c} strokeWidth="1.4" strokeLinecap="round"/></svg>,
  set: (c, s=17) => <svg width={s} height={s} viewBox="0 0 17 17" fill="none"><circle cx="8.5" cy="8.5" r="3" stroke={c} strokeWidth="1.4"/><path d="M8.5 1v2M8.5 14v2M1 8.5h2M14 8.5h2M3 3l1.5 1.5M12.5 12.5l1.5 1.5M3 14l1.5-1.5M12.5 4.5L14 3" stroke={c} strokeWidth="1.4" strokeLinecap="round"/></svg>,
  chk: (c, s=15) => <svg width={s} height={s} viewBox="0 0 15 15" fill="none"><path d="M3 7.5l3.5 3.5 6-6.5" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  plus: (c, s=14) => <svg width={s} height={s} viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>,
  dwn: (c, s=10) => <svg width={s} height={s} viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 7 8 3.5" stroke={c} strokeWidth="1.4" strokeLinecap="round"/></svg>,
}

export function Stars({ r, s = 12 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map(i => <span key={i}>{Ic.str(i <= Math.round(r), s)}</span>)}
    </div>
  )
}

export function PhImg({ color, name, style = {} }) {
  return (
    <div className="ph-img" style={{ background: color || '#6FDB45', ...style }}>
      <span style={{ fontSize: 56, fontWeight: 700, color: 'rgba(255,255,255,.18)', fontFamily: 'Rubik,sans-serif' }}>
        {name?.[0]}
      </span>
    </div>
  )
}
