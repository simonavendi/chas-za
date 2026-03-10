import { useState } from 'react'
import BusinessCard from '../components/BusinessCard'

const businesses = [
  {
    id: 1,
    name: 'Булдент',
    category: 'Зъболекар',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop',
    tags: ['Свободни часове', 'Цена до 30лв', 'Близка локация'],
    reviews: 21,
    badge: 'Популярен избор',
  },
  {
    id: 2,
    name: 'Studio Lux',
    category: 'Масажист',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop',
    tags: ['Свободни часове', 'Близка локация'],
    reviews: 47,
    badge: null,
  },
  {
    id: 3,
    name: 'Natasha Hair',
    category: 'Фризьор',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
    tags: ['Цена до 50лв', 'Близка локация'],
    reviews: 33,
    badge: null,
  },
  {
    id: 4,
    name: 'Салон Елегант',
    category: 'Козметик',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop',
    tags: ['Свободни часове', 'Цена до 40лв'],
    reviews: 18,
    badge: 'Ново',
  },
]

const favorites = businesses.filter(b => b.reviews > 30)

export default function Home() {
  const [tab, setTab] = useState('all')

  const displayed = tab === 'all' ? businesses : favorites

  return (
    <div className="bg-bg-light min-h-full font-rubik">
      {/* Status bar */}
      <div className="bg-white flex justify-between items-center px-5 pt-10 pb-2">
        <span className="text-sm font-light text-gray-700">9:41</span>
        <div className="flex gap-1 items-center">
          <BarsIcon />
          <WifiIcon />
          <BatteryIcon />
        </div>
      </div>

      {/* Search bar */}
      <div className="bg-white px-4 pb-3">
        <div className="flex items-center bg-bg-light rounded-xl px-4 h-11 gap-3 border border-gray-100">
          <SearchIcon />
          <span className="text-text-muted text-sm">Търси бизнеси</span>
          <div className="ml-auto">
            <FilterIcon />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white px-4 pb-3">
        <div className="flex bg-bg-light rounded-full p-0.5">
          <button
            onClick={() => setTab('all')}
            className={`flex-1 py-2 rounded-full text-sm font-bold transition-all ${
              tab === 'all' ? 'bg-primary text-white' : 'text-text-dark'
            }`}
          >
            Общо
          </button>
          <button
            onClick={() => setTab('fav')}
            className={`flex-1 py-2 rounded-full text-sm font-bold transition-all ${
              tab === 'fav' ? 'bg-primary text-white' : 'text-text-dark'
            }`}
          >
            Любими
          </button>
        </div>
      </div>

      {/* Location */}
      <div className="px-4 py-2 bg-white flex items-center gap-1 border-b border-gray-100">
        <LocationIcon />
        <span className="text-sm font-medium font-inter text-navy">Варна, България</span>
        <ChevronIcon />
      </div>

      {/* Info banner */}
      <div className="mx-4 mt-3 bg-bg-blue rounded-xl p-3 flex items-start gap-3">
        <div className="mt-0.5">
          <InfoIcon />
        </div>
        <p className="text-navy text-xs font-medium font-inter flex-1 leading-relaxed">
          Можеш да промениш локацията си за да видиш обекти за друго място.
        </p>
        <button className="ml-1">
          <CloseIcon />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 py-4">
        <h1 className="text-navy-2 text-2xl font-bold font-inter leading-tight">
          Запази час онлайн за различните услуги, които ползваш!
        </h1>
      </div>

      {/* Business cards */}
      <div className="px-4 pb-4">
        {displayed.map(b => (
          <BusinessCard key={b.id} business={b} />
        ))}
      </div>
    </div>
  )
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="5" stroke="#C7CBCF" strokeWidth="1.5" />
      <line x1="11" y1="11" x2="15" y2="15" stroke="#C7CBCF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function FilterIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
      <line x1="0" y1="1" x2="16" y2="1" stroke="#C7CBCF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="6" x2="14" y2="6" stroke="#C7CBCF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="11" x2="12" y2="11" stroke="#C7CBCF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
      <path d="M5.5 0C3.01 0 1 2.01 1 4.5C1 7.88 5.5 13 5.5 13C5.5 13 10 7.88 10 4.5C10 2.01 7.99 0 5.5 0ZM5.5 6C4.67 6 4 5.33 4 4.5C4 3.67 4.67 3 5.5 3C6.33 3 7 3.67 7 4.5C7 5.33 6.33 6 5.5 6Z" fill="#6FDB45" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
      <path d="M3 4L7 7L3 10" stroke="#D1D1D1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-navy-2 flex items-center justify-center">
      <span className="text-white text-xs font-bold">i</span>
    </div>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M12 4L4 12M4 4L12 12" stroke="#2E3E5C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function BarsIcon() {
  return (
    <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
      <rect x="0" y="0" width="17" height="2" rx="1" fill="#2a2b2a" />
      <rect x="0" y="4.5" width="17" height="2" rx="1" fill="#2a2b2a" />
      <rect x="0" y="9" width="17" height="2" rx="1" fill="#2a2b2a" />
    </svg>
  )
}

function WifiIcon() {
  return (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
      <path d="M7.5 8.5C8.05 8.5 8.5 8.95 8.5 9.5C8.5 10.05 8.05 10.5 7.5 10.5C6.95 10.5 6.5 10.05 6.5 9.5C6.5 8.95 6.95 8.5 7.5 8.5Z" fill="#2a2b2a" />
      <path d="M4.5 6.5C5.5 5.5 6.5 5 7.5 5C8.5 5 9.5 5.5 10.5 6.5" stroke="#2a2b2a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M2 4C3.5 2.5 5.5 1.5 7.5 1.5C9.5 1.5 11.5 2.5 13 4" stroke="#2a2b2a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function BatteryIcon() {
  return (
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
      <rect x="0.5" y="0.5" width="19" height="11" rx="2.5" stroke="#2a2b2a" strokeWidth="1" />
      <rect x="2" y="2" width="14" height="8" rx="1.5" fill="#2a2b2a" />
      <path d="M21 4V8C22.1 7.5 22.1 4.5 21 4Z" fill="#2a2b2a" />
    </svg>
  )
}
