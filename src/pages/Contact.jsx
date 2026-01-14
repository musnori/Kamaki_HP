// src/pages/Contact.jsx
import { useState } from 'react'
import Section from '@/components/Section'
import { Send, CheckCircle2, Phone, HelpCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="bg-neutral-50 min-h-screen">
      <Section title="お問い合わせ" subtitle="製品についてのご質問や、お取引のご相談はこちらから。">
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* 左カラム：ガイド（iPhone最適化） */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            <div className="rounded-2xl bg-white border border-neutral-200 p-4 sm:p-5 shadow-sm">
              <h3 className="flex items-center gap-2 font-bold text-base text-neutral-900 mb-3">
                <Phone className="text-red-600" size={18}/>
                お電話でのお問い合わせ
              </h3>
              <a
                href="tel:0794380070"
                className="block text-center py-3 sm:py-0 sm:text-left"
              >
                <p className="text-xl sm:text-2xl font-bold tracking-widest text-red-700">079-438-0070</p>
              </a>
              <p className="text-xs text-neutral-500 flex items-center gap-2 mt-2 sm:mt-3 justify-center sm:justify-start">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                平日 9:00 - 17:00 (土日祝除く)
              </p>
            </div>

            <div className="bg-white/50 p-4 sm:p-5 rounded-2xl border border-neutral-100">
              <h4 className="flex items-center gap-2 font-bold text-sm text-neutral-900 mb-3">
                <HelpCircle className="text-neutral-400" size={16}/>
                よくあるご質問
              </h4>
              <ul className="space-y-2.5 text-[13px] sm:text-xs text-neutral-600 list-disc list-inside marker:text-red-300">
                <li>製品のカタログを送ってほしい</li>
                <li>近くの取扱店（ホームセンター等）を知りたい</li>
                <li>部品（バネ・ネジなど）の取り寄せは可能か</li>
                <li>修理・メンテナンスの依頼方法について</li>
              </ul>
              <p className="mt-3 text-xs text-neutral-400 leading-relaxed">
                ※ 上記のようなご質問もお気軽にお送りください。担当者より2営業日以内にご返信いたします。
              </p>
            </div>
          </div>

          {/* 右カラム：フォーム */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="h-full min-h-[350px] flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-white p-6 text-center shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">送信完了しました</h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6 leading-relaxed">
                  お問い合わせありがとうございます。<br/>
                  ご入力いただいたメールアドレスへ確認メールを自動送信しました。
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="rounded-full bg-neutral-100 px-5 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-200 transition-colors"
                >
                  新しい問い合わせを送る
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-5 sm:space-y-6"
              >
                {/* UX改善: フォームラベルの視認性向上 - text-xsからtext-smへ、間隔も調整 */}
                <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-800">お問い合わせ種別 <span className="text-red-500">*</span></label>
                    <select className="w-full rounded-xl border-neutral-300 bg-neutral-50 px-3 py-2.5 min-h-[44px] text-base focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 transition-all outline-none text-neutral-700">
                      <option>製品のご相談</option>
                      <option>購入・在庫の確認</option>
                      <option>修理・メンテナンス</option>
                      <option>資料請求</option>
                      <option>OEM・法人取引</option>
                      <option>その他</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-800">会社名</label>
                    <input className="w-full rounded-xl border-neutral-300 bg-neutral-50 px-3 py-2.5 min-h-[44px] text-base focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 transition-all outline-none" placeholder="例）株式会社Kamaki" />
                  </div>
                </div>

                <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                   <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-800">お名前 <span className="text-red-500">*</span></label>
                    <input required className="w-full rounded-xl border-neutral-300 bg-neutral-50 px-3 py-2.5 min-h-[44px] text-base focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 transition-all outline-none" placeholder="例）山田 太郎" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-800">メールアドレス <span className="text-red-500">*</span></label>
                    <input type="email" required className="w-full rounded-xl border-neutral-300 bg-neutral-50 px-3 py-2.5 min-h-[44px] text-base focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 transition-all outline-none" placeholder="example@mail.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-800">ご相談内容 <span className="text-red-500">*</span></label>
                  <textarea required rows={5} className="w-full rounded-xl border-neutral-300 bg-neutral-50 px-3 py-2.5 text-base leading-relaxed focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 transition-all outline-none resize-y" placeholder="製品の型番や、ご検討中の用途などをご記入ください。" />
                </div>

                <div className="pt-3 flex flex-col md:flex-row items-center gap-4 justify-between border-t border-neutral-100">
                  <p className="text-xs text-neutral-400 max-w-xs leading-relaxed text-center md:text-left">
                    ※ お客様の個人情報は、お問い合わせへの回答目的以外には使用いたしません。
                  </p>
                  <button className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 text-white px-6 py-3.5 min-h-[52px] font-bold text-base shadow-lg shadow-red-600/20 active:bg-red-700 transition-all">
                    送信する <Send size={18}/>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  )
}