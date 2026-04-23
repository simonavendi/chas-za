export default function BusinessCard({ business, onBook, isFavorite, onFavorite }) {
  const { id, name, image, tags, reviews, badge, category } = business

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-4">
      {/* Image */}
      <div className="relative h-40 bg-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={e => { e.target.style.display = 'none' }}
        />
        <div className="absolute inset-0 bg-black/25" />
        {badge && (
          <div className="absolute top-3 left-3 bg-primary/90 px-3 py-1 rounded-full">
            <span className="text-white text-xs font-medium font-rubik">{badge}</span>
          </div>
        )}
        {onFavorite && (
          <button
            onClick={() => onFavorite(id)}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 flex items-center justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={isFavorite ? '#E15554' : 'none'} stroke={isFavorite ? '#E15554' : 'white'} strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        )}
        <div className="absolute bottom-3 left-3">
          <p className="text-white/80 text-xs font-rubik mb-0.5">{category}</p>
          <h3 className="text-white font-medium text-lg font-rubik leading-tight">{name}</h3>
        </div>
      </div>

      {/* Info */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 flex-wrap mb-2">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs text-text-dark bg-bg-blue px-2 py-1 rounded font-rubik">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-star text-sm">★</span>
            <span className="text-xs text-text-gray font-rubik">{reviews} Отзиви</span>
          </div>
          <button
            onClick={() => onBook && onBook(business)}
            className="bg-primary text-white text-xs font-semibold font-rubik px-4 py-2 rounded-full active:bg-primary-dark transition-colors"
          >
            Запази час
          </button>
        </div>
      </div>
    </div>
  )
}
