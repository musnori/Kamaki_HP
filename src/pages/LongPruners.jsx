import Section from '@/components/Section'
import { Link } from 'react-router-dom'

const LONG_PRUNERS = [
  { no: 'LP-700', name: 'ロング剪定鋏（軽量）', length: '—', weight: '—', pack: '—' },
  { no: 'LP-900', name: 'ロング剪定鋏（強化）', length: '—', weight: '—', pack: '—' },
  { no: 'HC-800', name: '採集鋏（先細）',       length: '—', weight: '—', pack: '—' },
]

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
          {rows.map(r => (
            <tr key={r.no} className="border-t hover:bg-neutral-50">
              <td className="font-mono">No.{r.no}</td><td>{r.name}</td>
              <td>{r.length}</td><td>{r.weight}</td><td>{r.pack}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function LongPruners() {
  return (
    <Section
      title="ロング剪定＆採集鋏"
      subtitle="高所・奥まった枝の剪定や、果実採集に便利なロングタイプ。"
    >
      <SpecTable rows={LONG_PRUNERS} />
      <div className="mt-8 grid gap-3 sm:flex">
        <Link to="/contact" className="inline-flex items-center justify-center rounded-xl border px-4 py-2 hover:bg-neutral-50">見積・在庫の問い合わせ</Link>
        <Link to="/products" className="inline-flex items-center justify-center rounded-xl border px-4 py-2 hover:bg-neutral-50">製品一覧へ戻る</Link>
      </div>
    </Section>
  )
}
