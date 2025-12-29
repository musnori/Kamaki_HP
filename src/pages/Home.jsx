// pages/Home.jsx
import Section from '@/components/Section'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Sparkles, Users } from 'lucide-react'
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
                1887年創業の園芸刃物メーカーが、<br className="hidden md:block" />
                現場に強い切れ味を届けます。
              </motion.h1>
              <p className="mt-4 text-neutral-700 md:text-lg">
                KAMAKIは園芸・農工具の製造販売を行うBtoBメーカーです。用途・現場環境に合わせて最適な製品選定と導入サポートを行います。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/products" className="inline-flex items-center gap-2 rounded-xl bg-brand-600 text-white px-5 py-2 shadow-soft hover:bg-brand-700">
                  製品を見る <ArrowRight size={18}/>
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border px-5 py-2 hover:bg-neutral-50">
                  お問い合わせ
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-600">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-600" />
                  導入相談・OEM対応可
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-600" />
                  全国出荷・小ロット対応
                </span>
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

      {/* 強み */}
      <Section title="KAMAKIが選ばれる理由" subtitle="現場目線の製品づくりとサポート体制で、導入から運用まで伴走します。">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: '品質と耐久性',
              body: '長年培った熱処理・刃付け技術で、長く使える品質を実現。',
            },
            {
              icon: Sparkles,
              title: '現場改善の提案力',
              body: '用途・作業量に合わせた製品選定と導入のご相談に対応。',
            },
            {
              icon: Users,
              title: 'BtoB対応',
              body: '小ロットから量産まで。法人・業務用の相談窓口を用意。',
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-2xl border bg-white p-6 shadow-soft">
                <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.body}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* 目的別導線 */}
      <Section title="目的別のご案内" subtitle="お探しの情報に最短でたどり着けるよう、目的別に整理しました。">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: '製品を探している方',
              body: '用途・作業別に製品を一覧で確認できます。',
              link: '/products',
              cta: '製品一覧を見る',
            },
            {
              title: '会社について知りたい方',
              body: '企業姿勢・実績・拠点情報をまとめています。',
              link: '/company',
              cta: '会社概要を見る',
            },
            {
              title: '相談・問い合わせをしたい方',
              body: '導入検討や在庫相談など、気軽にご相談ください。',
              link: '/contact',
              cta: 'お問い合わせ',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border bg-white p-6 shadow-soft flex flex-col">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 flex-1">{item.body}</p>
              <Link
                to={item.link}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800"
              >
                {item.cta} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* ピックアップ製品 */}
      <Section title="ピックアップ製品">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PRODUCTS.slice(0, 3).map((p) => (
            <ProductCard key={p.id} item={p} variant="compact" />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/products" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-neutral-50">
            全製品を見る <ArrowRight size={18}/>
          </Link>
        </div>
      </Section>

      {/* アクセス */}
      <Section title="アクセス" subtitle="所在地（兵庫県加古川市八幡町船町１１４番地）">
        <div className="rounded-2xl overflow-hidden border bg-white shadow-soft">
          <iframe
            title="map"
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3822.581876234293!2d134.909166!3d34.793392!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQ3JzM0LjUiTiAxMzTCsDU0JzI3LjIiRQ!5e1!3m2!1sja!2sus!4v1756434319398!5m2!1sja!2sus"
            style={{ border: 0 }}
            allowFullScreen=""
          />
          <div className="p-4 text-sm text-neutral-700">
            兵庫県加古川市八幡町船町１１４番地
          </div>
        </div>
      </Section>
    </div>
  )
}
