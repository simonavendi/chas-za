import { useState } from 'react'
import Onboarding from './screens/Onboarding'
import Home from './screens/Home'
import Offers from './screens/Offers'
import Schedule from './screens/Schedule'
import Notifications from './screens/Notifications'
import Profile from './screens/Profile'
import Booking from './screens/Booking'
import BottomNav from './components/BottomNav'

const initialAppointments = [
  {
    id: 1,
    date: '29 Април 14:00',
    business: 'Салон за маникюр',
    procedure: 'Маникюр с гел лак',
    duration: 'Приблизително 1 час',
    prepaid: true,
    location: 'ул. Цар Симеон I 45, Варна',
    day: 29,
    month: 3,
    year: 2026,
  },
  {
    id: 2,
    date: '15 Февруари 10:30',
    business: 'Булдент',
    procedure: 'Профилактичен преглед',
    duration: 'Приблизително 30 мин',
    prepaid: false,
    location: 'ул. Дондуков 12, Варна',
    day: 15,
    month: 1,
    year: 2026,
  },
]

const initialNotifications = [
  {
    id: 1,
    name: 'Studio Lux',
    role: 'Масажист',
    text: 'Благодарим за посещението. Можете да оставите отзив за нас!',
    time: '8 фев',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    unread: 0,
    status: 'yellow',
  },
  {
    id: 2,
    name: 'Excel',
    role: 'Маникюр',
    text: 'Напомняме Ви, че имате записан час утре в 14:00.',
    time: '07:34 PM',
    avatar: null,
    initials: 'EX',
    unread: 2,
    status: 'green',
    highlight: true,
  },
  {
    id: 3,
    name: 'Георги Георгиев',
    role: 'Зъболекар',
    text: 'Потвърждаваме часа Ви от 7 на 15 февруари.',
    time: 'Вчера',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    unread: 0,
    status: 'green',
  },
  {
    id: 4,
    name: 'Natasha Hair',
    role: 'Фризьор',
    text: 'Съжаляваме да ви уведомим, че заявеният от Вас час е отменен.',
    time: 'Вчера',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80&h=80&fit=crop&crop=face',
    unread: 0,
    status: 'red',
  },
  {
    id: 5,
    name: 'Анелия Христова',
    role: 'Козметик',
    text: 'Благодарим за посещениято. Моля оставете отзив.',
    time: '8 фев',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face',
    unread: 0,
    status: 'yellow',
  },
]

export default function App() {
  const [screen, setScreen] = useState('onboarding')
  const [bookingBusiness, setBookingBusiness] = useState(null)
  const [favorites, setFavorites] = useState(new Set())
  const [appointments, setAppointments] = useState(initialAppointments)
  const [notifications, setNotifications] = useState(initialNotifications)

  const mainScreens = ['home', 'offers', 'schedule', 'notifications', 'profile']
  const unreadCount = notifications.reduce((sum, n) => sum + (n.unread || 0), 0)

  function toggleFavorite(id) {
    setFavorites(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function handleBook(business) {
    setBookingBusiness(business)
  }

  function handleBookingSubmit(appointment) {
    setAppointments(prev => [appointment, ...prev])
    const initials = appointment.business.slice(0, 2).toUpperCase()
    setNotifications(prev => [
      {
        id: Date.now(),
        name: appointment.business,
        role: 'Потвърждение',
        text: `Вашият час за ${appointment.procedure} е потвърден: ${appointment.date}.`,
        time: 'Сега',
        avatar: appointment.businessImage || null,
        initials: appointment.businessImage ? undefined : initials,
        unread: 1,
        status: 'green',
        highlight: true,
      },
      ...prev,
    ])
  }

  function handleBookingDone() {
    setBookingBusiness(null)
    setScreen('schedule')
  }

  function handleBookingClose() {
    setBookingBusiness(null)
  }

  function handleCancelAppointment(id) {
    setAppointments(prev => prev.filter(a => a.id !== id))
  }

  function handleRescheduleAppointment(id, updates) {
    setAppointments(prev =>
      prev.map(a => a.id === id ? { ...a, ...updates } : a)
    )
  }

  function handleMarkRead(id) {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, unread: 0, highlight: false } : n)
    )
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        {screen === 'onboarding' && <Onboarding onDone={() => setScreen('home')} />}
        {screen === 'home' && (
          <Home
            favorites={favorites}
            onFavorite={toggleFavorite}
            onBook={handleBook}
          />
        )}
        {screen === 'offers' && <Offers onBook={handleBook} />}
        {screen === 'schedule' && (
          <Schedule
            appointments={appointments}
            onCancel={handleCancelAppointment}
            onReschedule={handleRescheduleAppointment}
          />
        )}
        {screen === 'notifications' && (
          <Notifications
            notifications={notifications}
            onMarkRead={handleMarkRead}
          />
        )}
        {screen === 'profile' && <Profile />}
      </div>
      {mainScreens.includes(screen) && (
        <BottomNav active={screen} onChange={setScreen} unreadCount={unreadCount} />
      )}
      {bookingBusiness && (
        <Booking
          business={bookingBusiness}
          onSubmit={handleBookingSubmit}
          onDone={handleBookingDone}
          onClose={handleBookingClose}
        />
      )}
    </div>
  )
}
