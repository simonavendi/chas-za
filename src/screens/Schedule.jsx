import { useState } from 'react'

const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']
const MONTHS = ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември']

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year, month) {
  const day = new Date(year, month, 1).getDay()
  return day === 0 ? 6 : day - 1 // Monday start
}

const appointments = [
  {
    id: 1,
    date: '29 Април 14:00',
    business: 'Салон за маникюр',
    procedure: 'Маникюр с гел лак',
    duration: 'Приблизително 1 час',
    prepaid: true,
    location: 'ул. Цар Симеон I 45, Варна',
    day: 29,
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
  },
]

export default function Schedule() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selectedDay, setSelectedDay] = useState(today.getDate())
  const [selected, setSelected] = useState(appointments[0])

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)

  function prevMonth() {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }
  function nextMonth() {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  const apptDays = appointments.map(a => a.day)

  return (
    <div className="bg-bg-light min-h-full font-rubik">
      {/* Header */}
      <div className="bg-white px-5 pt-10 pb-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-light text-gray-700">9:41</span>
        </div>
        <h1 className="text-text-dark text-2xl font-bold">График</h1>
      </div>

      {/* Calendar */}
      <div className="bg-white mx-4 mt-3 rounded-2xl p-4 shadow-sm">
        {/* Month nav */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevMonth} className="p-1 text-text-dark">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 13L7 9L11 5" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="text-text-dark font-bold text-base">
            {MONTHS[month]} {year}
          </span>
          <button onClick={nextMonth} className="p-1 text-text-dark">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 5L11 9L7 13" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Day names */}
        <div className="grid grid-cols-7 mb-2">
          {DAYS.map(d => (
            <div key={d} className="text-center text-xs text-text-muted font-medium py-1">{d}</div>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7 gap-y-1">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`e-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1
            const isSelected = day === selectedDay
            const hasAppt = apptDays.includes(day)
            const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear()
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`relative flex flex-col items-center justify-center h-9 rounded-full text-sm font-medium transition-all ${
                  isSelected ? 'bg-primary text-white' : isToday ? 'border border-primary text-primary' : 'text-text-dark'
                }`}
              >
                {day}
                {hasAppt && !isSelected && (
                  <span className="absolute bottom-1 w-1 h-1 rounded-full bg-primary" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Appointment indicator */}
      <div className="mx-4 mt-3 flex items-center gap-2">
        <div className="bg-bg-blue rounded-xl px-3 py-2 flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="#6FDB45" strokeWidth="1.5" />
            <path d="M7 4V7L9 9" stroke="#6FDB45" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span className="text-xs text-gray-600 font-inter">Записан час</span>
          <span className="text-xs font-semibold text-primary">{selected?.date}</span>
        </div>
        <button className="ml-auto text-text-dark text-sm font-bold px-3 py-2 bg-white rounded-xl shadow-sm">
          Excel
        </button>
      </div>

      {/* Appointment details */}
      {selected && (
        <div className="mx-4 mt-3 bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-bold text-text-dark text-base">{selected.business}</h3>
              <p className="text-xs text-text-muted mt-0.5">{selected.date}</p>
            </div>
            {/* Google Calendar icon */}
            <div className="w-10 h-10 rounded-full bg-bg-blue flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="3" width="16" height="15" rx="2" fill="#4285F4" opacity="0.15" />
                <rect x="2" y="3" width="16" height="5" rx="2" fill="#4285F4" opacity="0.5" />
                <path d="M6 10H14M6 13H10" stroke="#4285F4" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="space-y-1.5 text-sm text-text-dark font-rubik">
            <p><span className="text-text-muted">Местоположение:</span> {selected.location}</p>
            <p><span className="text-text-muted">Записана процедура:</span> {selected.procedure}</p>
            <p><span className="text-text-muted">Времетраене:</span> {selected.duration}</p>
            <p>
              <span className="text-text-muted">Предплатено:</span>{' '}
              <span className={selected.prepaid ? 'text-primary font-semibold' : 'text-danger font-semibold'}>
                {selected.prepaid ? 'ДА' : 'НЕ'}
              </span>
            </p>
          </div>

          <div className="flex gap-2 mt-4">
            <button className="flex-1 py-2.5 rounded-xl border border-danger text-danger text-sm font-semibold">
              Откажи час
            </button>
            <button className="flex-1 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold">
              Пренасрочи
            </button>
          </div>
        </div>
      )}

      <div className="h-6" />
    </div>
  )
}
