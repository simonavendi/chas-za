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

  const totalUnread = notifications.reduce((s, n) => s + (n.unread || 0), 0)

  const MessageList = (
    <div className="space-y-2">
      {notifications.map(msg => (
        <button
          key={msg.id}
          onClick={() => handleOpen(msg)}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all active:scale-[0.98] ${
            openThread?.id === msg.id ? 'bg-primary/5 border border-primary/20' :
            msg.highlight ? 'bg-bg-green-light' : 'bg-white'
          }`}
        >
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
          <div className="flex-1 min-w-0 text-left">
            <div className="flex items-center justify-between mb-0.5">
              <span className={`text-sm truncate ${msg.unread > 0 ? 'font-bold text-text-dark' : 'font-medium text-text-dark'}`}>
                {msg.name}
              </span>
              <span className="text-xs text-text-muted ml-2 shrink-0">{msg.time}</span>
            </div>
            <div className="mb-0.5">
              <span className="text-xs font-medium" style={{ color: '#6FDB45' }}>{msg.role}</span>
            </div>
            <p className={`text-xs truncate ${msg.unread > 0 ? 'text-text-dark font-medium' : 'text-text-muted'}`}>
              {msg.text}
            </p>
          </div>
          {msg.unread > 0 && (
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">{msg.unread}</span>
            </div>
          )}
        </button>
      ))}
      {notifications.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16">
          <p className="text-text-muted text-sm">Няма съобщения</p>
        </div>
      )}
    </div>
  )

  // Mobile: full-screen thread replaces list
  if (openThread) {
    return (
      <div className="md:hidden">
        <MobileThread message={openThread} onBack={() => setOpenThread(null)} />
      </div>
    )
  }

  return (
    <div className="bg-bg-light min-h-full font-rubik">

      {/* ── MOBILE ── */}
      <div className="md:hidden">
        <div className="bg-white px-5 pt-10 pb-4">
          <span className="text-sm font-light text-gray-700">9:41</span>
          <div className="flex items-center justify-between mt-2">
            <h1 className="text-text-dark text-2xl font-bold">Съобщения</h1>
            {totalUnread > 0 && (
              <div className="bg-danger px-2 py-0.5 rounded-full">
                <span className="text-white text-xs font-bold">{totalUnread} нови</span>
              </div>
            )}
          </div>
        </div>
        <div className="px-4 mt-3 pb-6">{MessageList}</div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex flex-col h-full">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between shrink-0">
          <div>
            <h1 className="text-navy-2 text-2xl font-bold font-inter">Съобщения</h1>
            <p className="text-text-muted text-sm mt-0.5">
              {totalUnread > 0 ? `${totalUnread} непрочетени съобщения` : 'Всички съобщения прочетени'}
            </p>
          </div>
        </div>

        {/* Split panel */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left: message list */}
          <div className="w-80 shrink-0 border-r border-gray-100 overflow-y-auto bg-white p-4">
            {MessageList}
          </div>

          {/* Right: thread view */}
          <div className="flex-1 overflow-hidden flex flex-col">
            {openThread ? (
              <DesktopThread message={openThread} />
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="mb-4 opacity-20">
                  <path d="M28 52C40.15 52 50 42.15 50 30C50 17.85 40.15 8 28 8C15.85 8 6 17.85 6 30C6 36.5 8.85 42.35 13.4 46.35L11 52L17.75 50.15C21.05 51.35 24.45 52 28 52Z" stroke="#4A4A4A" strokeWidth="2" />
                  <line x1="18" y1="26" x2="38" y2="26" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="18" y1="32" x2="30" y2="32" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <p className="text-text-muted font-medium">Изберете съобщение</p>
                <p className="text-text-muted text-sm mt-1">за да прочетете разговора</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileThread({ message, onBack }) {
  const [reply, setReply] = useState('')
  return (
    <div className="bg-bg-light min-h-screen font-rubik flex flex-col">
      <div className="bg-white px-5 pt-10 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#2E3E5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <ThreadHeader message={message} />
        </div>
      </div>
      <div className="flex-1 p-4">
        <Bubble text={message.text} time={message.time} />
      </div>
      <ReplyBar reply={reply} setReply={setReply} />
    </div>
  )
}

function DesktopThread({ message }) {
  const [reply, setReply] = useState('')
  return (
    <>
      <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-3 shrink-0">
        <ThreadHeader message={message} />
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <Bubble text={message.text} time={message.time} />
      </div>
      <div className="border-t border-gray-100">
        <ReplyBar reply={reply} setReply={setReply} />
      </div>
    </>
  )
}

function ThreadHeader({ message }) {
  return (
    <>
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
    </>
  )
}

function Bubble({ text, time }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
        <p className="text-sm text-text-dark leading-relaxed">{text}</p>
        <p className="text-[10px] text-text-muted mt-1 text-right">{time}</p>
      </div>
    </div>
  )
}

function ReplyBar({ reply, setReply }) {
  return (
    <div className="bg-white px-4 py-3 flex items-center gap-3">
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
  )
}
