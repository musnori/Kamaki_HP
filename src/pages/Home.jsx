import Section from '@/components/Section'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/ProductCard'
import { PRODUCTS } from '@/data/products'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-100 via-white to-brand-50"/>
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight"
              >
                現場品質を、もっとスマートに。
              </motion.h1>
              <p className="mt-4 text-neutral-700 md:text-lg">
                切断・研磨・計測・工具まで。用途に合わせた最適な製品選定とサポートをご提供します。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/products" className="inline-flex items-center gap-2 rounded-xl bg-brand-600 text-white px-4 py-2 shadow-soft hover:bg-brand-700">
                  各種製品を見る <ArrowRight size={18}/>
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-neutral-50">
                  見積・相談する
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-3xl bg-gradient-to-br from-neutral-200 to-neutral-100 shadow-soft"/>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-white border shadow-soft"/>
              <div className="absolute -top-4 -right-6 w-28 h-28 rounded-full bg-brand-200/60"/>
            </div>
          </div>
        </div>
      </section>

      <Section title="取扱カテゴリー" subtitle="現場で使いやすい定番を中心に、用途別にご提案します。">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[{t:'切断'},{t:'研磨'},{t:'計測'},{t:'工具'}].map(({t}) => (
            <div key={t} className="rounded-2xl border bg-white p-5 shadow-soft hover:shadow transition-shadow">
              <h3 className="font-semibold">{t}</h3>
              <p className="text-sm text-neutral-600 mt-1">代表的な製品群をピックアップ。</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="ピックアップ製品">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PRODUCTS.slice(0,6).map((p) => (
            <ProductCard key={p.id} item={p} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/products" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-neutral-50">
            全製品を見る <ArrowRight size={18}/>
          </Link>
        </div>
      </Section>

      <Section title="アクセス" subtitle="所在地（仮）。実住所に差し替えてご利用ください。">
        <div className="rounded-2xl overflow-hidden border bg-white shadow-soft">
          <iframe
            title="map"
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.957343!2d139.767125!3d35.681236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sja!2sjp!4v00000000000"
            className="block"
          />
        </div>
      </Section>
    </div>
  )
}
