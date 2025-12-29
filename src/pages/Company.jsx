// src/pages/Company.jsx
import Logo from '@/images/Kamaki_logo.png'

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


const history = [
  { y: '1887（明治20）', t: '現社長祖祖父・岸本平太郎が播州鎌（草刈鎌）の製造を開始。' },
  { y: '1916（大正5）',  t: '播州地方で第1号となる機械式ベルトハンマーを導入。' },
  { y: '1938（昭和13）', t: '岸本平太郎逝去、岸本鉄太郎が継承。' },
  { y: '1947（昭和22）', t: '替刃式草刈鎌・自動押切機など農工具の製造開始。' },
  { y: '1961（昭和36）', t: '岸本鉄太郎が代表取締役社長就任。有限会社 岸本農工具製作所を創設。' },
  { y: '1967（昭和42）', t: '岸本伊久男が代表取締役社長就任。' },
  { y: '1968（昭和43）', t: '第一期工場拡張。高周波熱処理機・450t高性能プレスを導入。' },
  { y: '1974（昭和49）', t: '連続無酸化焼入炉を導入。' },
  { y: '1977（昭和52）', t: '新製品開発。米欧へ販売網を拡大。' },
  { y: '1981（昭和56）', t: '金属顕微鏡・投影機など検査機を導入、検査部門を確立。' },
  { y: '1983（昭和58）', t: '新工場用地4,500㎡を取得。新工場（第一期）建設着手。' },
  { y: '1984（昭和59）', t: '新事務所および第二期工場建設に着手、組立工程を新工場で開始。' },
  { y: '1985（昭和60）', t: '事務所・工場完成。コンピュータ導入。' },
  { y: '1987（昭和62）', t: '西ドイツ製・衝撃焼入機を導入。' },
  { y: '1995（平成7）',  t: '替刃式折込鋸の一貫生産ライン完成。' },
  { y: '1996（平成8）',  t: '高枝切製品のSGマーク工場認定を取得。' },
  { y: '2002（平成14）', t: 'Kamaki Webサイト開設。' },
  { y: '2006（平成18）', t: 'レーザー加工機を導入。' },
  { y: '2015（平成27）', t: '岸本柳平が代表取締役社長就任。岸本伊久男が会長就任。' },
]

const metrics = [
  { label: '創業', value: '1887年' },
  { label: '法人設立', value: '1962年' },
  { label: '従業員数', value: '20名' },
  { label: '生産拠点', value: '2工場' },
]

export default function Company() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      {/* ヘッダー */}
      <header className="mb-8 md:mb-10">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Kamaki Logo" className="h-10 w-10 rounded-xl ring-1 ring-neutral-200" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">会社概要</h1>
            <p className="text-neutral-600 mt-1">
              株式会社 Kamaki の基本情報・沿革・拠点情報をご案内します。
            </p>
          </div>
        </div>
      </header>

      {/* 本文（サイドバーなし・1カラム） */}
      <div className="space-y-10">
        <section className="rounded-3xl border bg-brand-50 p-6 md:p-8 shadow-soft">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">代表メッセージ</h2>
          <p className="mt-3 text-neutral-700">
            「道具は現場の生産性を左右する」—— 私たちは創業以来、刃物の切れ味と安全性にこだわり続けてきました。
            使う人の声を形にし、日々の作業が少しでも楽になる製品づくりをこれからも続けていきます。
          </p>
        </section>

        {/* 会社情報 */}
        <section id="about" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">会社情報</h2>
          <p className="mt-3 text-neutral-700">
            Kamaki は、園芸・農工具の製造販売を行うメーカーです。創業以来、品質と耐久性にこだわり、現場の作業効率を高める製品群を開発してきました。
          </p>

          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ['主要製品', '高枝切鋏／鋸／剪定工具 ほか'],
              ['強み', '軽さと剛性の両立・メンテ性'],
              ['対応', '量産・小ロット／OEM相談可'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border bg-white p-5 shadow-soft">
                <p className="text-xs uppercase tracking-widest text-neutral-500">{title}</p>
                <p className="mt-1 font-medium">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 事業内容 */}
        <section id="business" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">事業内容</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold">製品づくり</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc list-inside">
                <li>刃物の切れ味・耐久性を高める熱処理技術</li>
                <li>高所作業・安全性を考慮した製品設計</li>
                <li>OEM・小ロットの製品相談に対応</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold">サポート体制</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc list-inside">
                <li>用途に合わせた製品選定・導入相談</li>
                <li>カタログ・取扱説明書の提供</li>
                <li>修理・メンテナンスの相談窓口</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border bg-neutral-50 p-6">
            <p className="text-sm font-semibold text-neutral-700">製品提供の流れ</p>
            <div className="mt-3 grid md:grid-cols-3 gap-4 text-sm text-neutral-600">
              {['課題ヒアリング', '製品提案・製造', '納品・導入サポート'].map((step, index) => (
                <div key={step} className="rounded-xl border bg-white px-4 py-3 shadow-soft">
                  <p className="text-xs text-neutral-500">Step {index + 1}</p>
                  <p className="font-medium text-neutral-800">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 企業理念 */}
        <section id="philosophy" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">企業理念</h2>
          <div className="mt-3 rounded-2xl border bg-white p-6 shadow-soft">
            <p className="text-neutral-700">
              「道具の基本性能を磨き続け、現場に安心と生産性を届ける」—— Kamaki は現場目線の改良を積み重ね、長く使える品質で社会に貢献します。
            </p>
          </div>
        </section>

        {/* 数字で見る */}
        <section id="metrics" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">数字で見るKamaki</h2>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border bg-white p-5 text-center shadow-soft">
                <p className="text-xs uppercase tracking-widest text-neutral-500">{metric.label}</p>
                <p className="mt-2 text-2xl font-semibold text-brand-700">{metric.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 概要・データ */}
        <section id="facts" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">概要・データ</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border bg-white shadow-soft">
            <table className="w-full text-sm">
              <tbody>
                {facts.map((row) => (
                  <tr key={row.k} className="border-b last:border-0">
                    <th className="w-40 text-left bg-neutral-50 px-4 py-3 font-semibold">{row.k}</th>
                    <td className="px-4 py-3">
                      {row.href ? (
                        <a href={row.href} className="text-brand-700 hover:underline">{row.v}</a>
                      ) : (
                        row.v
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>


        {/* 沿革 */}
        <section id="history" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">沿革</h2>
          <ol className="mt-4 relative border-s">
            {history.map((h, i) => (
              <li key={i} className="ms-6 py-3">
                <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-brand-600"></span>
                <p className="text-sm font-semibold text-neutral-700">{h.y}</p>
                <p className="text-neutral-700">{h.t}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* アクセス */}
        <section id="access" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">アクセス</h2>
          <div className="mt-4 rounded-2xl overflow-hidden border bg-white shadow-soft">
            <iframe
              title="map"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3822.581876234293!2d134.909166!3d34.793392!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQ3JzM0LjUiTiAxMzTCsDU0JzI3LjIiRQ!5e1!3m2!1sja!2sus!4v1756434319398!5m2!1sja!2sus"
              style={{ border: 0 }}
              allowFullScreen=""
            />
            <div className="p-4 text-sm text-neutral-700">
              兵庫県加古川市八幡町船町１１４番地（
              <a
                className="text-brand-700 underline"
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/search/?api=1&query=%E5%85%B5%E5%BA%AB%E7%9C%8C%E5%8A%A0%E5%8F%A4%E5%B7%9D%E5%B8%82%E5%85%AB%E5%B9%A1%E7%94%BA%E8%88%B9%E7%94%BA%EF%BC%91%EF%BC%91%EF%BC%94%E7%95%AA%E5%9C%B0"
              >
                Googleマップで開く
              </a>
              )
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
