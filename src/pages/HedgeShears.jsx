import Section from '@/components/Section'
import { Link } from 'react-router-dom'

// ★一旦ダミー値。公式の型番/全長/重量/入数に合わせて置き換えてください
const HEDGE = [
  { no: 'HS-600', name: '刈込鋏 標準',        length: '—',  weight: '—',  pack: '—' },
  { no: 'HS-700', name: '刈込鋏 角刃',        length: '—',  weight: '—',  pack: '—' },
  { no: 'HS-800', name: '刈込鋏 厚刃',        length: '—',  weight: '—',  pack: '—' },
]

const TELESCOPIC = [
  { no: 'HT-600', name: '伸縮式刈込鋏（短柄）', length: '—',  weight: '—',  pack: '—' },
  { no: 'HT-900', name: '伸縮式刈込鋏（長柄）', length: '—',  weight: '—',  pack: '—' },
]

// 共通テーブル
function SpecTable({ rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-white shadow-soft">
      <table className="w-full text-sm">
        <thead className="bg-brand-50 text-brand-800">
          <tr className="[&>th]:px-4 [&>th]:py-3 text-left">
            <th>型番</th><th>名称</th><th>全長</th><th>重量</th><th>入数</th>
          </tr>
        </thead>
        <tbody className="[&>tr>*]:px-4 [&>tr>*]:py-3">
          {rows.map((r) => (
            <tr key={r.no} className="border-t hover:bg-neutral-50">
              <td className="font-mono">No.{r.no}</td>
              <td>{r.name}</td>
              <td>{r.length}</td>
              <td>{r.weight}</td>
              <td>{r.pack}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function HedgeShears() {
  return (
    <div>
      <Section
        title="刈込鋏・伸縮式刈込鋏"
        subtitle="生垣の整枝に最適なスタンダード刈込鋏と、リーチ調整できる伸縮式。"
      >
        <h3 className="text-lg font-semibold mb-3">刈込鋏</h3>
        <SpecTable rows={HEDGE} />

        <h3 className="text-lg font-semibold mt-10 mb-3">伸縮式刈込鋏</h3>
        <SpecTable rows={TELESCOPIC} />

        <div className="mt-8 grid gap-3 sm:flex">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl border px-4 py-2 hover:bg-neutral-50"
          >
            見積・在庫の問い合わせ
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-xl border px-4 py-2 hover:bg-neutral-50"
          >
            製品一覧へ戻る
          </Link>
        </div>

        <p className="mt-6 text-xs text-neutral-500">
          ※ 仕様値はメーカー公開情報に合わせて調整してください。
        </p>
      </Section>
    </div>
  )
}
