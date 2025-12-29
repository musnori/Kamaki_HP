// src/components/ProductCard.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProductCard({ item, variant = 'compact' }) {
  const title = item.name || item.title
  const tags = item.tags ?? []
  const recommendedFor = item.recommendedFor ?? []

  if (variant === 'detailed') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border bg-white shadow-soft overflow-hidden hover:shadow transition-shadow flex flex-col"
      >
        <Link to={item.link ?? '#'} className="group block" aria-label={`${title}の詳細へ`}>
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
          <div className="p-4 pb-0">
            <h3 className="font-semibold text-lg tracking-tight">{title}</h3>
            {item.desc && (
              <p className="text-sm text-neutral-600 mt-1">{item.desc}</p>
            )}
          </div>
        </Link>

        <div className="px-4 pb-4 flex-1">
          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex px-2 py-1 text-xs rounded-full bg-brand-50 text-brand-700 border border-brand-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {recommendedFor.length > 0 && (
            <div className="mt-4 rounded-xl border border-dashed border-neutral-200 bg-neutral-50 px-3 py-3">
              <p className="text-xs font-semibold text-neutral-600">こんな方におすすめ</p>
              <ul className="mt-2 space-y-1 text-sm text-neutral-700 list-disc list-inside">
                {recommendedFor.map((rec) => (
                  <li key={rec}>{rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="px-4 pb-5">
          <Link
            to={item.link ?? '#'}
            className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium hover:bg-neutral-50"
          >
            詳細を見る
          </Link>
        </div>
      </motion.div>
    )
  }

  return (
    <Link to={item.link ?? '#'} className="group block" aria-label={title}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border bg-white shadow-soft overflow-hidden hover:shadow transition-shadow"
      >
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
