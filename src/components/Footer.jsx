import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '@/images/Kamaki_logo.png'

export default function Footer() {
  const telRaw = '079-438-0070'
  const telHref = 'tel:0794380070' // ハイフン無しが安定
  const email = 'info@example.com'
  const address = '兵庫県加古川市八幡町船町１１４番地'
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={Logo} alt="Kamaki Logo" className="h-8 w-auto" />
            <span className="font-semibold">株式会社 Kamaki</span>
          </div>
          <p className="text-sm text-neutral-600">
            精密工具・機械等の各種製品情報とサポートをご提供します。
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">クイックリンク</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-brand-700" to="/products">各種製品情報</Link></li>
            <li><Link className="hover:text-brand-700" to="/contact">お問い合わせ</Link></li>
            <li><Link className="hover:text-brand-700" to="/resources">参考資料</Link></li>
          </ul>
        </div>

        <div className="space-y-2 text-sm">
          <h4 className="font-semibold mb-3">お問い合わせ</h4>

          {/* 電話：スマホならタップで発信 */}
          <a
            href={telHref}
            className="flex items-center gap-2 hover:text-brand-700"
            aria-label={`電話する ${telRaw}`}
          >
            <Phone size={16}/> {telRaw}
          </a>

          {/* メール：既定のメールアプリを起動 */}
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 hover:text-brand-700"
            aria-label={`メールを送る ${email}`}
          >
            <Mail size={16}/> {email}
          </a>

          {/* 住所：Google マップを新規タブで開く */}
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-brand-700"
            aria-label={`地図で開く ${address}`}
          >
            <MapPin size={16}/> {address}
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-neutral-500 py-5 border-t">
        © {new Date().getFullYear()} 株式会社 Kamaki
      </div>
    </footer>
  )
}
