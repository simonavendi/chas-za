import { useState } from 'react'

const SERVICES = {
  'Зъболекар': [
    { id: 1, name: 'Профилактичен преглед', duration: '30 мин', price: '30 лв' },
    { id: 2, name: 'Избелване на зъби', duration: '60 мин', price: '150 лв' },
    { id: 3, name: 'Пломба', duration: '45 мин', price: '80 лв' },
    { id: 4, name: 'Почистване на зъбен камък', duration: '45 мин', price: '60 лв' },
  ],
  'Масажист': [
    { id: 1, name: 'Релакс масаж', duration: '60 мин', price: '60 лв' },
    { id: 2, name: 'Спортен масаж', duration: '45 мин', price: '50 лв' },
    { id: 3, name: 'Антицелулитен масаж', duration: '90 мин', price: '80 лв' },
    { id: 4, name: 'Масаж на гръб', duration: '30 мин', price: '40 лв' },
  ],
  'Фризьор': [
    { id: 1, name: 'Подстригване', duration: '30 мин', price: '25 лв' },
    { id: 2, name: 'Боядисване', duration: '120 мин', price: '80 лв' },
    { id: 3, name: 'Сешоар и оформяне', duration: '30 мин', price: '20 лв' },
    { id: 4, name: 'Кератинова терапия', duration: '150 мин', price: '120 лв' },
  ],
  'Козметик': [
    { id: 1, name: 'Почистване на лице', duration: '60 мин', price: '50 лв' },
    { id: 2, name: 'Маникюр с гел лак', duration: '60 мин', price: '35 лв' },
    { id: 3, name: 'Козметичен масаж на лице', duration: '30 мин', price: '40 лв' },
    { id: 4, name: 'Педикюр', duration: '60 мин', price: '40 лв' },
  ],
}

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '13:00', '13:30', '14:00', '14:30', '15:00',
  '15:30', '16:00', '16:30', '17:00', '17:30', '18:00',
]

const UNAVAILABLE = new Set(['09:30', '11:00', '14:00', '16:00'])

const MONTHS = ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември']
const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year, month) {
  const d = new Date(year, month, 1).getDay()
  return d === 0 ? 6 : d - 1
}

export default function Booking({ business, onSubmit, onDone, onClose }) {
  const [step, setStep] = useState(1)
  const [service, setService] = useState(null)
  const [selectedDay, setSelectedDay] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const today = new Date()
  const [calYear, setCalYear] = useState(today.getFullYear())
  const [calMonth, setCalMonth] = useState(today.getMonth())

  const services = SERVICES[business.category] || SERVICES['Козметик']
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
    const appointment = {
      id: Date.now(),
      date: `${selectedDay} ${MONTHS[calMonth]} ${selectedTime}`,
      business: business.name,
      businessImage: business.image,
      procedure: service.name,
      duration: `Приблизително ${service.duration}`,
      price: service.price,
      prepaid: false,
      location: 'Варна, България',
      day: selectedDay,
      month: calMonth,
      year: calYear,
    }
    onSubmit(appointment)
    setStep(5)
  }

  const stepLabels = ['', 'Избери услуга', 'Избери дата', 'Избери час', 'Потвърди']

  // Success screen
  if (step === 5) {
    return (
      <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center font-rubik px-8">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <circle cx="26" cy="26" r="24" fill="#6FDB45" />
            <path d="M15 26L22 33L37 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-text-dark text-2xl font-bold text-center mb-3">Часът е записан!</h2>
        <p className="text-text-muted text-sm text-center leading-relaxed mb-1">
          Вашият час при <strong className="text-text-dark">{business.name}</strong>
        </p>
        <p className="text-text-muted text-sm text-center leading-relaxed mb-2">
          за <strong className="text-text-dark">{service?.name}</strong>
        </p>
        <p className="text-primary font-bold text-lg mb-8">
          {selectedDay} {MONTHS[calMonth]} в {selectedTime}
        </p>
        <button
          onClick={onDone}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl text-base"
        >
          Виж в График
        </button>
        <button onClick={onClose} className="w-full py-3 text-text-muted text-sm font-medium mt-1">
          Затвори
        </button>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col font-rubik">
      {/* Header */}
      <div className="px-5 pt-10 pb-4 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={step === 1 ? onClose : () => setStep(s => s - 1)}
            className="p-2 -ml-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#2E3E5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <h1 className="text-text-dark font-bold text-base">{stepLabels[step]}</h1>
          <button onClick={onClose} className="p-2 -mr-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Business info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-200 shrink-0">
            <img src={business.image} alt={business.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-bold text-text-dark">{business.name}</p>
            <p className="text-xs text-text-muted">{business.category}</p>
          </div>
        </div>

        {/* Step indicators */}
        <div className="flex items-center">
          {[1, 2, 3, 4].map((s, i) => (
            <div key={s} className="flex items-center flex-1">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all ${
                s < step ? 'bg-primary text-white' : s === step ? 'bg-primary text-white' : 'bg-gray-100 text-text-muted'
              }`}>
                {s < step ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : s}
              </div>
              {i < 3 && <div className={`flex-1 h-0.5 mx-1 transition-all ${s < step ? 'bg-primary' : 'bg-gray-100'}`} />}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">

        {/* Step 1: Select service */}
        {step === 1 && (
          <div className="p-4 space-y-3">
            {services.map(svc => (
              <button
                key={svc.id}
                onClick={() => setService(svc)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                  service?.id === svc.id ? 'border-primary bg-primary/5' : 'border-gray-100 bg-white'
                }`}
              >
                <div className="text-left">
                  <p className="font-semibold text-sm text-text-dark">{svc.name}</p>
                  <p className="text-xs text-text-muted mt-0.5">{svc.duration}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary font-bold text-sm">{svc.price}</span>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    service?.id === svc.id ? 'border-primary bg-primary' : 'border-gray-300'
                  }`}>
                    {service?.id === svc.id && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Step 2: Select date */}
        {step === 2 && (
          <div className="p-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <button onClick={prevMonth} className="p-2 rounded-lg">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M11 13L7 9L11 5" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <span className="font-bold text-text-dark">{MONTHS[calMonth]} {calYear}</span>
                <button onClick={nextMonth} className="p-2 rounded-lg">
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
                      className={`flex items-center justify-center h-9 rounded-full text-sm font-medium transition-all ${
                        isPast ? 'text-gray-300 cursor-not-allowed' :
                        isSelected ? 'bg-primary text-white shadow-sm' :
                        'text-text-dark hover:bg-gray-100'
                      }`}
                    >
                      {day}
                    </button>
                  )
                })}
              </div>
            </div>
            {selectedDay && (
              <p className="text-center text-sm text-text-muted mt-3">
                Избрана дата: <span className="text-primary font-semibold">{selectedDay} {MONTHS[calMonth]} {calYear}</span>
              </p>
            )}
          </div>
        )}

        {/* Step 3: Select time */}
        {step === 3 && (
          <div className="p-4">
            <div className="grid grid-cols-3 gap-2">
              {TIME_SLOTS.map(time => {
                const unavail = UNAVAILABLE.has(time)
                const isSelected = time === selectedTime
                return (
                  <button
                    key={time}
                    onClick={() => !unavail && setSelectedTime(time)}
                    disabled={unavail}
                    className={`py-3 rounded-xl text-sm font-medium transition-all ${
                      unavail ? 'bg-gray-100 text-gray-400 cursor-not-allowed' :
                      isSelected ? 'bg-primary text-white shadow-sm' :
                      'bg-white text-text-dark border border-gray-100'
                    }`}
                  >
                    {time}
                    {unavail && <span className="block text-[9px]">Зает</span>}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="p-4">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-100">
              <SummaryRow label="Бизнес" value={business.name} />
              <SummaryRow label="Услуга" value={service?.name} />
              <SummaryRow label="Дата" value={`${selectedDay} ${MONTHS[calMonth]} ${calYear}`} />
              <SummaryRow label="Час" value={selectedTime} />
              <SummaryRow label="Времетраене" value={service?.duration} />
              <SummaryRow label="Цена" value={service?.price} highlight />
            </div>
            <div className="mt-4 p-3 bg-bg-blue rounded-xl">
              <p className="text-xs text-navy font-medium font-inter leading-relaxed">
                Ще получите потвърждение за записания час в раздел "Съобщения".
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 pb-8 pt-4 bg-white border-t border-gray-100 space-y-2">
        <button
          onClick={step === 4 ? handleConfirm : () => setStep(s => s + 1)}
          disabled={
            (step === 1 && !service) ||
            (step === 2 && !selectedDay) ||
            (step === 3 && !selectedTime)
          }
          className="w-full py-4 bg-primary text-white font-bold rounded-xl text-base disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
        >
          {step === 1 ? 'Продължи' : step === 2 ? 'Избери час' : step === 3 ? 'Прегледай' : 'Потвърди час'}
        </button>
        {step > 1 && (
          <button onClick={() => setStep(s => s - 1)} className="w-full py-3 text-text-muted text-sm font-medium">
            Назад
          </button>
        )}
      </div>
    </div>
  )
}

function SummaryRow({ label, value, highlight }) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <span className="text-sm text-text-muted">{label}</span>
      <span className={`text-sm font-semibold ${highlight ? 'text-primary' : 'text-text-dark'}`}>{value}</span>
    </div>
  )
}
