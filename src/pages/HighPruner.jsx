// src/pages/HighPruner.jsx
import Section from '@/components/Section'
import { Link } from 'react-router-dom'
import { FileText, MessageCircle } from 'lucide-react'

// データ定義（変更なし）
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

// ★ UX改善: レスポンシブ対応のスペック表コンポーネント
// スマホではカード型、PCではテーブル型に切り替わります
function ResponsiveSpecTable({ rows }) {
  return (
    <>
      {/* PC View (Table) */}
      <div className="hidden sm:block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-neutral-50 text-neutral-700">
            <tr className="[&>th]:px-4 [&>th]:py-3 text-left font-semibold border-b border-neutral-200">
              <th className="w-24">型番</th>
              <th>名称</th>
              <th className="w-32">全長</th>
              <th className="w-24">重量</th>
              <th className="w-20">入数</th>
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

      {/* Mobile View (Cards) */}
      <div className="sm:hidden grid gap-3">
        {rows.map((r) => (
          <div key={r.no} className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono font-bold text-brand-700 bg-brand-50 px-2 py-1 rounded text-sm">
                No.{r.no}
              </span>
              <span className="text-xs text-neutral-400">入数: {r.pack}</span>
            </div>
            <h4 className="font-bold text-neutral-900 mb-3">{r.name}</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-neutral-50 px-3 py-2 rounded">
                <span className="text-xs text-neutral-500 block">全長</span>
                <span className="font-medium">{r.length}</span>
              </div>
              <div className="bg-neutral-50 px-3 py-2 rounded">
                <span className="text-xs text-neutral-500 block">重量</span>
                <span className="font-medium">{r.weight}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default function HighPruner() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <Section title="高枝切鋏（伸縮式「かるのび」）" subtitle="届かない枝を安全にカット。用途に合わせて選べる伸縮タイプ。">
        
        {/* 重要なお知らせを目立たせる */}
        <div className="mb-8 rounded-lg border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-bold mb-1">💡 付属品について</p>
          <p>このカテゴリのすべての製品に「専用ノコギリ」が付属します。太い枝もカット可能です。</p>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-neutral-800 mb-4">
              <span className="h-6 w-1 rounded-full bg-brand-600"></span>
              2段ポール式
              <span className="text-sm font-normal text-neutral-500 ml-2">（手軽に使える標準タイプ）</span>
            </h3>
            <ResponsiveSpecTable rows={TWO_STAGE} />
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-neutral-800 mb-4">
              <span className="h-6 w-1 rounded-full bg-brand-600"></span>
              3段ポール式
              <span className="text-sm font-normal text-neutral-500 ml-2">（コンパクトに収納可能）</span>
            </h3>
            <ResponsiveSpecTable rows={THREE_STAGE} />
          </div>
        </div>

        {/* CTA Actions */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <h4 className="text-center font-semibold text-neutral-900 mb-6">お探しの情報は見つかりましたか？</h4>
          <div className="grid gap-3 sm:flex sm:justify-center">
            <a
              href="https://kamaki.jimdofree.com/app/download/12470531188/%E9%AB%98%E6%9E%9D%E5%88%87%E7%8B%AD%E5%AF%BE%E7%AD%96.pdf?t=1507607567"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-800 text-white px-5 py-3 hover:bg-neutral-700 transition-colors"
            >
              <FileText size={18} />
              トラブルシューティング (PDF)
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 text-white px-6 py-3 shadow-lg shadow-brand-600/20 hover:bg-brand-700 transition-colors"
            >
              <MessageCircle size={18} />
              見積・在庫の問い合わせ
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link to="/products" className="text-sm text-neutral-500 hover:text-brand-600 underline">
              製品一覧へ戻る
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}