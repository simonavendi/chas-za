import StarRating from '../components/StarRating'

const reviews = [
  {
    id: 1,
    author: 'Анелия Христова',
    rating: 5,
    text: 'Страхотна услуга! Много доволна от резултата.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: 2,
    author: 'Анелия Христова',
    rating: 3,
    text: 'Добра услуга, но малко закъсня.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: 3,
    author: 'Анелия Христова',
    rating: 5,
    text: 'Перфектно изпълнение, препоръчвам!',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face',
  },
]

export default function Profile() {
  const reviewsLeft = 20

  return (
    <div className="bg-bg-light min-h-full font-rubik">
      {/* Header bg */}
      <div className="bg-white">
        {/* Status bar */}
        <div className="flex justify-between items-center px-5 pt-10 pb-2">
          <span className="text-sm font-light text-gray-700">9:41</span>
        </div>

        {/* Profile hero */}
        <div className="flex flex-col items-center pb-6 pt-4 relative">
          {/* Avatar */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10 2L12 4L5 11H3V9L10 2Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <h2 className="text-text-dark text-xl font-bold mt-3">Анелия Христова</h2>
          <div className="flex items-center gap-1 mt-1">
            <svg width="9" height="11" viewBox="0 0 9 11" fill="none"><path d="M4.5 0C2.57 0 1 1.57 1 3.5C1 6.13 4.5 11 4.5 11C4.5 11 8 6.13 8 3.5C8 1.57 6.43 0 4.5 0Z" fill="#D1D1D1" /><circle cx="4.5" cy="3.5" r="1.5" fill="white" /></svg>
            <span className="text-text-muted text-xs">Варна, България</span>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 mt-4">
            <div className="flex flex-col items-center gap-1">
              <button className="w-10 h-10 bg-bg-light rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="#D1D1D1" strokeWidth="1.5" />
                  <path d="M10 6V10L13 13" stroke="#D1D1D1" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              <span className="text-text-muted text-[8px] font-medium uppercase tracking-wider">SUPPORT</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <button className="w-10 h-10 bg-bg-light rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7" stroke="#D1D1D1" strokeWidth="1.5" />
                  <line x1="7" y1="10" x2="13" y2="10" stroke="#D1D1D1" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="10" y1="7" x2="10" y2="13" stroke="#D1D1D1" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              <span className="text-text-muted text-[8px] font-medium uppercase tracking-wider">SETTINGS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gold level progress */}
      <div className="mx-4 mt-3 bg-bg-light rounded-2xl px-4 py-3 flex items-center gap-3">
        <span className="text-star text-2xl">★</span>
        <p className="text-text-dark text-xs font-rubik flex-1 leading-relaxed">
          Още <strong>{reviewsLeft} отзива</strong> и ще достигнеш <strong>златно ниво</strong>! Златно ниво ти носи специални отстъпки и привилегии!
        </p>
        <svg width="5" height="5" viewBox="0 0 5 5" fill="none">
          <circle cx="2.5" cy="2.5" r="2.5" fill="#D1D1D1" />
        </svg>
      </div>

      {/* Progress bar */}
      <div className="mx-4 mt-2">
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-star rounded-full" style={{ width: '60%' }} />
        </div>
        <div className="flex justify-between text-xs text-text-muted mt-1">
          <span>0</span>
          <span>20 отзива до следващо ниво</span>
        </div>
      </div>

      {/* Reviews section */}
      <div className="mx-4 mt-4 bg-white rounded-2xl p-4 shadow-sm">
        <h3 className="text-text-dark font-bold text-base mb-3">Отзиви</h3>
        <div className="space-y-4">
          {reviews.map(r => (
            <div key={r.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                <img src={r.avatar} alt={r.author} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-text-dark">{r.author}</span>
                  <StarRating rating={r.rating} size="sm" />
                </div>
                <p className="text-xs text-text-muted mt-1">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-6" />
    </div>
  )
}
