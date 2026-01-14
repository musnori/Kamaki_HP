// src/components/ProductCard.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Tag } from 'lucide-react'

export default function ProductCard({ item, variant = 'compact' }) {
  const title = item.name || item.title
  const tags = item.tags ?? []
  const recommendedFor = item.recommendedFor ?? []
  const link = item.link ?? '#'

  // 詳細表示バリアント（ProductListページなどで使用）
  if (variant === 'detailed') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-lg hover:translate-y-[-2px]"
      >
        <Link to={link} className="relative aspect-[3/2] overflow-hidden bg-neutral-100">
          {item.image ? (
            <img
              src={item.image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-neutral-50 text-neutral-300 font-mono text-sm">
              No Image
            </div>
          )}
        </Link>

        <div className="flex flex-1 flex-col p-4">
          <div className="mb-2 flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>

          <Link to={link}>
            <h3 className="text-lg font-bold text-neutral-900 group-hover:text-red-600 transition-colors">
              {title}
            </h3>
          </Link>

          {item.desc && (
            <p className="mt-1.5 text-sm text-neutral-600 line-clamp-2">{item.desc}</p>
          )}

          {recommendedFor.length > 0 && (
            <div className="mt-3 rounded-xl bg-neutral-50 p-2.5">
              <p className="text-xs font-semibold text-neutral-500 mb-1 flex items-center gap-1">
                <Tag size={12}/> おすすめの用途
              </p>
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {recommendedFor.map((rec) => (
                  <span key={rec} className="text-xs text-neutral-700 font-medium">• {rec}</span>
                ))}
              </div>
            </div>
          )}

          {/* UX改善: ボタンの視認性向上 - 背景色追加・パディング拡大でタップしやすく */}
          <div className="mt-auto pt-4">
            <Link
              to={link}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-100 border border-neutral-200 px-4 py-3 min-h-[48px] text-sm font-bold text-neutral-800 transition-colors active:bg-red-600 active:border-red-600 active:text-white"
            >
              詳細を見る <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </motion.div>
    )
  }

  // コンパクトバリアント（Homeページなどで使用）
  return (
    <Link to={link} className="group block h-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
      >
        <div className="relative aspect-[3/2] overflow-hidden bg-neutral-100">
          {item.image ? (
            <img
              src={item.image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100" />
          )}
          {/* カテゴリバッジ */}
          {item.category && (
            <div className="absolute top-2.5 left-2.5">
              <span className="inline-block rounded-lg bg-white/90 backdrop-blur px-2 py-1 text-xs font-bold text-neutral-800 shadow-sm">
                {item.category}
              </span>
            </div>
          )}
        </div>

        <div className="p-3.5">
          <h3 className="font-bold text-neutral-900 group-hover:text-red-600 transition-colors">
            {title}
          </h3>
          {item.desc && (
            <p className="mt-1 text-sm text-neutral-500 line-clamp-2">{item.desc}</p>
          )}
        </div>
      </motion.div>
    </Link>
  )
}