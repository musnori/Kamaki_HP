import Section from '@/components/Section'
import { Link } from 'react-router-dom'

const HARVEST = [
  { no: 'HV-10', name: '採果鋏（先細）', length: '—', weight: '—', pack: '—' },
  { no: 'HV-20', name: '採果鋏（曲刃）', length: '—', weight: '—', pack: '—' },
  { no: 'HV-30', name: '植木鋏（小型）', length: '—', weight: '—', pack: '—' },
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

export default function HarvestShears() {
  return (
    <Section title="採果鋏・植木鋏" subtitle="収穫や繊細な作業に適した軽量モデル。">
      <SpecTable rows={HARVEST} />
      <div className="mt-8 grid gap-3 sm:flex">
        <Link to="/contact" className="inline-flex items-center justify-center rounded-xl border px-4 py-2 hover:bg-neutral-50">見積・在庫の問い合わせ</Link>
        <Link to="/products" className="inline-flex items-center justify-center rounded-xl border px-4 py-2 hover:bg-neutral-50">製品一覧へ戻る</Link>
      </div>
    </Section>
  )
}
