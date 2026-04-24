import { useState } from 'react'
import Home from './screens/Home'
import Offers from './screens/Offers'
import Schedule from './screens/Schedule'
import Notifications from './screens/Notifications'
import Profile from './screens/Profile'
import Sidebar from './components/Sidebar'
import Toast from './components/Toast'

export default function App() {
  const [page, setPage] = useState('biz')
  const [toast, setToast] = useState(null)

  const book = (biz, time) => setToast(`Успешно запазен час при ${biz} в ${time}!`)

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
