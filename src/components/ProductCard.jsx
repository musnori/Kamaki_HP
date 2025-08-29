import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

export default function ProductCard({ item }) {
  const navigate = useNavigate()

  const cardInner = (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border bg-white shadow-soft overflow-hidden
                 hover:shadow transition-shadow"
      role={item.link ? 'button' : undefined}
      onClick={() => item.link && navigate(item.link)}   // ← クリックで遷移（保険）
      tabIndex={item.link ? 0 : -1}
      onKeyDown={(e) => {
        if (item.link && (e.key === 'Enter' || e.key === ' ')) navigate(item.link)
      }}
    >
      <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200" aria-hidden />
      <div className="p-4">
        <h3 className="font-semibold text-lg tracking-tight">{item.name}</h3>
        <p className="text-sm text-neutral-600 mt-1 line-clamp-2">{item.desc}</p>
        <div className="mt-3 text-xs inline-flex px-2 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
          {item.category}
        </div>
      </div>
    </motion.div>
  )

  // Link でも囲む（どちらでも飛べるよう二重化）
  return item.link ? (
    <Link to={item.link} className="block">{cardInner}</Link>
  ) : (
    cardInner
  )
}
