import { useState } from 'react'

const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']
const MONTHS = ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември']

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '13:00', '13:30', '14:00', '14:30', '15:00',
  '15:30', '16:00', '16:30', '17:00', '17:30', '18:00',
]

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year, month) {
  const day = new Date(year, month, 1).getDay()
  return day === 0 ? 6 : day - 1
}

function exportCSV(appointments) {
  const header = 'Бизнес,Процедура,Дата,Времетраене,Предплатено,Местоположение'
  const rows = appointments.map(a =>
    [a.business, a.procedure, a.date, a.duration, a.prepaid ? 'ДА' : 'НЕ', a.location].join(',')
  )
  const csv = [header, ...rows].join('\n')
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'appointments.csv'
  link.click()
  URL.revokeObjectURL(url)
}

export default function Schedule({ appointments, onCancel, onReschedule }) {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selectedDay, setSelectedDay] = useState(today.getDate())
  const [cancelConfirmId, setCancelConfirmId] = useState(null)
  const [rescheduleAppt, setRescheduleAppt] = useState(null)

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

  const apptDays = appointments
    .filter(a => a.month === month && a.year === year)
    .map(a => a.day)

  const dayAppointments = appointments.filter(
    a => a.day === selectedDay && a.month === month && a.year === year
  )

  const selectedAppt = dayAppointments[0] || null

  function handleCancel(id) {
    onCancel(id)
    setCancelConfirmId(null)
    setSelectedDay(today.getDate())
  }

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
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevMonth} className="p-1">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 13L7 9L11 5" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="text-text-dark font-bold text-base">{MONTHS[month]} {year}</span>
          <button onClick={nextMonth} className="p-1">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 5L11 9L7 13" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-7 mb-2">
          {DAYS.map(d => (
            <div key={d} className="text-center text-xs text-text-muted font-medium py-1">{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-1">
          {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
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

      {/* Appointment indicator row */}
      <div className="mx-4 mt-3 flex items-center gap-2">
        <div className="bg-bg-blue rounded-xl px-3 py-2 flex items-center gap-2 flex-1 min-w-0">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="#6FDB45" strokeWidth="1.5" />
            <path d="M7 4V7L9 9" stroke="#6FDB45" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          {selectedAppt ? (
            <span className="text-xs font-semibold text-primary truncate">{selectedAppt.date}</span>
          ) : (
            <span className="text-xs text-gray-400">Няма час за {selectedDay} {MONTHS[month]}</span>
          )}
        </div>
        <button
          onClick={() => exportCSV(appointments)}
          className="text-text-dark text-sm font-bold px-3 py-2 bg-white rounded-xl shadow-sm shrink-0"
        >
          Excel
        </button>
      </div>

      {/* Appointment details */}
      {selectedAppt ? (
        <div className="mx-4 mt-3 bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-bold text-text-dark text-base">{selectedAppt.business}</h3>
              <p className="text-xs text-text-muted mt-0.5">{selectedAppt.date}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-bg-blue flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="3" width="16" height="15" rx="2" fill="#4285F4" opacity="0.15" />
                <rect x="2" y="3" width="16" height="5" rx="2" fill="#4285F4" opacity="0.5" />
                <path d="M6 10H14M6 13H10" stroke="#4285F4" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="space-y-1.5 text-sm text-text-dark font-rubik">
            <p><span className="text-text-muted">Местоположение:</span> {selectedAppt.location}</p>
            <p><span className="text-text-muted">Записана процедура:</span> {selectedAppt.procedure}</p>
            <p><span className="text-text-muted">Времетраене:</span> {selectedAppt.duration}</p>
            <p>
              <span className="text-text-muted">Предплатено:</span>{' '}
              <span className={selectedAppt.prepaid ? 'text-primary font-semibold' : 'text-danger font-semibold'}>
                {selectedAppt.prepaid ? 'ДА' : 'НЕ'}
              </span>
            </p>
          </div>

          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setCancelConfirmId(selectedAppt.id)}
              className="flex-1 py-2.5 rounded-xl border border-danger text-danger text-sm font-semibold"
            >
              Откажи час
            </button>
            <button
              onClick={() => setRescheduleAppt(selectedAppt)}
              className="flex-1 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold"
            >
              Пренасрочи
            </button>
          </div>
        </div>
      ) : (
        <div className="mx-4 mt-3 bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mb-3 opacity-30">
            <rect x="4" y="6" width="32" height="29" rx="3" stroke="#4A4A4A" strokeWidth="1.5" />
            <line x1="4" y1="14" x2="36" y2="14" stroke="#4A4A4A" strokeWidth="1.5" />
            <rect x="12" y="3" width="3" height="6" rx="1.5" fill="#4A4A4A" />
            <rect x="25" y="3" width="3" height="6" rx="1.5" fill="#4A4A4A" />
            <line x1="11" y1="22" x2="29" y2="22" stroke="#4A4A4A" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="11" y1="28" x2="22" y2="28" stroke="#4A4A4A" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <p className="text-text-muted text-sm text-center">Няма записани часове за тази дата</p>
        </div>
      )}

      {/* All upcoming appointments list */}
      {appointments.length > 0 && (
        <div className="mx-4 mt-4 mb-6">
          <h2 className="text-text-dark font-bold text-sm mb-2">Всички предстоящи часове</h2>
          <div className="space-y-2">
            {appointments.map(a => (
              <div key={a.id} className="bg-white rounded-xl px-4 py-3 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-text-dark">{a.business}</p>
                  <p className="text-xs text-text-muted mt-0.5">{a.date}</p>
                </div>
                <button
                  onClick={() => { setMonth(a.month); setYear(a.year); setSelectedDay(a.day) }}
                  className="text-xs text-primary font-semibold"
                >
                  Виж
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="h-6" />

      {/* Cancel confirmation modal */}
      {cancelConfirmId && (
        <div className="fixed inset-0 z-40 flex items-end justify-center" onClick={() => setCancelConfirmId(null)}>
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="relative bg-white rounded-t-3xl w-full max-w-sm px-6 pt-6 pb-10 z-50"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-6" />
            <h3 className="text-text-dark font-bold text-lg text-center mb-2">Откажи час</h3>
            <p className="text-text-muted text-sm text-center mb-6">
              Сигурни ли сте, че искате да откажете този час? Действието не може да бъде отменено.
            </p>
            <button
              onClick={() => handleCancel(cancelConfirmId)}
              className="w-full py-3.5 bg-danger text-white font-bold rounded-xl mb-3"
            >
              Да, откажи час
            </button>
            <button
              onClick={() => setCancelConfirmId(null)}
              className="w-full py-3 text-text-muted text-sm font-medium"
            >
              Назад
            </button>
          </div>
        </div>
      )}

      {/* Reschedule modal */}
      {rescheduleAppt && (
        <RescheduleModal
          appointment={rescheduleAppt}
          onConfirm={(updates) => {
            onReschedule(rescheduleAppt.id, updates)
            setRescheduleAppt(null)
          }}
          onClose={() => setRescheduleAppt(null)}
        />
      )}
    </div>
  )
}

function RescheduleModal({ appointment, onConfirm, onClose }) {
  const today = new Date()
  const [calYear, setCalYear] = useState(today.getFullYear())
  const [calMonth, setCalMonth] = useState(today.getMonth())
  const [selectedDay, setSelectedDay] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const daysInMonth = getDaysInMonth(calYear, calMonth)
  const firstDay = getFirstDayOfMonth(calYear, calMonth)

  function prevMonth() {
    if (calMonth === 0) { setCalMonth(11); setCalYear(y => y - 1) }
    else setCalMonth(m => m - 1)
  }
  function nextMonth() {
    if (calMonth === 11) { setCalMonth(0); setCalYear(y => y + 1) }
    else setCalMonth(m => m + 1)
  }

  function handleConfirm() {
    onConfirm({
      date: `${selectedDay} ${MONTHS[calMonth]} ${selectedTime}`,
      day: selectedDay,
      month: calMonth,
      year: calYear,
    })
  }

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative bg-white rounded-t-3xl w-full max-w-sm z-50 max-h-[85vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white px-6 pt-4 pb-3 border-b border-gray-100">
          <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4" />
          <h3 className="text-text-dark font-bold text-lg text-center">Пренасрочи час</h3>
          <p className="text-text-muted text-xs text-center mt-1">{appointment.business} — {appointment.procedure}</p>
        </div>

        <div className="px-4 pt-4">
          {/* Calendar */}
          <div className="bg-bg-light rounded-2xl p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <button onClick={prevMonth} className="p-1">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M11 13L7 9L11 5" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="font-bold text-text-dark text-sm">{MONTHS[calMonth]} {calYear}</span>
              <button onClick={nextMonth} className="p-1">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M7 5L11 9L7 13" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-7 mb-1">
              {DAYS.map(d => (
                <div key={d} className="text-center text-[10px] text-text-muted font-medium py-0.5">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-y-1">
              {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1
                const isPast = new Date(calYear, calMonth, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate())
                const isSelected = day === selectedDay
                return (
                  <button
                    key={day}
                    onClick={() => !isPast && setSelectedDay(day)}
                    disabled={isPast}
                    className={`flex items-center justify-center h-8 rounded-full text-xs font-medium transition-all ${
                      isPast ? 'text-gray-300 cursor-not-allowed' :
                      isSelected ? 'bg-primary text-white' :
                      'text-text-dark'
                    }`}
                  >
                    {day}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Time slots */}
          {selectedDay && (
            <div className="mb-4">
              <p className="text-sm font-semibold text-text-dark mb-2">Избери час</p>
              <div className="grid grid-cols-4 gap-1.5">
                {TIME_SLOTS.map(time => {
                  const isSelected = time === selectedTime
                  return (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 rounded-lg text-xs font-medium transition-all ${
                        isSelected ? 'bg-primary text-white' : 'bg-bg-light text-text-dark'
                      }`}
                    >
                      {time}
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        <div className="px-4 pb-8 pt-2 space-y-2">
          <button
            onClick={handleConfirm}
            disabled={!selectedDay || !selectedTime}
            className="w-full py-3.5 bg-primary text-white font-bold rounded-xl disabled:opacity-40"
          >
            Потвърди новия час
          </button>
          <button onClick={onClose} className="w-full py-3 text-text-muted text-sm font-medium">
            Назад
          </button>
        </div>
      </div>
    </div>
  )
}
