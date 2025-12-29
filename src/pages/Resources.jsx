import Section from '@/components/Section'

const items = [
  {
    id: 'r1',
    title: '太枝切鋏-刃先（価格無）',
    href: '/resources/太枝切鋏-刃先（価格無）.pdf',
    type: 'PDF',
    category: '製品カタログ',
    popular: true,
  },
  {
    id: 'r2',
    title: 'かるたか（価格無）',
    href: '/resources/かるたか(価格無).pdf',
    type: 'PDF',
    category: '製品カタログ',
    popular: true,
  },
  {
    id: 'r3',
    title: 'かるたか全体（価格無）',
    href: '/resources/かるたか全体(価格無).pdf',
    type: 'PDF',
    category: '製品カタログ',
  },
  {
    id: 'r4',
    title: 'かるのび-バイパス（価格無）',
    href: '/resources/かるのび-バイパス(価格無).pdf',
    type: 'PDF',
    category: '製品カタログ',
  },
  {
    id: 'r5',
    title: 'かるのび-アンビル（価格無）',
    href: '/resources/かるのび-アンビル（価格無）.pdf',
    type: 'PDF',
    category: '製品カタログ',
    popular: true,
  },
  {
    id: 'r6',
    title: 'きりん（価格無）',
    href: '/resources/きりん(価格無).pdf',
    type: 'PDF',
    category: '製品カタログ',
  },
  {
    id: 'r7',
    title: 'レバーピン交換',
    href: '/resources/レバーピン交換.jpg',
    type: 'JPG',
    category: 'メンテナンス資料',
    popular: true,
  },
  {
    id: 'r8',
    title: '替刃取付（1830）',
    href: '/resources/替刃取付（1830）.jpg',
    type: 'JPG',
    category: '取扱説明',
  },
  {
    id: 'r9',
    title: 'ポール調節',
    href: '/resources/ポール調節.jpg',
    type: 'JPG',
    category: '取扱説明',
  },
]

export default function Resources() {
  const popularItems = items.filter((item) => item.popular)
  const categories = Array.from(new Set(items.map((item) => item.category)))

  return (
    <Section title="資料・情報" subtitle="用途別に必要な資料をすぐに確認できるよう整理しています。">
      {popularItems.length > 0 && (
        <div className="mb-10">
          <h3 className="text-lg font-semibold">よく見られている資料</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {popularItems.map((it) => (
              <a
                key={it.id}
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border bg-white p-5 shadow-soft hover:shadow block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-50 text-xs font-bold text-brand-700">
                    {it.type}
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">{it.category}</p>
                    <h3 className="font-semibold tracking-tight">{it.title}</h3>
                  </div>
                </div>
                <span className="mt-3 inline-flex rounded-lg bg-brand-700 text-white text-sm px-3 py-1 hover:bg-brand-800">
                  開く / ダウンロード
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-10">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-lg font-semibold">{category}</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {items
                .filter((item) => item.category === category)
                .map((it) => (
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
                    <span className="mt-3 inline-flex rounded-lg bg-brand-700 text-white text-sm px-3 py-1 hover:bg-brand-800">
                      開く / ダウンロード
                    </span>
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-neutral-500 mt-4">
        ※ ファイルは <code>public/resources/</code> 内に保存し、href はそのまま参照できます。
      </p>
    </Section>
  )
}
