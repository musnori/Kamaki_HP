// src/pages/Contact.jsx
import { useState } from 'react'
import Section from '@/components/Section'
import { Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="bg-white min-h-screen">
      <Section title="お問い合わせ" subtitle="製品についてのご質問や、お取引のご相談はこちらから。">
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* 左カラム：ガイド */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl bg-brand-50 p-6 text-brand-900">
              <h3 className="font-bold text-lg mb-2">お電話でのお問い合わせ</h3>
              <p className="text-2xl font-bold tracking-widest my-2">079-438-0070</p>
              <p className="text-sm opacity-80">平日 9:00 - 17:00 (土日祝除く)</p>
            </div>
            
            <div className="text-sm text-neutral-600 leading-relaxed">
              <p className="mb-4">
                <span className="font-bold text-neutral-900">よくあるご質問：</span><br/>
                ・カタログを送ってほしい<br/>
                ・近くの取扱店を知りたい<br/>
                ・部品の取り寄せは可能か<br/>
                <br/>
                上記のようなご質問もお気軽にお送りください。担当者より2営業日以内にご返信いたします。
              </p>
            </div>
          </div>

          {/* 右カラム：フォーム */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-3xl border border-green-200 bg-green-50 p-8 text-center animate-in fade-in slide-in-from-bottom-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">送信完了しました</h3>
                <p className="text-green-800">
                  お問い合わせありがとうございます。<br/>
                  確認メールを自動送信しましたのでご確認ください。
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-green-700 hover:underline"
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
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">お問い合わせ種別 <span className="text-red-500">*</span></label>
                    <select className="w-full rounded-xl border-neutral-300 bg-neutral-50 px-4 py-3 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-200 transition-all outline-none">
                      <option>製品のご相談</option>
                      <option>購入・在庫の確認</option>
                      <option>修理・メンテナンス</option>
                      <option>資料請求</option>
                      <option>OEM・法人取引</option>
                      <option>その他</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">会社名</label>
                    <input className="w-full rounded-xl border-neutral-300 bg-neutral-50 px-4 py-3 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-200 transition-all outline-none" placeholder="例）株式会社Kamaki" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                   <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">お名前 <span className="text-red-500">*</span></label>
                    <input required className="w-full rounded-xl border-neutral-300 bg-neutral-50 px-4 py-3 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-200 transition-all outline-none" placeholder="例）山田 太郎" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">メールアドレス <span className="text-red-500">*</span></label>
                    <input type="email" required className="w-full rounded-xl border-neutral-300 bg-neutral-50 px-4 py-3 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-200 transition-all outline-none" placeholder="example@mail.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-700">ご相談内容 <span className="text-red-500">*</span></label>
                  <textarea required rows={6} className="w-full rounded-xl border-neutral-300 bg-neutral-50 px-4 py-3 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-200 transition-all outline-none resize-y" placeholder="製品の型番や、ご検討中の用途などをご記入ください。" />
                </div>

                <div className="pt-4 flex flex-col md:flex-row items-center gap-4 justify-between">
                  <p className="text-xs text-neutral-400">
                    ※ 個人情報の取り扱いについてはプライバシーポリシーをご確認ください。
                  </p>
                  <button className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 text-white px-8 py-3.5 font-bold shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:translate-y-[-2px] transition-all">
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