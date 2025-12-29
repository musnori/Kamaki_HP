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
      <Section title="製品一覧" subtitle="用途や作業内容に合わせて最適な製品をお選びください。">
        <div className="rounded-2xl border bg-brand-50 p-5 text-sm text-brand-900 mb-8">
          <p className="font-semibold">選び方のポイント</p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>高所作業なら「伸縮ポール」付きの高枝切鋏が安心です。</li>
            <li>太い枝の切断にはテコ構造の太枝切鋏・鋸が適しています。</li>
            <li>日常的な剪定は軽量タイプの剪定鋏がおすすめです。</li>
          </ul>
        </div>

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

        <div className="mb-10">
          <h3 className="text-lg font-semibold">用途別の簡易比較</h3>
          <div className="mt-3 overflow-hidden rounded-2xl border bg-white shadow-soft">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50 text-neutral-600">
                <tr className="[&>th]:px-4 [&>th]:py-3 text-left">
                  <th>用途</th>
                  <th>おすすめカテゴリ</th>
                  <th>ポイント</th>
                </tr>
              </thead>
              <tbody className="[&>tr>*]:px-4 [&>tr>*]:py-3">
                {[
                  ['高所の剪定', '高枝切鋏 / 高枝鋸', '脚立作業を減らし安全性を確保'],
                  ['太枝の切断', '太枝切鋏 / 鋸', 'テコ構造で少ない力でも切断'],
                  ['日常的な剪定', '剪定鋏', '軽量で手元作業に最適'],
                ].map(([use, type, point]) => (
                  <tr key={use} className="border-t">
                    <td className="font-medium">{use}</td>
                    <td>{type}</td>
                    <td>{point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {list.length === 0 ? (
          <p className="text-neutral-600">該当する製品が見つかりませんでした。条件を変更してください。</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {list.map((p) => <ProductCard key={p.id} item={p} variant="detailed" />)}
          </div>
        )}
      </Section>
    </div>
  )
}
