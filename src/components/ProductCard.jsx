// src/components/ProductCard.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProductCard({ item }) {
  const title = item.name || item.title

  return (
    <Link to={item.link ?? '#'} className="group block" aria-label={title}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border bg-white shadow-soft overflow-hidden hover:shadow transition-shadow"
      >
        {/* 画像 */}
        <div className="relative aspect-video bg-neutral-100">
          {item.image ? (
            <img
              src={item.image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200" />
          )}
        </div>

        {/* テキスト */}
        <div className="p-4">
          <h3 className="font-semibold text-lg tracking-tight">{title}</h3>
          {item.desc && (
            <p className="text-sm text-neutral-600 mt-1 line-clamp-2">{item.desc}</p>
          )}
          {item.category && (
            <span className="mt-3 inline-flex px-2 py-1 text-xs rounded-full bg-brand-50 text-brand-700 border border-brand-100">
              {item.category}
            </span>
          )}
        </div>
      </motion.div>
    </Link>
  )
}
