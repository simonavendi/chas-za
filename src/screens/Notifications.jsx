const messages = [
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

const statusColors = {
  yellow: '#F7C40E',
  green: '#6FDB45',
  red: '#E15554',
}

export default function Notifications() {
  return (
    <div className="bg-bg-light min-h-full font-rubik">
      {/* Header */}
      <div className="bg-white px-5 pt-10 pb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-light text-gray-700">9:41</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <h1 className="text-text-dark text-2xl font-bold">Съобщения</h1>
          <div className="relative">
            <button className="w-10 h-10 rounded-full bg-danger flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="7" width="14" height="2" rx="1" fill="white" />
                <rect x="7" y="1" width="2" height="14" rx="1" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Message list */}
      <div className="px-4 mt-3 space-y-2">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
              msg.highlight ? 'bg-bg-green-light' : 'bg-white'
            }`}
          >
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                {msg.avatar ? (
                  <img src={msg.avatar} alt={msg.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    {msg.initials}
                  </div>
                )}
              </div>
              {/* Status dot */}
              <span
                className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white"
                style={{ backgroundColor: statusColors[msg.status] }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-medium text-sm text-text-dark truncate">{msg.name}</span>
                <span className="text-xs text-text-muted ml-2 shrink-0">{msg.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium" style={{ color: '#6FDB45' }}>{msg.role}</span>
              </div>
              <p className="text-xs text-text-muted truncate mt-0.5">{msg.text}</p>
            </div>

            {/* Unread badge */}
            {msg.unread > 0 && (
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-medium">{msg.unread}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="h-6" />
    </div>
  )
}
