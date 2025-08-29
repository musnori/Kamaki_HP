import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700" />
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
          <p className="flex items-center gap-2"><Phone size={16}/> 079-438-0070</p>
          <p className="flex items-center gap-2"><Mail size={16}/> info@example.com</p>
          <p className="flex items-center gap-2"><MapPin size={16}/> 兵庫県加古川市八幡町船町１１４番地</p>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-500 py-5 border-t">
  © {new Date().getFullYear()} 株式会社 Kamaki
</div>

    </footer>
  )
}
