// src/pages/RopeHighPruner.jsx
import Section from '@/components/Section'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowLeft, FileText } from 'lucide-react'

const ROPE_MAIN = [
  { no: 'R-2000', name: 'ロープ式高枝切鋏（アンビル）', length: '2.0〜3.5m', weight: '—', pack: '—' },
  { no: 'R-2500', name: 'ロープ式高枝切鋏（葉刈）',   length: '2.5〜4.0m', weight: '—', pack: '—' },
  { no: 'R-3000', name: 'ロープ式高枝切鋏',           length: '3.0〜5.0m', weight: '—', pack: '—' },
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

export default function RopeHighPruner() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <Section
        title="ロープ式高枝切鋏"
        subtitle="滑車とロープの力で、高い位置の枝を軽く安全にカット。"
      >
        <div className="mb-8 flex items-start gap-3 rounded-lg border border-brand-200 bg-brand-50 p-4 text-sm text-brand-900">
          <FileText className="shrink-0 text-brand-500 mt-0.5" size={18}/>
          <div>
            <p className="font-bold">仕様について</p>
            <p className="opacity-80">掲載されている仕様（全長・重量・入数）は現在のカタログ値に基づきます。</p>
          </div>
        </div>

        <ResponsiveSpecTable rows={ROPE_MAIN} />

        <div className="mt-12 pt-8 border-t border-neutral-200">
           <div className="grid gap-3 sm:flex sm:justify-center">
            <button
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-800 text-white px-5 py-3 hover:bg-neutral-700 transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              <FileText size={18} /> 取扱説明書 (準備中)
            </button>
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
      </Section>
    </div>
  )
}