// src/components/Footer.jsx
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '@/images/Kamaki_logo.png'

export default function Footer() {
  const telRaw = '079-438-0070'
  const telHref = 'tel:0794380070'
  const email = 'info@example.com' // 実際のアドレスに変更してください
  const address = '兵庫県加古川市八幡町船町１１４番地'
  // Google Map Search URL (より汎用的な形式)
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4 lg:gap-12">
          
          {/* ブランド情報 */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <img src={Logo} alt="Kamaki Logo" className="h-10 w-auto" />
              <span className="text-lg font-bold text-neutral-900">株式会社 Kamaki</span>
            </Link>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
              創業1887年。播州の地で培った伝統技術と最新設備で、
              現場のプロに愛される園芸刃物・農工具を製造しています。
            </p>
          </div>

          {/* サイトマップ */}
          <div>
            <h4 className="font-bold text-neutral-900 mb-4">コンテンツ</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><Link className="hover:text-brand-600 transition-colors" to="/products">製品一覧</Link></li>
              <li><Link className="hover:text-brand-600 transition-colors" to="/company">会社案内</Link></li>
              <li><Link className="hover:text-brand-600 transition-colors" to="/resources">カタログ・資料</Link></li>
              <li><Link className="hover:text-brand-600 transition-colors" to="/contact">お問い合わせ</Link></li>
            </ul>
          </div>

          {/* 連絡先 */}
          <div>
            <h4 className="font-bold text-neutral-900 mb-4">お問い合わせ</h4>
            <div className="space-y-4 text-sm text-neutral-600">
              <a
                href={telHref}
                className="flex items-start gap-3 hover:text-brand-600 transition-colors group"
              >
                <Phone size={18} className="mt-0.5 text-neutral-400 group-hover:text-brand-600"/>
                <span className="font-mono text-base font-medium text-neutral-800">{telRaw}</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-start gap-3 hover:text-brand-600 transition-colors group"
              >
                <Mail size={18} className="mt-0.5 text-neutral-400 group-hover:text-brand-600"/>
                <span className="break-all">{email}</span>
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-brand-600 transition-colors group"
              >
                <MapPin size={18} className="mt-0.5 text-neutral-400 group-hover:text-brand-600"/>
                <span>
                  {address}
                  <ExternalLink size={12} className="inline ml-1 opacity-50"/>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-100 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} KAMAKI (Kishimoto Agricultural Mfg. Co., Ltd.)</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-neutral-800">プライバシーポリシー</Link>
            <Link to="/terms" className="hover:text-neutral-800">サイト利用規約</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}