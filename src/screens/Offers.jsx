import BusinessCard from '../components/BusinessCard'

const offers = [
  {
    id: 5,
    name: 'Булдент',
    category: 'Зъболекар',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop',
    tags: ['−30% отстъпка', 'Свободни часове', 'Близка локация'],
    reviews: 21,
    badge: 'Специална оферта',
  },
  {
    id: 6,
    name: 'Studio Lux',
    category: 'Масажист',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop',
    tags: ['−20% масаж', 'Близка локация'],
    reviews: 47,
    badge: 'Само днес',
  },
  {
    id: 7,
    name: 'Натали Козметика',
    category: 'Козметик',
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=300&fit=crop',
    tags: ['−15% лечебни процедури', 'Свободни часове'],
    reviews: 29,
    badge: 'Топ оферта',
  },
  {
    id: 8,
    name: 'Natasha Hair',
    category: 'Фризьор',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
    tags: ['−25% боядисване', 'Близка локация'],
    reviews: 33,
    badge: 'Ограничена оферта',
  },
]

export default function Offers({ onBook }) {
  return (
    <div className="bg-bg-light min-h-full font-rubik">

      {/* ── MOBILE header ── */}
      <div className="md:hidden">
        <div className="bg-white flex justify-between items-center px-5 pt-10 pb-2">
          <span className="text-sm font-light text-gray-700">9:41</span>
          <div className="flex gap-1 items-center">
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
              <rect x="0" y="0" width="17" height="2" rx="1" fill="#2a2b2a" />
              <rect x="0" y="4.5" width="17" height="2" rx="1" fill="#2a2b2a" />
              <rect x="0" y="9" width="17" height="2" rx="1" fill="#2a2b2a" />
            </svg>
          </div>
        </div>
        <div className="bg-white px-4 pb-3">
          <div className="flex items-center bg-bg-light rounded-xl px-4 h-11 gap-3 border border-gray-100">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="#C7CBCF" strokeWidth="1.5" />
              <line x1="11" y1="11" x2="15" y2="15" stroke="#C7CBCF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-text-muted text-sm">Търси оферти</span>
          </div>
        </div>
        <div className="bg-white px-4 pb-3">
          <div className="inline-flex bg-primary rounded-full px-5 py-2">
            <span className="text-white text-sm font-bold">Специални оферти</span>
          </div>
        </div>
        <div className="px-4 py-2 bg-white flex items-center gap-1 border-b border-gray-100">
          <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
            <path d="M5.5 0C3.01 0 1 2.01 1 4.5C1 7.88 5.5 13 5.5 13C5.5 13 10 7.88 10 4.5C10 2.01 7.99 0 5.5 0ZM5.5 6C4.67 6 4 5.33 4 4.5C4 3.67 4.67 3 5.5 3C6.33 3 7 3.67 7 4.5C7 5.33 6.33 6 5.5 6Z" fill="#6FDB45" />
          </svg>
          <span className="text-sm font-medium font-inter text-navy">Варна, България</span>
        </div>
        <div className="mx-4 mt-3 bg-bg-blue rounded-xl p-3 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-navy-2 flex items-center justify-center mt-0.5 shrink-0">
            <span className="text-white text-xs font-bold">i</span>
          </div>
          <p className="text-navy text-xs font-medium font-inter flex-1 leading-relaxed">
            Специалните оферти се обновяват ежедневно. Не пропускай изгодните цени!
          </p>
        </div>
        <div className="px-4 py-4">
          <h1 className="text-navy-2 text-2xl font-bold font-inter leading-tight">
            Специално подбрани оферти на промоционални за теб цени!
          </h1>
        </div>
      </div>

      {/* ── DESKTOP header ── */}
      <div className="hidden md:block bg-white border-b border-gray-100 px-8 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-navy-2 text-2xl font-bold font-inter">Специални оферти</h1>
            <p className="text-text-muted text-sm mt-0.5">Промоционални цени, обновявани ежедневно</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">
              {offers.length} активни оферти
            </span>
          </div>
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="px-4 md:px-8 pb-8 md:pt-6">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {offers.map(b => (
            <BusinessCard key={b.id} business={b} onBook={onBook} />
          ))}
        </div>
      </div>
    </div>
  )
}
