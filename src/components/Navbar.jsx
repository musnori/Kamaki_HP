import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'ホーム' },
  { to: '/company', label: '会社案内' },  
  { to: '/products', label: '各種製品情報' },
  { to: '/contact', label: 'お問い合わせ' },
  { to: '/resources', label: '参考資料' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const Item = ({ to, label }) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-lg text-sm md:text-[15px] transition-colors hover:bg-neutral-100 ${
          isActive ? 'text-brand-700' : 'text-neutral-700'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <div className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-soft" />
  <span className="font-semibold tracking-tight">株式会社 Kamaki</span>
</Link>


        <div className="hidden md:flex items-center gap-1">
          {navItems.map((n) => (
            <Item key={n.to} {...n} />
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-neutral-100"
          aria-label="メニュー"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col">
            {navItems.map((n) => (
              <Item key={n.to} {...n} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
