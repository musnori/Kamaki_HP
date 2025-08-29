import { useMemo, useState } from 'react'
import Section from '@/components/Section'
import ProductCard from '@/components/ProductCard'
import { CATEGORIES, PRODUCTS } from '@/data/products'

export default function Products() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('すべて')

  const list = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const okQ = [p.name, p.desc, p.category].join(' ').toLowerCase().includes(q.toLowerCase())
      const okC = cat === 'すべて' ? true : p.category === cat
      return okQ && okC
    })
  }, [q, cat])

  return (
    <div>
      <Section title="各種製品情報" subtitle="キーワード・カテゴリで絞り込めます。">
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="キーワードで検索（例：ノギス、ダイヤ）"
            className="md:col-span-2 rounded-xl border px-4 py-2 focus:ring-brand-500 focus:border-brand-500"
          />
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="rounded-xl border px-4 py-2 focus:ring-brand-500 focus:border-brand-500"
          >
            <option>すべて</option>
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>

        {list.length === 0 ? (
          <p className="text-neutral-600">該当する製品が見つかりませんでした。条件を変更してください。</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {list.map((p) => <ProductCard key={p.id} item={p} />)}
          </div>
        )}
      </Section>
    </div>
  )
}
