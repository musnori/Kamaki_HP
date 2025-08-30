import Section from '@/components/Section'

const items = [
  { id: 'r1', title: '太枝切鋏-刃先（価格無）', href: '/resources/太枝切鋏-刃先（価格無）.pdf', type: 'PDF' },
  { id: 'r2', title: 'かるたか（価格無）', href: '/resources/かるたか(価格無).pdf', type: 'PDF' },
  { id: 'r3', title: 'かるたか全体（価格無）', href: '/resources/かるたか全体(価格無).pdf', type: 'PDF' },
  { id: 'r4', title: 'かるのび-バイパス（価格無）', href: '/resources/かるのび-バイパス(価格無).pdf', type: 'PDF' },
  { id: 'r5', title: 'かるのび-アンビル（価格無）', href: '/resources/かるのび-アンビル（価格無）.pdf', type: 'PDF' },
  { id: 'r6', title: 'きりん（価格無）', href: '/resources/きりん(価格無).pdf', type: 'PDF' },
  { id: 'r7', title: 'レバーピン交換', href: '/resources/レバーピン交換.jpg', type: 'JPG' },
  { id: 'r8', title: '替刃取付（1830）', href: '/resources/替刃取付（1830）.jpg', type: 'JPG' },
  { id: 'r9', title: 'ポール調節', href: '/resources/ポール調節.jpg', type: 'JPG' },
]

export default function Resources() {
  return (
    <Section title="参考資料" subtitle="カタログ・取説・技術資料などを掲載します。">
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((it) => (
          <a
            key={it.id}
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border bg-white p-5 shadow-soft hover:shadow block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-100 text-xs font-bold text-neutral-600">
                {it.type}
              </div>
              <h3 className="font-semibold tracking-tight">{it.title}</h3>
            </div>
            <button className="mt-3 inline-block rounded-lg bg-brand-700 text-white text-sm px-3 py-1 hover:bg-brand-800">
              開く / ダウンロード
            </button>
          </a>
        ))}
      </div>
      <p className="text-xs text-neutral-500 mt-4">
        ※ ファイルは <code>public/resources/</code> 内に保存し、href はそのまま参照できます。
      </p>
    </Section>
  )
}
