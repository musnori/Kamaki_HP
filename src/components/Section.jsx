export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {title && (
          <header className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
            {subtitle && (
              <p className="text-neutral-600 mt-2 max-w-2xl">{subtitle}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
