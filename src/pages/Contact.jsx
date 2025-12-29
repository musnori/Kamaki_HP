import { useState } from 'react'
import Section from '@/components/Section'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <Section title="お問い合わせ" subtitle="無理な営業は行いません。お気軽にご相談ください。">
      <div className="mb-8 rounded-2xl border bg-brand-50 p-5 text-sm text-brand-900">
        <p className="font-semibold">ご相談内容に応じて、最短1営業日以内にご返信します。</p>
        <p className="mt-1 text-neutral-700">製品の選定・在庫確認・資料請求など、気軽にご相談ください。</p>
      </div>

      {submitted && (
        <div className="mb-6 rounded-2xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-900">
          送信ありがとうございました。担当者より2営業日以内にご連絡いたします。追加のご要望があれば追ってご返信ください。
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSubmitted(true)
        }}
        className="grid gap-4 md:grid-cols-2"
      >
        <div className="grid gap-2 md:col-span-2">
          <label className="text-sm">お問い合わせ種別</label>
          <select className="rounded-xl border px-4 py-2">
            <option>製品のご相談</option>
            <option>購入・在庫の確認</option>
            <option>修理・メンテナンス</option>
            <option>資料請求</option>
            <option>その他</option>
          </select>
        </div>
        <div className="grid gap-2">
          <label className="text-sm">会社名（任意）</label>
          <input className="rounded-xl border px-4 py-2" placeholder="例）株式会社〇〇" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">お名前</label>
          <input required className="rounded-xl border px-4 py-2" placeholder="例）山田 太郎" />
        </div>
        <div className="grid gap-2 md:col-span-2">
          <label className="text-sm">メールアドレス</label>
          <input type="email" required className="rounded-xl border px-4 py-2" placeholder="example@mail.com" />
        </div>
        <div className="grid gap-2 md:col-span-2">
          <label className="text-sm">ご相談内容</label>
          <textarea required rows={6} className="rounded-xl border px-4 py-2" placeholder="具体的なご相談内容をご記入ください。" />
        </div>

        <div className="md:col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-neutral-500">※ 送信ボタンはダミーです。Formspree / EmailJS / 自社API 等に差し替えてください。</p>
          <button className="inline-flex items-center justify-center rounded-xl bg-brand-600 text-white px-6 py-2 hover:bg-brand-700">
            送信する
          </button>
        </div>
      </form>
    </Section>
  )
}
