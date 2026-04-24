import { useState } from 'react'

const statusColors = {
  yellow: '#F7C40E',
  green: '#6FDB45',
  red: '#E15554',
}

export default function Notifications({ notifications, onMarkRead }) {
  const [openThread, setOpenThread] = useState(null)

  function handleOpen(msg) {
    if (msg.unread > 0) onMarkRead(msg.id)
    setOpenThread(msg)
  }

  if (openThread) {
    return (
      <MessageThread
        message={openThread}
        onBack={() => setOpenThread(null)}
      />
    )
  }

  const totalUnread = notifications.reduce((s, n) => s + (n.unread || 0), 0)

  return (
    <div className="bg-bg-light min-h-full font-rubik">
      {/* Header */}
      <div className="bg-white px-5 pt-10 pb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-light text-gray-700">9:41</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <h1 className="text-text-dark text-2xl font-bold">Съобщения</h1>
          {totalUnread > 0 && (
            <div className="bg-danger px-2 py-0.5 rounded-full">
              <span className="text-white text-xs font-bold">{totalUnread} нови</span>
            </div>
          )}
        </div>
      </div>

      {/* Message list */}
      <div className="px-4 mt-3 space-y-2 pb-6">
        {notifications.map(msg => (
          <button
            key={msg.id}
            onClick={() => handleOpen(msg)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all active:scale-[0.98] ${
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
              <span
                className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white"
                style={{ backgroundColor: statusColors[msg.status] }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center justify-between mb-0.5">
                <span className={`text-sm truncate ${msg.unread > 0 ? 'font-bold text-text-dark' : 'font-medium text-text-dark'}`}>
                  {msg.name}
                </span>
                <span className="text-xs text-text-muted ml-2 shrink-0">{msg.time}</span>
              </div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-xs font-medium" style={{ color: '#6FDB45' }}>{msg.role}</span>
              </div>
              <p className={`text-xs truncate ${msg.unread > 0 ? 'text-text-dark font-medium' : 'text-text-muted'}`}>
                {msg.text}
              </p>
            </div>

            {/* Unread badge */}
            {msg.unread > 0 && (
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">{msg.unread}</span>
              </div>
            )}
          </button>
        ))}

        {notifications.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-3 opacity-25">
              <path d="M24 44C26.2 44 28 42.2 28 40H20C20 42.2 21.8 44 24 44ZM36 32V22C36 15.86 32.72 10.72 27 9.36V8C27 6.34 25.66 5 24 5C22.34 5 21 6.34 21 8V9.36C15.26 10.72 12 15.84 12 22V32L8 36V38H40V36L36 32Z" fill="#4A4A4A" />
            </svg>
            <p className="text-text-muted text-sm">Няма съобщения</p>
          </div>
        )}
      </div>
    </div>
  )
}

function MessageThread({ message, onBack }) {
  const [reply, setReply] = useState('')

  const mockMessages = [
    { id: 1, from: 'business', text: message.text, time: message.time },
  ]

  return (
    <div className="bg-bg-light min-h-full font-rubik flex flex-col">
      {/* Header */}
      <div className="bg-white px-5 pt-10 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#2E3E5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="relative">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200">
              {message.avatar ? (
                <img src={message.avatar} alt={message.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                  {message.initials}
                </div>
              )}
            </div>
            <span
              className="absolute bottom-0 right-0 w-2 h-2 rounded-full border border-white"
              style={{ backgroundColor: statusColors[message.status] }}
            />
          </div>
          <div>
            <p className="font-bold text-text-dark text-sm">{message.name}</p>
            <p className="text-xs" style={{ color: '#6FDB45' }}>{message.role}</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        {mockMessages.map(m => (
          <div key={m.id} className="flex justify-start">
            <div className="max-w-[80%] bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
              <p className="text-sm text-text-dark leading-relaxed">{m.text}</p>
              <p className="text-[10px] text-text-muted mt-1 text-right">{m.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Reply input */}
      <div className="bg-white px-4 py-3 border-t border-gray-100 flex items-center gap-3">
        <input
          type="text"
          value={reply}
          onChange={e => setReply(e.target.value)}
          placeholder="Напиши съобщение..."
          className="flex-1 bg-bg-light rounded-xl px-4 py-2.5 text-sm text-text-dark outline-none placeholder:text-text-muted"
        />
        <button
          onClick={() => setReply('')}
          disabled={!reply.trim()}
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center disabled:opacity-40 shrink-0"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
