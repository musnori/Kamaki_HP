import { motion } from 'framer-motion'

export default function ProductCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border bg-white shadow-soft overflow-hidden"
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
}
