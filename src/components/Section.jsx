// src/components/Section.jsx
// import clsx from 'clsx' ← これを削除しました

export default function Section({ 
  id, 
  title, 
  subtitle, 
  children, 
  bg = "bg-transparent", // デフォルトは透明
  className = ""         // 追加のクラス用
}) {
  return (
    <section
      id={id}
      // 余白を削減して、より引き締まったデザインに（iPhone最適化）
      className={`py-8 sm:py-10 md:py-16 ${bg} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(title || subtitle) && (
          <header className="mb-6 sm:mb-8 md:mb-10 text-center md:text-left">
            {title && (
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 max-w-2xl text-sm sm:text-base text-neutral-600 md:text-lg">
                {subtitle}
              </p>
            )}
            {/* UX改善: アンダーラインの視認性向上 - opacity削除でより明確に */}
            <div className="mt-3 sm:mt-4 h-1 w-14 bg-red-500 rounded-full mx-auto md:mx-0"/>
          </header>
        )}
        {children}
      </div>
    </section>
  )
}