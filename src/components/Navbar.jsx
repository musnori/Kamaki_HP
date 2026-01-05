// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import Logo from '@/images/Kamaki.png'

const navItems = [
  { to: '/', label: 'ホーム' },
  { to: '/company', label: '会社案内' },  
  { to: '/products', label: '製品情報' },
  { to: '/resources', label: '参考資料' },
  { to: '/contact', label: 'お問い合わせ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // ページ遷移時にモバイルメニューを閉じる
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* ロゴエリア */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={Logo} 
            alt="Kamaki Logo" 
            className="h-8 w-auto transition-transform group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-[15px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-red-50 text-red-700'
                    : 'text-neutral-600 hover:text-red-600 hover:bg-neutral-50'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-50 text-neutral-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-red-500/20"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b ${
          open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-red-50 text-red-700'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <div className="pt-4 mt-2 border-t border-neutral-100">
            <a 
              href="tel:0794380070" 
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-neutral-900 text-white py-3 text-sm font-bold"
            >
              <Phone size={16} /> 079-438-0070
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}