// src/pages/HedgeShears.jsx
import Section from '@/components/Section'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowLeft } from 'lucide-react'

const HEDGE = [
  { no: 'HS-600', name: '刈込鋏 標準',        length: '—',  weight: '—',  pack: '—' },
  { no: 'HS-700', name: '刈込鋏 角刃',        length: '—',  weight: '—',  pack: '—' },
  { no: 'HS-800', name: '刈込鋏 厚刃',        length: '—',  weight: '—',  pack: '—' },
]

const TELESCOPIC = [
  { no: 'HT-600', name: '伸縮式刈込鋏（短柄）', length: '—',  weight: '—',  pack: '—' },
  { no: 'HT-900', name: '伸縮式刈込鋏（長柄）', length: '—',  weight: '—',  pack: '—' },
]

function ResponsiveSpecTable({ rows }) {
  return (
    <>
      <div className="hidden sm:block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-neutral-50 text-neutral-700">
            <tr className="[&>th]:px-4 [&>th]:py-3 text-left font-semibold border-b border-neutral-200">
              <th className="w-24">型番</th><th>名称</th><th className="w-32">全長</th><th className="w-24">重量</th><th className="w-20">入数</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {rows.map((r) => (
              <tr key={r.no} className="hover:bg-brand-50/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold text-brand-700">{r.no}</td>
                <td className="px-4 py-3 font-medium text-neutral-900">{r.name}</td>
                <td className="px-4 py-3 text-neutral-600">{r.length}</td>
                <td className="px-4 py-3 text-neutral-600">{r.weight}</td>
                <td className="px-4 py-3 text-neutral-600">{r.pack}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="sm:hidden grid gap-3">
        {rows.map((r) => (
          <div key={r.no} className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono font-bold text-brand-700 bg-brand-50 px-2 py-1 rounded text-sm">No.{r.no}</span>
              <span className="text-xs text-neutral-400">入数: {r.pack}</span>
            </div>
            <h4 className="font-bold text-neutral-900 mb-3">{r.name}</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-neutral-50 px-3 py-2 rounded"><span className="text-xs text-neutral-500 block">全長</span>{r.length}</div>
              <div className="bg-neutral-50 px-3 py-2 rounded"><span className="text-xs text-neutral-500 block">重量</span>{r.weight}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default function HedgeShears() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <Section
        title="刈込鋏・伸縮式刈込鋏"
        subtitle="生垣の整枝に最適なスタンダード刈込鋏と、リーチ調整できる伸縮式モデル。"
      >
        <div className="space-y-12">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-neutral-800 mb-4">
              <span className="h-6 w-1 rounded-full bg-brand-600"></span> 刈込鋏
            </h3>
            <ResponsiveSpecTable rows={HEDGE} />
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-neutral-800 mb-4">
              <span className="h-6 w-1 rounded-full bg-brand-600"></span> 伸縮式刈込鋏
            </h3>
            <ResponsiveSpecTable rows={TELESCOPIC} />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200">
           <div className="grid gap-3 sm:flex sm:justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 text-white px-6 py-3 shadow-lg shadow-brand-600/20 hover:bg-brand-700 transition-colors">
              <MessageCircle size={18} /> 見積・在庫の問い合わせ
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link to="/products" className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-brand-600 underline">
              <ArrowLeft size={14} /> 製品一覧へ戻る
            </Link>
          </div>
        </div>

        <p className="mt-6 text-xs text-center text-neutral-400">
          ※ 仕様値はメーカー公開情報に合わせて随時更新されます。
        </p>
      </Section>
    </div>
  )
}