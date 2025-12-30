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
      // シンプルな記述に変更しました
      className={`py-16 md:py-24 ${bg} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        {(title || subtitle) && (
          <header className="mb-10 md:mb-14 text-center md:text-left">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 max-w-2xl text-lg text-neutral-600 md:text-xl">
                {subtitle}
              </p>
            )}
            <div className="mt-6 h-1 w-16 bg-brand-600 rounded-full mx-auto md:mx-0 opacity-20"/>
          </header>
        )}
        {children}
      </div>
    </section>
  )
}