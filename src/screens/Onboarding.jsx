import { useState } from 'react'

const slides = [
  {
    title: '"Час За"',
    text: 'Знаем, че ежедневието ти е много забързано, затова ще ти обясним за "Час За" много бързо!',
    illustration: <CoffeeIllustration />,
    btnLabel: 'Старт',
  },
  {
    title: 'Планирай лесно',
    text: 'С "Час За" можеш да планираш бъдещите си ангажименти бързо и лесно.',
    illustration: <ReadingIllustration />,
    btnLabel: 'Напред',
  },
  {
    title: 'Намери специалист',
    text: 'Открий стотици специалисти около теб — фризьори, зъболекари, козметици и още!',
    illustration: <SearchIllustration />,
    btnLabel: 'Напред',
  },
  {
    title: 'Готов си!',
    text: 'Запази своя час онлайн за минути. Без чакане на телефона. Без стрес.',
    illustration: <DoneIllustration />,
    btnLabel: 'Нека започнем!',
  },
]

export default function Onboarding({ onDone }) {
  const [step, setStep] = useState(0)
  const slide = slides[step]

  function next() {
    if (step < slides.length - 1) setStep(step + 1)
    else onDone()
  }

  return (
    <div className="flex flex-col h-full bg-white font-rubik">
      {/* Skip */}
      <div className="flex justify-end px-6 pt-12">
        <button onClick={onDone} className="text-primary text-base font-normal">
          Пропусни
        </button>
      </div>

      {/* Illustration */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="w-64 h-56 flex items-center justify-center mb-8">
          {slide.illustration}
        </div>

        {/* Dots */}
        <div className="flex gap-2 mb-8">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === step ? 'w-6 bg-primary' : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Text */}
        <p className="text-primary text-xl font-normal text-center leading-relaxed">
          {slide.text}
        </p>
      </div>

      {/* Button */}
      <div className="px-10 pb-16 flex flex-col items-center gap-4">
        <button
          onClick={next}
          className="w-full bg-primary text-white text-xl font-semibold py-5 rounded-2xl"
        >
          {slide.btnLabel}
        </button>
      </div>
    </div>
  )
}

function CoffeeIllustration() {
  return (
    <svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Body */}
      <ellipse cx="110" cy="160" rx="80" ry="18" fill="#6FDB45" opacity="0.15" />
      {/* Cup */}
      <rect x="70" y="100" width="80" height="60" rx="10" fill="#6FDB45" />
      <rect x="75" y="105" width="70" height="50" rx="8" fill="#5bc235" />
      {/* Handle */}
      <path d="M150 115 Q175 115 175 135 Q175 155 150 155" stroke="#6FDB45" strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Coffee */}
      <ellipse cx="110" cy="118" rx="28" ry="8" fill="#3d2b1f" opacity="0.8" />
      {/* Steam */}
      <path d="M95 90 Q98 80 95 70" stroke="#6FDB45" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M110 85 Q113 75 110 65" stroke="#6FDB45" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M125 90 Q128 80 125 70" stroke="#6FDB45" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Accent dot */}
      <circle cx="55" cy="80" r="12" fill="#FF5678" opacity="0.8" />
      <circle cx="170" cy="120" r="8" fill="#FF5678" opacity="0.5" />
    </svg>
  )
}

function ReadingIllustration() {
  return (
    <svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="110" cy="175" rx="85" ry="15" fill="#6FDB45" opacity="0.12" />
      {/* Person body */}
      <ellipse cx="110" cy="150" rx="40" ry="30" fill="#6FDB45" />
      {/* Head */}
      <circle cx="110" cy="100" r="28" fill="#fdbcb4" />
      {/* Hair */}
      <ellipse cx="110" cy="80" rx="28" ry="14" fill="#3d2b1f" />
      {/* Book */}
      <rect x="55" y="125" width="110" height="70" rx="6" fill="white" opacity="0.9" />
      <rect x="55" y="125" width="55" height="70" rx="6" fill="#6FDB45" opacity="0.3" />
      <line x1="110" y1="125" x2="110" y2="195" stroke="#6FDB45" strokeWidth="2" />
      {/* Lines on book */}
      <rect x="65" y="145" width="35" height="4" rx="2" fill="#6FDB45" opacity="0.5" />
      <rect x="65" y="155" width="30" height="4" rx="2" fill="#6FDB45" opacity="0.5" />
      <rect x="65" y="165" width="35" height="4" rx="2" fill="#6FDB45" opacity="0.5" />
      <rect x="120" y="145" width="35" height="4" rx="2" fill="#aaa" opacity="0.5" />
      <rect x="120" y="155" width="28" height="4" rx="2" fill="#aaa" opacity="0.5" />
      {/* Accent */}
      <circle cx="50" cy="95" r="14" fill="#FF5678" opacity="0.7" />
    </svg>
  )
}

function SearchIllustration() {
  return (
    <svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="110" cy="180" rx="85" ry="14" fill="#6FDB45" opacity="0.12" />
      {/* Map pin */}
      <path d="M110 40 C85 40 65 60 65 85 C65 115 110 165 110 165 C110 165 155 115 155 85 C155 60 135 40 110 40Z" fill="#6FDB45" />
      <circle cx="110" cy="85" r="22" fill="white" />
      {/* Star inside */}
      <text x="110" y="92" textAnchor="middle" fontSize="22" fill="#6FDB45">★</text>
      {/* Magnifier */}
      <circle cx="160" cy="155" r="22" stroke="#FF5678" strokeWidth="5" fill="none" />
      <line x1="176" y1="171" x2="195" y2="190" stroke="#FF5678" strokeWidth="5" strokeLinecap="round" />
      {/* Dots */}
      <circle cx="50" cy="60" r="8" fill="#6FDB45" opacity="0.4" />
      <circle cx="170" cy="60" r="5" fill="#FF5678" opacity="0.5" />
    </svg>
  )
}

function DoneIllustration() {
  return (
    <svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="110" cy="180" rx="85" ry="14" fill="#6FDB45" opacity="0.12" />
      {/* Circle */}
      <circle cx="110" cy="100" r="70" fill="#6FDB45" opacity="0.15" />
      <circle cx="110" cy="100" r="55" fill="#6FDB45" opacity="0.2" />
      <circle cx="110" cy="100" r="42" fill="#6FDB45" />
      {/* Checkmark */}
      <path d="M87 100 L103 116 L135 84" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Decorative dots */}
      <circle cx="50" cy="55" r="10" fill="#FF5678" opacity="0.7" />
      <circle cx="170" cy="145" r="7" fill="#FF5678" opacity="0.5" />
      <circle cx="180" cy="65" r="5" fill="#6FDB45" opacity="0.5" />
      <circle cx="40" cy="145" r="6" fill="#6FDB45" opacity="0.4" />
    </svg>
  )
}
