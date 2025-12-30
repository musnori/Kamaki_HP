// src/pages/Products.jsx
import { useMemo, useState } from 'react'
import Section from '@/components/Section'
import ProductCard from '@/components/ProductCard'
import { CATEGORIES, PRODUCTS } from '@/data/products'
import { Search, Filter, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function Products() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('すべて')

  const list = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const okQ = [p.name, p.desc, p.category, ...(p.tags || [])].join(' ').toLowerCase().includes(q.toLowerCase())
      const okC = cat === 'すべて' ? true : p.category === cat
      return okQ && okC
    })
  }, [q, cat])

  return (
    <div className="bg-neutral-50 min-h-screen">
      <Section title="製品一覧" subtitle="用途や作業内容に合わせて、最適なKAMAKI製品をお選びください。">
        
        {/* 選び方ガイド */}
        <div className="mb-10 overflow-hidden rounded-2xl bg-white border border-brand-100 shadow-sm">
          <div className="bg-brand-50/50 px-6 py-4 border-b border-brand-100">
            <h3 className="flex items-center gap-2 font-bold text-brand-900">
              <CheckCircle2 size={20} className="text-brand-600"/> 選び方のポイント
            </h3>
          </div>
          <div className="p-6 grid md:grid-cols-3 gap-6 text-sm text-neutral-700">
            <div className="space-y-2">
              <p className="font-bold text-neutral-900">🌲 高所作業</p>
              <p>「伸縮ポール」付きの高枝切鋏が安心です。脚立を使わずに安全に作業できます。</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-neutral-900">🪵 太い枝</p>
              <p>テコ構造（ギアやロープ）の「太枝切鋏」や「鋸」なら、少ない力で切断可能です。</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-neutral-900">✂️ 日常の剪定</p>
              <p>手元作業には、軽量で取り回しの良い「剪定鋏」や「植木鋏」がおすすめです。</p>
            </div>
          </div>
        </div>

        {/* 検索フィルター */}
        <div className="sticky top-20 z-30 mb-8 rounded-xl bg-white/80 p-4 shadow-sm backdrop-blur border border-neutral-200">
          <div className="grid gap-4 md:grid-cols-12">
            <div className="relative md:col-span-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="キーワード検索（例：高枝、伸縮、太枝...）"
                className="w-full rounded-lg border border-neutral-300 bg-white pl-10 pr-4 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
              />
            </div>
            <div className="relative md:col-span-4">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
              <select
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="w-full appearance-none rounded-lg border border-neutral-300 bg-white pl-10 pr-8 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all cursor-pointer"
              >
                <option>すべて</option>
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* 製品リスト */}
        {list.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center text-neutral-500">
            <AlertCircle size={48} className="mb-4 text-neutral-300" />
            <p className="text-lg font-medium">該当する製品が見つかりませんでした</p>
            <p className="text-sm">キーワードを変更するか、カテゴリを「すべて」に戻してお試しください。</p>
            <button 
              onClick={() => {setQ(''); setCat('すべて')}}
              className="mt-6 text-brand-600 hover:underline font-medium"
            >
              条件をリセット
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {list.map((p) => <ProductCard key={p.id} item={p} variant="detailed" />)}
          </div>
        )}
      </Section>
    </div>
  )
}