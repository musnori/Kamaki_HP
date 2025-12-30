// src/pages/Resources.jsx
import Section from '@/components/Section'
import { FileText, Image as ImageIcon, Download } from 'lucide-react'

const items = [
  { id: 'r1', title: '太枝切鋏-刃先（価格無）', href: '/resources/太枝切鋏-刃先（価格無）.pdf', type: 'PDF', category: '製品カタログ', popular: true },
  { id: 'r2', title: 'かるたか（価格無）', href: '/resources/かるたか(価格無).pdf', type: 'PDF', category: '製品カタログ', popular: true },
  { id: 'r3', title: 'かるたか全体（価格無）', href: '/resources/かるたか全体(価格無).pdf', type: 'PDF', category: '製品カタログ' },
  { id: 'r4', title: 'かるのび-バイパス（価格無）', href: '/resources/かるのび-バイパス(価格無).pdf', type: 'PDF', category: '製品カタログ' },
  { id: 'r5', title: 'かるのび-アンビル（価格無）', href: '/resources/かるのび-アンビル（価格無）.pdf', type: 'PDF', category: '製品カタログ', popular: true },
  { id: 'r6', title: 'きりん（価格無）', href: '/resources/きりん(価格無).pdf', type: 'PDF', category: '製品カタログ' },
  { id: 'r7', title: 'レバーピン交換', href: '/resources/レバーピン交換.jpg', type: 'JPG', category: 'メンテナンス資料', popular: true },
  { id: 'r8', title: '替刃取付（1830）', href: '/resources/替刃取付（1830）.jpg', type: 'JPG', category: '取扱説明' },
  { id: 'r9', title: 'ポール調節', href: '/resources/ポール調節.jpg', type: 'JPG', category: '取扱説明' },
]

export default function Resources() {
  const popularItems = items.filter((item) => item.popular)
  const categories = Array.from(new Set(items.map((item) => item.category)))

  const Icon = ({ type }) => {
    if (type === 'PDF') return <FileText className="text-red-500" size={24} />
    return <ImageIcon className="text-blue-500" size={24} />
  }

  return (
    <div className="bg-neutral-50 min-h-screen">
      <Section title="資料・情報" subtitle="カタログやメンテナンス手順書をダウンロードいただけます。">
        
        {popularItems.length > 0 && (
          <div className="mb-12">
            <h3 className="flex items-center gap-2 text-xl font-bold text-neutral-800 mb-6">
              <span className="text-amber-500">★</span> よく見られている資料
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularItems.map((it) => (
                <ResourceCard key={it.id} item={it} Icon={Icon} highlight />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-lg font-bold text-neutral-700 mb-4 border-l-4 border-brand-500 pl-3">
                {category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items
                  .filter((item) => item.category === category)
                  .map((it) => (
                    <ResourceCard key={it.id} item={it} Icon={Icon} />
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-neutral-200/50 p-4 text-xs text-neutral-500">
          <p>※ ファイルが開かない場合は、Adobe Acrobat Readerなどの閲覧ソフトをご確認ください。</p>
        </div>
      </Section>
    </div>
  )
}

function ResourceCard({ item, Icon, highlight }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col justify-between rounded-xl border p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${
        highlight ? 'bg-white border-brand-200 ring-4 ring-brand-50/50' : 'bg-white border-neutral-200'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${highlight ? 'bg-brand-50' : 'bg-neutral-50'}`}>
          <Icon type={item.type} />
        </div>
        <div>
          <span className="mb-1 inline-block rounded bg-neutral-100 px-2 py-0.5 text-[10px] font-bold text-neutral-500">
            {item.type}
          </span>
          <h4 className="font-bold text-neutral-900 leading-snug group-hover:text-brand-700 transition-colors">
            {item.title}
          </h4>
        </div>
      </div>
      
      <div className="mt-5 flex items-center justify-end text-sm font-semibold text-brand-600 opacity-0 transition-opacity group-hover:opacity-100">
        ダウンロード <Download size={16} className="ml-1" />
      </div>
    </a>
  )
}