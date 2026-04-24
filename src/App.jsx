import { useState } from 'react'
import Onboarding from './screens/Onboarding'
import Home from './screens/Home'
import Offers from './screens/Offers'
import Schedule from './screens/Schedule'
import Notifications from './screens/Notifications'
import Profile from './screens/Profile'
import Sidebar from './components/Sidebar'
import Toast from './components/Toast'

export default function App() {
  const [screen, setScreen] = useState('onboarding')
  const [page, setPage] = useState('biz')
  const [toast, setToast] = useState(null)

  const book = (biz, time) => setToast(`Успешно запазен час при ${biz} в ${time}!`)

  if (screen === 'onboarding') {
    return (
      <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <div style={{ width: 390, height: 700, background: 'white', borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,.2)', display: 'flex', flexDirection: 'column' }}>
          <Onboarding onDone={() => setScreen('main')} />
        </div>
      </div>
    )
  }

  return (
    <>
      <Sidebar pg={page} setPg={setPage} />
      <div className="main" key={page}>
        {page === 'biz' && <Home onBook={book} />}
        {page === 'off' && <Offers />}
        {page === 'sch' && <Schedule />}
        {page === 'msg' && <Notifications />}
        {page === 'pro' && <Profile />}
      </div>
      {toast && <Toast msg={toast} onDone={() => setToast(null)} />}
    </>
  )
}
