import { useState } from 'react'
import Section from '@/components/Section'

const TABS = [
  { key: 'inquiry', label: 'お問い合わせ' },
  { key: 'purchase', label: '購入のご相談' },
  { key: 'repair', label: '修理のご相談' },
]

export default function Contact() {
  const [tab, setTab] = useState('inquiry')

  return (
    <Section title="お問い合わせ" subtitle="用途や状況に合わせてタブを切り替えてください。">
      <div className="mb-6 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 rounded-xl border ${tab===t.key ? 'bg-brand-600 text-white border-brand-600' : 'bg-white hover:bg-neutral-50'}`}
          >{t.label}</button>
        ))}
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); alert('送信内容を受け付けました。メール送信ロジックを実装してください。') }}
        className="grid gap-4 md:grid-cols-2"
      >
        <div className="grid gap-2">
          <label className="text-sm">会社名 / お名前</label>
          <input required className="rounded-xl border px-4 py-2" placeholder="例）株式会社〇〇 / 山田太郎" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">メールアドレス</label>
          <input type="email" required className="rounded-xl border px-4 py-2" placeholder="example@mail.com" />
        </div>
        <div className="grid gap-2 md:col-span-2">
          <label className="text-sm">件名</label>
          <input className="rounded-xl border px-4 py-2" placeholder="お問い合わせの件名" />
        </div>

        {tab === 'purchase' && (
          <div className="grid gap-2 md:col-span-2">
            <label className="text-sm">ご希望の製品・数量</label>
            <textarea rows={3} className="rounded-xl border px-4 py-2" placeholder="例）高精度カッターA1を3台、ダイヤ砥石G7を10枚 など" />
          </div>
        )}

        {tab === 'repair' && (
          <>
            <div className="grid gap-2">
              <label className="text-sm">製品名 / 型番</label>
              <input className="rounded-xl border px-4 py-2" placeholder="例）高精度カッターA1 / A1-100" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm">購入時期</label>
              <input className="rounded-xl border px-4 py-2" placeholder="例）2024年5月頃" />
            </div>
          </>
        )}

        <div className="grid gap-2 md:col-span-2">
          <label className="text-sm">内容</label>
          <textarea required rows={8} className="rounded-xl border px-4 py-2" placeholder="具体的なご相談内容をご記入ください。" />
        </div>

        <div className="md:col-span-2 flex items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">※ 送信ボタンはダミーです。Formspree / EmailJS / 自社API 等に差し替えてください。</p>
          <button className="inline-flex items-center gap-2 rounded-xl bg-brand-600 text-white px-5 py-2 hover:bg-brand-700">送信する</button>
        </div>
      </form>
    </Section>
  )
}
