// src/pages/Company.jsx
import Logo from '@/images/Kamaki_logo.png'
import { Building2, MapPin, Phone } from 'lucide-react'

// データは変更なし（facts, history, metrics変数はそのまま使用してください）
const facts = [
  { k: 'ブランド名', v: '株式会社 Kamaki' },
  { k: '法人名', v: '有限会社 岸本農工具製作所' },
  { k: '所在地（本社）', v: '兵庫県加古川市八幡町船町１１４番地' },
  { k: '電話', v: '079-438-0070', href: 'tel:0794380070' },
  { k: 'FAX', v: '079-438-6362' },
  { k: '代表者', v: '岸本 伊久男' },
  { k: '創業', v: '明治20年（1887）' },
  { k: '法人設立', v: '昭和36年（1962）' },
  { k: '資本金', v: '300万円' },
  { k: '従業員数', v: '20名' },
  { k: '第二工場', v: '兵庫県加古川市八幡町船町１１５番地' },
  { k: '事業内容', v: '園芸用刃物の製造販売（“KAMAKI”ブランド）' },
]

const history = [
  { y: '1887', t: '現社長祖祖父・岸本平太郎が播州鎌（草刈鎌）の製造を開始。', sub: '明治20年' },
  { y: '1916', t: '播州地方で第1号となる機械式ベルトハンマーを導入。', sub: '大正5年' },
  // ... (他のデータも同様に。年号を強調するため少し構造を変えるとより良いですが、既存データ配列でも動くように書きます)
  // 既存データ配列を使う場合のMappingにご注意ください
  // ここでは既存の history 配列をそのまま使う想定でレンダリング部分を工夫します
]
// ※ history配列の中身はそのままでOKです。

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
        
        {/* 代表メッセージ：読みやすく枠で囲む */}
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

        {/* 会社データ：見やすいカード型テーブル */}
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

        {/* 沿革：タイムラインデザインの改善 */}
        <section id="history" className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4 sticky top-24">沿革</h2>
            <p className="text-neutral-600">
              明治20年の鎌製造から始まり、時代の変化と共に園芸工具メーカーへと進化してきました。
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="border-l-2 border-brand-100 ml-3 space-y-10 py-2">
              {/* history変数は元のファイルからimportまたは定義してください */}
              {history && history.map((h, i) => (
                <div key={i} className="relative pl-8 md:pl-12 group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-brand-300 group-hover:bg-brand-600 transition-colors shadow-sm" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-1">
                    <span className="text-xl font-bold text-brand-800 tabular-nums">{h.y}</span>
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