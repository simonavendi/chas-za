export default function StarRating({ rating, max = 5, size = 'sm' }) {
  const sizeClass = size === 'sm' ? 'text-sm' : 'text-base'
  return (
    <span className={`flex gap-0.5 ${sizeClass}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} style={{ color: i < Math.round(rating) ? '#F7C40E' : '#D1D1D1' }}>★</span>
      ))}
    </span>
  )
}
