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
      // 余白を削減して、より引き締まったデザインに
      className={`py-10 md:py-16 ${bg} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        {(title || subtitle) && (
          <header className="mb-8 md:mb-10 text-center md:text-left">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 max-w-2xl text-base text-neutral-600 md:text-lg">
                {subtitle}
              </p>
            )}
            <div className="mt-4 h-1 w-12 bg-red-600 rounded-full mx-auto md:mx-0 opacity-30"/>
          </header>
        )}
        {children}
      </div>
    </section>
  )
}