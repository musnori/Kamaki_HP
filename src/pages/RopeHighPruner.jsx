import Section from '@/components/Section'
import { Link } from 'react-router-dom'

// ★まずはダミーデータ。公式の型番/長さ/重量/入数が分かり次第この配列を書き換えてください。
const ROPE_MAIN = [
  { no: 'R-2000', name: 'ロープ式高枝切鋏（アンビル）', length: '2.0〜3.5m', weight: '—', pack: '—' },
  { no: 'R-2500', name: 'ロープ式高枝切鋏（葉刈）',   length: '2.5〜4.0m', weight: '—', pack: '—' },
  { no: 'R-3000', name: 'ロープ式高枝切鋏',           length: '3.0〜5.0m', weight: '—', pack: '—' },
]

// 表コンポーネント（HighPrunerと同じ）
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

export default function RopeHighPruner() {
  return (
    <div>
      <Section
        title="ロープ式高枝切鋏"
        subtitle="ロープ引きで高所の枝を安全・確実にカットできるモデル群。"
      >
        <div className="mb-6 rounded-xl border bg-brand-50 text-brand-900 px-4 py-3 text-sm">
          仕様値（長さ・重量・入数・付属品など）は最新情報に合わせて更新してください。
        </div>

        <h3 className="text-lg font-semibold mb-3">ラインナップ</h3>
        <SpecTable rows={ROPE_MAIN} />

        <div className="mt-8 grid gap-3 sm:flex">
          {/* 必要なら公式PDF等のURLに差し替え */}
          <a
            className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-4 py-2 text-white hover:bg-brand-700"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            取扱説明・注意事項（準備中）
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

        <p className="mt-6 text-xs text-neutral-500">
          ※ 掲載の仕様値は更新予定のダミーです。実数値が確定次第、配列を書き換えてください。
        </p>
      </Section>
    </div>
  )
}
