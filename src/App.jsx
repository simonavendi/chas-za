import { useState } from 'react'
import Onboarding from './screens/Onboarding'
import Home from './screens/Home'
import Offers from './screens/Offers'
import Schedule from './screens/Schedule'
import Notifications from './screens/Notifications'
import Profile from './screens/Profile'
import BottomNav from './components/BottomNav'

export default function App() {
  const [screen, setScreen] = useState('onboarding')

  const mainScreens = ['home', 'offers', 'schedule', 'notifications', 'profile']

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        {screen === 'onboarding' && <Onboarding onDone={() => setScreen('home')} />}
        {screen === 'home' && <Home />}
        {screen === 'offers' && <Offers />}
        {screen === 'schedule' && <Schedule />}
        {screen === 'notifications' && <Notifications />}
        {screen === 'profile' && <Profile />}
      </div>
      {mainScreens.includes(screen) && (
        <BottomNav active={screen} onChange={setScreen} />
      )}
    </div>
  )
}
