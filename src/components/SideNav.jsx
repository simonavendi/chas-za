export default function SideNav({ active, onChange, unreadCount }) {
  const items = [
    { id: 'home', label: 'Начало', icon: HomeIcon },
    { id: 'offers', label: 'Оферти', icon: OffersIcon },
    { id: 'schedule', label: 'График', icon: ScheduleIcon },
    { id: 'notifications', label: 'Съобщения', icon: BellIcon, badge: unreadCount },
    { id: 'profile', label: 'Профил', icon: ProfileIcon },
  ]

  return (
    <div className="w-56 bg-white border-r border-gray-100 flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-sm">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.5" />
              <path d="M9 5V9L12 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-bold text-navy-2 text-lg tracking-tight">Час За</span>
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {items.map(({ id, label, icon: Icon, badge }) => (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              active === id
                ? 'bg-primary/10 text-primary'
                : 'text-text-dark hover:bg-gray-50'
            }`}
          >
            <div className="relative shrink-0">
              <Icon active={active === id} />
              {badge > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-danger flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold leading-none">
                    {badge > 9 ? '9+' : badge}
                  </span>
                </span>
              )}
            </div>
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-gray-100 space-y-3">
        <div className="flex items-center gap-2">
          <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
            <path d="M5.5 0C3.01 0 1 2.01 1 4.5C1 7.88 5.5 13 5.5 13C5.5 13 10 7.88 10 4.5C10 2.01 7.99 0 5.5 0ZM5.5 6C4.67 6 4 5.33 4 4.5C4 3.67 4.67 3 5.5 3C6.33 3 7 3.67 7 4.5C7 5.33 6.33 6 5.5 6Z" fill="#6FDB45" />
          </svg>
          <span className="text-xs text-text-muted">Варна, България</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full overflow-hidden bg-gray-200 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xs font-medium text-text-dark truncate">Анелия Христова</span>
        </div>
      </div>
    </div>
  )
}

function HomeIcon({ active }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 9.5L12 3L21 9.5V20C21 20.6 20.6 21 20 21H15V15H9V21H4C3.4 21 3 20.6 3 20V9.5Z" fill={active ? '#6FDB45' : '#D1D1D1'} />
    </svg>
  )
}

function OffersIcon({ active }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M20.59 13.41L13.42 20.58C13.23 20.77 12.98 20.88 12.71 20.88C12.44 20.88 12.19 20.77 12 20.58L2 10.59V5C2 3.9 2.9 3 4 3H9.59C9.86 3 10.11 3.11 10.3 3.29L20.59 13.41Z" fill={active ? '#6FDB45' : '#D1D1D1'} />
      <circle cx="7" cy="7" r="1.5" fill="white" />
    </svg>
  )
}

function ScheduleIcon({ active }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="17" rx="2" fill={active ? '#6FDB45' : '#D1D1D1'} />
      <rect x="7" y="2" width="2" height="4" rx="1" fill={active ? '#5bc235' : '#aaa'} />
      <rect x="15" y="2" width="2" height="4" rx="1" fill={active ? '#5bc235' : '#aaa'} />
      <rect x="6" y="10" width="12" height="1.5" rx="0.75" fill="white" />
      <rect x="6" y="13" width="8" height="1.5" rx="0.75" fill="white" />
    </svg>
  )
}

function BellIcon({ active }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill={active ? '#6FDB45' : '#D1D1D1'} />
    </svg>
  )
}

function ProfileIcon({ active }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" fill={active ? '#6FDB45' : '#D1D1D1'} />
      <path d="M4 20C4 16.69 7.58 14 12 14C16.42 14 20 16.69 20 20H4Z" fill={active ? '#6FDB45' : '#D1D1D1'} />
    </svg>
  )
}
