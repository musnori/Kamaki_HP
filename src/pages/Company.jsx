// src/pages/Company.jsx
import Logo from '@/images/Kamaki_logo.png'
import { Phone, MapPin } from 'lucide-react'

const facts = [
  // 表記の都合で「ブランド名 / 法人名」を分けています
  { k: 'ブランド名', v: '株式会社 Kamaki' },
  { k: '法人名', v: '有限会社 岸本農工具製作所' },

  { k: '所在地（本社）', v: '兵庫県加古川市八幡町船町１１４番地' },
  { k: '電話', v: '079-438-0070', href: 'tel:0794380070' },
  { k: 'FAX', v: '079-438-6362' },

  // 公式会社案内ページの記載を踏襲
  { k: '代表者', v: '岸本 伊久男' },
  { k: '創業', v: '明治20年（1887）' },
  { k: '法人設立', v: '昭和36年（1962）' },
  { k: '資本金', v: '300万円' },
  { k: '従業員数', v: '20名' },

  { k: '第二工場', v: '兵庫県加古川市八幡町船町１１５番地' },
  { k: '事業内容', v: '園芸用刃物の製造販売（“KAMAKI”ブランド）' },
]

// 沿革データ（ご指定の内容に更新）
const history = [
  { y: '1887', sub: '明治20年', t: '現社長祖祖父（岸本平太郎）により播州鎌(草刈鎌)の製造を始める。' },
  { y: '1916', sub: '大正5年',  t: '播州地方、第一号機械式ベルトハンマー導入。' },
  { y: '1938', sub: '昭和13年', t: '岸本平太郎没後、現在の祖父（岸本鉄太郎）が継ぐ。' },
  { y: '1947', sub: '昭和22年', t: '替刃式草刈鎌から自動押切機、その他農工具の製造を始める。' },
  { y: '1961', sub: '昭和36年', t: '代表取締役社長に岸本鉄太郎就任。(有)岸本農工具製作所 創設。' },
  { y: '1967', sub: '昭和42年', t: '代表取締役社長に、岸本伊久男就任。' },
  { y: '1968', sub: '昭和43年', t: '第一期工場拡張。高周波熱処理機及び、450トン高性能プレス導入。' },
  { y: '1974', sub: '昭和49年', t: '連続無酸化焼入炉導入。' },
  { y: '1977', sub: '昭和52年', t: '新製品開発。アメリカ・ヨーロッパに販売網を拡げる。' },
  { y: '1981', sub: '昭和56年', t: '金属顕微鏡、透視角度機等、各種製品検査機を導入。検査部門の確立。' },
  { y: '1983', sub: '昭和58年', t: '新工場設立の為、4,500平方メートルを購入。新工場第一期工場建設を着手。' },
  { y: '1984', sub: '昭和59年', t: '新事務所及び、第二期工場建設を着手。' },
  { y: '1985', sub: '昭和60年', t: '事務所及び、工場完成。' },
  { y: '1987', sub: '昭和62年', t: '西ドイツから衝撃焼入機導入。' },
  { y: '1995', sub: '平成7年',  t: '替刃式折込鋸、一貫生産ライン完成。' },
  { y: '1996', sub: '平成8年',  t: '高枝切製品安全認定マーク（SGマーク）工場認定取得。' },
  { y: '2002', sub: '平成14年', t: 'カマキWebサイトを開設。' },
  { y: '2006', sub: '平成18年', t: 'レーザー加工機導入。' },
  { y: '2015', sub: '平成27年', t: '代表取締役社長に、岸本柳平就任。会長に、岸本伊久男就任。' },
]

export default function Company() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-neutral-50 py-12 border-b border-neutral-100">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <img src={Logo} alt="Kamaki Logo" className="h-20 w-20 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-neutral-200" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">会社概要</h1>
              <p className="mt-2 text-neutral-600 text-lg">
                130年を超える歴史と技術。兵庫・播州から世界へ。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-20 space-y-24">
        
        {/* 代表メッセージ */}
        <section className="relative overflow-hidden rounded-3xl bg-brand-900 px-6 py-12 md:px-12 md:py-16 text-center text-white shadow-xl">
           <div className="absolute top-0 left-0 h-32 w-32 -translate-x-10 -translate-y-10 rounded-full bg-white/10 blur-3xl"/>
           <div className="absolute bottom-0 right-0 h-40 w-40 translate-x-10 translate-y-10 rounded-full bg-brand-500/20 blur-3xl"/>
           
           <h2 className="relative text-2xl md:text-3xl font-bold tracking-tight">「道具は現場の生産性を左右する」</h2>
           <p className="relative mt-6 text-brand-100 leading-loose max-w-3xl mx-auto text-lg">
             私たちは創業以来、刃物の切れ味と安全性にこだわり続けてきました。<br className="hidden md:block"/>
             使う人の声を形にし、日々の作業が少しでも楽になる製品づくりを<br className="hidden md:block"/>
             これからも続けていきます。
           </p>
        </section>

        {/* 会社データ */}
        <section id="facts" className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4 sticky top-24">基本情報</h2>
            <p className="text-neutral-600">
              本社工場および第二工場にて、一貫生産体制を整えています。
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <table className="w-full text-sm md:text-base">
                <tbody className="divide-y divide-neutral-100">
                  {facts.map((row) => (
                    <tr key={row.k} className="group hover:bg-neutral-50 transition-colors">
                      <th className="w-1/3 px-6 py-4 text-left font-semibold text-neutral-500 bg-neutral-50/50 group-hover:bg-neutral-100/50">{row.k}</th>
                      <td className="px-6 py-4 text-neutral-900 font-medium">
                        {row.href ? (
                          <a href={row.href} className="text-brand-700 hover:underline flex items-center gap-2">
                            {row.k === '電話' && <Phone size={16}/>}
                            {row.v}
                          </a>
                        ) : (
                          row.v
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 沿革（タイムライン） */}
        <section id="history" className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4 sticky top-24">沿革</h2>
            <p className="text-neutral-600">
              明治20年の鎌製造から始まり、時代の変化と共に園芸工具メーカーへと進化してきました。
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="border-l-2 border-brand-100 ml-3 space-y-10 py-2">
              {history.map((h, i) => (
                <div key={i} className="relative pl-8 md:pl-12 group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-brand-300 group-hover:bg-brand-600 transition-colors shadow-sm" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-2">
                    <span className="text-2xl font-bold text-brand-800 tabular-nums">{h.y}</span>
                    <span className="text-sm font-semibold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">{h.sub}</span>
                  </div>
                  <p className="text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors">
                    {h.t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* アクセス */}
        <section id="access" className="rounded-3xl border border-neutral-200 bg-neutral-50 p-2">
          <div className="rounded-2xl overflow-hidden shadow-sm h-[400px] relative group">
            <iframe
              title="map"
              width="100%"
              height="100%"
              loading="lazy"
              src="https://maps.google.com/maps?q=兵庫県加古川市八幡町船町１１４番地&t=&z=15&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0 }}
              className="grayscale group-hover:grayscale-0 transition-all duration-500"
            />
             <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl border border-white/50 shadow-sm flex items-start gap-3">
               <MapPin className="text-brand-600 shrink-0 mt-1" />
               <div>
                 <p className="font-bold text-neutral-900">本社工場</p>
                 <p className="text-sm text-neutral-600">兵庫県加古川市八幡町船町１１４番地</p>
               </div>
               <a 
                 href="https://maps.google.com/maps?q=兵庫県加古川市八幡町船町１１４番地" 
                 target="_blank" 
                 rel="noreferrer"
                 className="ml-auto text-xs bg-brand-600 text-white px-3 py-2 rounded-lg hover:bg-brand-700 transition-colors"
               >
                 GoogleMap
               </a>
             </div>
          </div>
        </section>
      </div>
    </div>
  )
}