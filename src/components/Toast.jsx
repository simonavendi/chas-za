import { useEffect } from 'react'
import { Ic } from './Icons'

export default function Toast({ msg, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="toast">
      <div className="toast-ic">{Ic.chk('#fff', 13)}</div>
      {msg}
    </div>
  )
}
