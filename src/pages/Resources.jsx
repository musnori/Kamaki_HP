import Section from '@/components/Section'

const items = [
  { id: 'r1', title: 'カタログ（総合）', desc: '主要製品をまとめた PDF（ダミー）。', href: '#' },
  { id: 'r2', title: '取扱説明書（例）', desc: '設置〜安全上の注意（ダミー）。', href: '#' },
  { id: 'r3', title: '技術資料：切断の基礎', desc: '刃選定・送り速度の目安（ダミー）。', href: '#' },
]

export default function Resources() {
  return (
    <Section title="参考資料" subtitle="カタログ・取説・技術資料などを掲載します。">
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((it) => (
          <a key={it.id} href={it.href} className="rounded-2xl border bg-white p-5 shadow-soft hover:shadow block">
            <h3 className="font-semibold tracking-tight">{it.title}</h3>
            <p className="text-sm text-neutral-600 mt-1">{it.desc}</p>
          </a>
        ))}
      </div>
      <p className="text-xs text-neutral-500 mt-4">※ 実ファイルの URL に差し替えてご利用ください。</p>
    </Section>
  )
}
