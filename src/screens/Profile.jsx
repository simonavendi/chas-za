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

const reviewsLeft = 20

export default function Profile() {
  return (
    <div className="bg-bg-light min-h-full font-rubik">

      {/* ── MOBILE layout ── */}
      <div className="md:hidden">
        <div className="bg-white">
          <div className="flex justify-between items-center px-5 pt-10 pb-2">
            <span className="text-sm font-light text-gray-700">9:41</span>
          </div>
          <ProfileHero />
        </div>
        <GoldProgress />
        <div className="mx-4 mt-4 bg-white rounded-2xl p-4 shadow-sm">
          <ReviewsList />
        </div>
        <div className="h-6" />
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden md:block">
        {/* Page header */}
        <div className="bg-white border-b border-gray-100 px-8 py-5">
          <h1 className="text-navy-2 text-2xl font-bold font-inter">Профил</h1>
          <p className="text-text-muted text-sm mt-0.5">Управлявай своя акаунт и отзиви</p>
        </div>

        <div className="px-8 py-6 max-w-4xl">
          {/* Top row: profile card + gold progress */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Profile card */}
            <div className="col-span-1 bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
              <div className="relative mb-3">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M10 2L12 4L5 11H3V9L10 2Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <h2 className="text-text-dark text-lg font-bold">Анелия Христова</h2>
              <div className="flex items-center gap-1 mt-1 mb-4">
                <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
                  <path d="M4.5 0C2.57 0 1 1.57 1 3.5C1 6.13 4.5 11 4.5 11C4.5 11 8 6.13 8 3.5C8 1.57 6.43 0 4.5 0Z" fill="#D1D1D1" />
                  <circle cx="4.5" cy="3.5" r="1.5" fill="white" />
                </svg>
                <span className="text-text-muted text-xs">Варна, България</span>
              </div>
              <div className="flex gap-3 w-full">
                <button className="flex-1 flex flex-col items-center gap-1 py-2 bg-bg-light rounded-xl">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="#D1D1D1" strokeWidth="1.5" />
                    <path d="M10 6V10L13 13" stroke="#D1D1D1" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-text-muted text-[9px] font-medium uppercase tracking-wider">SUPPORT</span>
                </button>
                <button className="flex-1 flex flex-col items-center gap-1 py-2 bg-bg-light rounded-xl">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7" stroke="#D1D1D1" strokeWidth="1.5" />
                    <line x1="7" y1="10" x2="13" y2="10" stroke="#D1D1D1" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="10" y1="7" x2="10" y2="13" stroke="#D1D1D1" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-text-muted text-[9px] font-medium uppercase tracking-wider">SETTINGS</span>
                </button>
              </div>
            </div>

            {/* Gold progress card */}
            <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-star text-3xl">★</span>
                  <div>
                    <h3 className="font-bold text-text-dark">Златно ниво</h3>
                    <p className="text-text-muted text-sm">Колекционирай отзиви за да достигнеш следващото ниво</p>
                  </div>
                </div>
                <div className="bg-bg-light rounded-xl p-4 mb-4">
                  <p className="text-text-dark text-sm leading-relaxed">
                    Още <strong>{reviewsLeft} отзива</strong> и ще достигнеш <strong>Златно ниво</strong>! Носи специални отстъпки и привилегии.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-text-muted mb-1.5">
                  <span>Текущо ниво</span>
                  <span>{reviewsLeft} отзива до Златно ниво</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-star rounded-full transition-all" style={{ width: '60%' }} />
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-text-muted">Сребърно</span>
                  <span className="text-star font-semibold">Златно ★</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-text-dark font-bold text-lg mb-4">Мои отзиви</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.map(r => (
                <div key={r.id} className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 shrink-0">
                      <img src={r.avatar} alt={r.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-dark">{r.author}</p>
                      <StarRating rating={r.rating} size="sm" />
                    </div>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProfileHero() {
  return (
    <div className="flex flex-col items-center pb-6 pt-4 relative">
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
        <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
          <path d="M4.5 0C2.57 0 1 1.57 1 3.5C1 6.13 4.5 11 4.5 11C4.5 11 8 6.13 8 3.5C8 1.57 6.43 0 4.5 0Z" fill="#D1D1D1" />
          <circle cx="4.5" cy="3.5" r="1.5" fill="white" />
        </svg>
        <span className="text-text-muted text-xs">Варна, България</span>
      </div>
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
  )
}

function GoldProgress() {
  return (
    <>
      <div className="mx-4 mt-3 bg-bg-light rounded-2xl px-4 py-3 flex items-center gap-3">
        <span className="text-star text-2xl">★</span>
        <p className="text-text-dark text-xs font-rubik flex-1 leading-relaxed">
          Още <strong>{reviewsLeft} отзива</strong> и ще достигнеш <strong>златно ниво</strong>! Носи специални отстъпки и привилегии!
        </p>
      </div>
      <div className="mx-4 mt-2">
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-star rounded-full" style={{ width: '60%' }} />
        </div>
        <div className="flex justify-between text-xs text-text-muted mt-1">
          <span>0</span>
          <span>20 отзива до следващо ниво</span>
        </div>
      </div>
    </>
  )
}

function ReviewsList() {
  return (
    <>
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
    </>
  )
}
