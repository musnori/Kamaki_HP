// src/pages/Contact.jsx
import { useState } from 'react'
import Section from '@/components/Section'
import { Send, CheckCircle2, Phone, HelpCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="bg-neutral-50 min-h-screen">
      <Section title="お問い合わせ" subtitle="製品についてのご質問や、お取引のご相談はこちらから。">
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* 左カラム：ガイド */}
          <div className="lg:col-span-1 space-y-8">
            <div className="rounded-2xl bg-white border border-neutral-200 p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-bold text-lg text-neutral-900 mb-4">
                <Phone className="text-brand-600" size={20}/>
                お電話でのお問い合わせ
              </h3>
              <p className="text-3xl font-bold tracking-widest text-brand-700 my-4">079-438-0070</p>
              <p className="text-sm text-neutral-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                平日 9:00 - 17:00 (土日祝除く)
              </p>
            </div>
            
            <div className="bg-white/50 p-6 rounded-2xl border border-neutral-100">
              <h4 className="flex items-center gap-2 font-bold text-neutral-900 mb-3">
                <HelpCircle className="text-neutral-400" size={18}/>
                よくあるご質問
              </h4>
              <ul className="space-y-3 text-sm text-neutral-600 list-disc list-inside marker:text-brand-300">
                <li>製品のカタログを送ってほしい</li>
                <li>近くの取扱店（ホームセンター等）を知りたい</li>
                <li>部品（バネ・ネジなど）の取り寄せは可能か</li>
                <li>修理・メンテナンスの依頼方法について</li>
              </ul>
              <p className="mt-4 text-xs text-neutral-400">
                ※ 上記のようなご質問もお気軽にお送りください。担当者より2営業日以内にご返信いたします。
              </p>
            </div>
          </div>

          {/* 右カラム：フォーム */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center rounded-3xl border border-green-200 bg-white p-8 text-center shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600 mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">送信完了しました</h3>
                <p className="text-neutral-600 max-w-md mx-auto mb-8 leading-relaxed">
                  お問い合わせありがとうございます。<br/>
                  ご入力いただいたメールアドレスへ確認メールを自動送信しました。
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="rounded-full bg-neutral-100 px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-200 transition-colors"
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
                className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-8"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">お問い合わせ種別 <span className="text-red-500">*</span></label>
                    <select className="w-full rounded-xl border-neutral-300 bg-neutral-50 px-4 py-3 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 transition-all outline-none text-neutral-700">
                      <option>製品のご相談</option>
                      <option>購入・在庫の確認</option>
                      <option>修理・メンテナンス</option>
                      <option>資料請求</option>
                      <option>OEM・法人取引</option>
                      <option>その他</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">会社名</label>
                    <input className="w-full rounded-xl border-neutral-300 bg-neutral-50 px-4 py-3 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 transition-all outline-none" placeholder="例）株式会社Kamaki" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                   <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">お名前 <span className="text-red-500">*</span></label>
                    <input required className="w-full rounded-xl border-neutral-300 bg-neutral-50 px-4 py-3 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 transition-all outline-none" placeholder="例）山田 太郎" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">メールアドレス <span className="text-red-500">*</span></label>
                    <input type="email" required className="w-full rounded-xl border-neutral-300 bg-neutral-50 px-4 py-3 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 transition-all outline-none" placeholder="example@mail.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">ご相談内容 <span className="text-red-500">*</span></label>
                  <textarea required rows={6} className="w-full rounded-xl border-neutral-300 bg-neutral-50 px-4 py-3 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 transition-all outline-none resize-y" placeholder="製品の型番や、ご検討中の用途などをご記入ください。" />
                </div>

                <div className="pt-4 flex flex-col md:flex-row items-center gap-6 justify-between border-t border-neutral-100">
                  <p className="text-xs text-neutral-400 max-w-xs">
                    ※ お客様の個人情報は、お問い合わせへの回答目的以外には使用いたしません。
                  </p>
                  <button className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 text-white px-8 py-4 font-bold shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:translate-y-[-2px] transition-all">
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