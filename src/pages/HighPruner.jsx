import Section from '@/components/Section'
import { Link } from 'react-router-dom'

// ページ内にデータを直置き（外部importなし）
const TWO_STAGE = [
  { no: '1860A', name: 'かるのび アンビルタイプ', length: '1.8〜3m', weight: '1100g', pack: '6丁' },
  { no: '1850',  name: 'かるのび 葉刈タイプ',   length: '1.8〜3m', weight: '1100g', pack: '6丁' },
  { no: '1835',  name: 'かるのびシェイク',       length: '1.8〜3m', weight: '1200g', pack: '6丁' },
  { no: '1830',  name: 'かるのび',               length: '1.8〜3m', weight: '1100g', pack: '6丁' },
  { no: '1320',  name: 'かるのび',               length: '1.3〜2m', weight: '900g',  pack: '6丁' },
  { no: '1800',  name: 'かるのび',               length: '1.8〜3m', weight: '1060g', pack: '6丁' },
];
const THREE_STAGE = [
  { no: '1470A', name: 'かるのびサンダン（アンビル）', length: '1.8〜4m', weight: '1400g', pack: '6丁' },
  { no: '1450A', name: 'かるのびサンダン（アンビル）', length: '1.4〜3m', weight: '1200g', pack: '6丁' },
  { no: '1440',  name: 'かるのびサンダン（葉刈）',     length: '1.4〜3m', weight: '1200g', pack: '6丁' },
  { no: '1430',  name: 'かるのびサンダン',             length: '1.4〜3m', weight: '1300g', pack: '6丁' },
];

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

export default function HighPruner() {
  return (
    <div>
      <Section title="高枝切鋏（伸縮式「かるのび」）" subtitle="2段／3段ポール式のラインナップをご紹介します。">
        <div className="mb-6 rounded-xl border bg-brand-50 text-brand-900 px-4 py-3 text-sm">
          ※ このカテゴリの製品には鋸が付属します。
        </div>

        <h3 className="text-lg font-semibold mb-3">2段ポール式</h3>
        <SpecTable rows={TWO_STAGE} />

        <h3 className="text-lg font-semibold mt-10 mb-3">3段ポール式</h3>
        <SpecTable rows={THREE_STAGE} />

        <div className="mt-8 grid gap-3 sm:flex">
          <a
            className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-4 py-2 text-white hover:bg-brand-700"
            href="https://kamaki.jimdofree.com/app/download/12470531188/%E9%AB%98%E6%9E%9D%E5%88%87%E7%8B%AD%E5%AF%BE%E7%AD%96.pdf?t=1507607567"
            target="_blank" rel="noreferrer"
          >
            切刃に力が伝わらない時の対処（PDF）
          </a>
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
      </Section>
    </div>
  )
}
