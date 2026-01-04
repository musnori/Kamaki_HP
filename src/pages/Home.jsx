// src/pages/Home.jsx
import Section from '@/components/Section'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Sparkles, Users, MapPin, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/ProductCard'
import { PRODUCTS } from '@/data/products'

export default function Home() {
  return (
    <div className="bg-neutral-50/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/50 via-white to-transparent"/>
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold tracking-wide mb-3">
                  SINCE 1887
                </span>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-neutral-900">
                  プロが選ぶ、<br />
                  <span className="text-brand-600">確かな切れ味。</span>
                </h1>
                <p className="mt-4 text-neutral-600 text-base md:text-lg leading-relaxed">
                  兵庫県加古川市から世界へ。創業130年を超える園芸刃物メーカー「KAMAKI」は、現場の声を形にした高枝切鋏や剪定工具をお届けします。
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link to="/products" className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 text-white px-6 py-3 font-medium shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:translate-y-[-2px] transition-all">
                    製品一覧を見る <ArrowRight size={18}/>
                  </Link>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3 font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-all">
                    お問い合わせ
                  </Link>
                </div>

                <div className="mt-6 flex items-center gap-4 text-xs md:text-sm text-neutral-500 font-medium">
                  <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-brand-600"/> OEM/小ロット対応</span>
                  <span className="flex items-center gap-1.5"><MapPin size={16} className="text-brand-600"/> 全国配送・サポート</span>
                </div>
              </motion.div>
            </div>

            <div className="relative hidden md:block">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-brand-50 blur-3xl opacity-50"/>
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-neutral-100 to-white border border-white shadow-xl p-2">
                <div className="h-full w-full rounded-xl bg-neutral-200 overflow-hidden relative">
                   {/* ここにメインビジュアル画像を入れてください */}
                   <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm">
                     Product Image Area
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 強み Section */}
      <Section title="KAMAKIの強み" subtitle="現場の「困った」を解決し続けて1世紀。">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: ShieldCheck,
              title: '伝統の熱処理技術',
              body: '長年の経験に裏打ちされた焼入れ・刃付け技術で、鋭い切れ味と高い耐久性を実現しています。',
            },
            {
              icon: Sparkles,
              title: '現場目線の改良',
              body: '「軽くしてほしい」「高い所を切りたい」など、現場の具体的な要望を製品開発に反映します。',
            },
            {
              icon: Users,
              title: '柔軟な法人対応',
              body: '小ロットの卸売りからOEM開発まで。ビジネスの規模に合わせた柔軟な提案が可能です。',
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="group rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{item.body}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* 目的別ナビゲーション (カードデザイン改善) */}
      <Section title="目的から探す" bg="bg-white">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: '製品を探す',
              desc: '用途・種類別に製品を検索',
              link: '/products',
              bg: 'bg-blue-50',
              text: 'text-blue-900'
            },
            {
              title: '会社を知る',
              desc: '創業からの歩みと企業情報',
              link: '/company',
              bg: 'bg-green-50',
              text: 'text-green-900'
            },
            {
              title: 'お問い合わせ',
              desc: '見積・在庫・導入のご相談',
              link: '/contact',
              bg: 'bg-orange-50',
              text: 'text-orange-900'
            },
          ].map((item) => (
            <Link key={item.title} to={item.link} className="group relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-5 shadow-sm hover:border-brand-200 hover:shadow-md transition-all">
              <div className={`absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 rounded-full ${item.bg} opacity-50 group-hover:scale-150 transition-transform duration-500`}/>
              <h3 className="relative text-lg font-bold text-neutral-900">{item.title}</h3>
              <p className="relative mt-1.5 text-sm text-neutral-600 mb-4">{item.desc}</p>
              <div className="relative flex items-center text-sm font-semibold text-brand-600 group-hover:translate-x-1 transition-transform">
                詳細を見る <ChevronRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ピックアップ製品 */}
      <Section title="ピックアップ製品">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {PRODUCTS.slice(0, 3).map((p) => (
            <ProductCard key={p.id} item={p} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/products" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium hover:bg-neutral-50 hover:border-neutral-400 transition-colors">
            製品カタログをすべて見る <ArrowRight size={16}/>
          </Link>
        </div>
      </Section>
    </div>
  )
}