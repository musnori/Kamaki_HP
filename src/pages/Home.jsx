// src/pages/Home.jsx
import Section from '@/components/Section'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Sparkles, Users, ChevronRight, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/ProductCard'
import { PRODUCTS } from '@/data/products'

export default function Home() {
  return (
    <div className="bg-neutral-50/50">
      {/* Hero Section - メインビジュアル */}
      <section className="relative overflow-hidden">
        <div className="relative w-full">
          <img
            src="/images/hero-banner.jpg"
            alt="KAMAKI GARDEN TOOLS"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-4 w-full">
              <motion.div
                className="max-w-lg text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-wide mb-3">
                  SINCE 1887
                </span>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  プロが選ぶ、<br />
                  <span className="text-red-400">確かな切れ味。</span>
                </h1>
                <p className="mt-4 text-white/90 text-sm md:text-base leading-relaxed">
                  兵庫県加古川市から世界へ。創業130年を超える園芸刃物メーカー「KAMAKI」は、<br className="hidden md:block" />
                  現場の声を形にした高枝切鋏や剪定工具をお届けします。
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link to="/products" className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 text-white px-6 py-3 font-medium hover:bg-red-700 transition-all">
                    製品一覧を見る <ArrowRight size={18}/>
                  </Link>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm text-white px-6 py-3 font-medium hover:bg-white/30 transition-all">
                    お問い合わせ
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 製品ラインナップ概要 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">製品ラインナップ</h2>
            <p className="mt-2 text-neutral-600">用途に合わせた多彩な園芸工具をご用意しています</p>
          </motion.div>

          <div className="relative">
            <img
              src="/images/product-lineup.jpg"
              alt="KAMAKI製品ラインナップ"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: '高枝切鋏', link: '/products/high-branch', icon: '🌳' },
              { name: '刈込鋏', link: '/products/hedge-shears', icon: '✂️' },
              { name: '採果鋏', link: '/products/harvest-shears', icon: '🍎' },
              { name: '太枝切鋏', link: '/products/loppers', icon: '🪵' },
              { name: '剪定鋏', link: '/products/pruners', icon: '🌿' },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.link}
                  className="block p-4 bg-neutral-50 rounded-xl hover:bg-brand-50 hover:shadow-md transition-all text-center group"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="mt-2 font-medium text-neutral-800 group-hover:text-brand-700">{item.name}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 主力製品シリーズ紹介 */}
      <section className="py-12 md:py-16 bg-neutral-100">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">主力製品シリーズ</h2>
            <p className="mt-2 text-neutral-600">現場のプロに選ばれ続けるKAMAKIのロングセラー</p>
          </motion.div>

          {/* かるのびシリーズ */}
          <motion.div
            className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">人気シリーズ</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
                  伸縮高枝切鋏<br />
                  <span className="text-red-600">「かるのび」シリーズ</span>
                </h3>
                <p className="mt-3 text-neutral-600 leading-relaxed">
                  軽量設計で扱いやすい伸縮式高枝切鋏。2段式・3段式をラインナップ。
                  高所の枝を安全に、効率よく剪定できます。
                </p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    2段式・3段式から選べる
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    軽量アルミポール採用
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    握りやすいグリップ設計
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/products/high-branch" className="inline-flex items-center gap-2 text-red-600 font-medium hover:text-red-700 transition-colors">
                    詳しく見る <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
              <div className="bg-neutral-50 p-4 flex items-center justify-center">
                <img
                  src="/images/karunobi-series.jpg"
                  alt="かるのびシリーズ"
                  className="w-full h-auto max-h-[300px] object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* かるたかシリーズ */}
          <motion.div
            className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-neutral-50 p-4 flex items-center justify-center order-2 md:order-1">
                <img
                  src="/images/karutaka-series.jpg"
                  alt="かるたかシリーズ"
                  className="w-full h-auto max-h-[300px] object-contain"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center order-1 md:order-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">超軽量</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
                  ロープ式高枝切鋏<br />
                  <span className="text-red-600">「かるたか」シリーズ</span>
                </h3>
                <p className="mt-3 text-neutral-600 leading-relaxed">
                  ロープを引いて切断するタイプの高枝切鋏。超軽量設計で長時間作業も楽々。
                  鋸刃付きで太い枝も対応可能です。
                </p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    超軽量カーボンポール
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    鋸刃アタッチメント付き
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    最大4m以上の高さに対応
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/products/rope-high-branch" className="inline-flex items-center gap-2 text-red-600 font-medium hover:text-red-700 transition-colors">
                    詳しく見る <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ロング剪定＆採集鋏 */}
          <motion.div
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">超軽量</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
                  高枝切鋏<br />
                  <span className="text-red-600">ロング剪定＆採集鋏</span>
                </h3>
                <p className="mt-3 text-neutral-600 leading-relaxed">
                  超軽量設計のロング剪定鋏と採集鋏。果樹の収穫から庭木の剪定まで、
                  幅広い用途に対応します。
                </p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    超軽量で疲れにくい
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    剪定・採集の両用途に対応
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    グリップ式で操作簡単
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/products/long-pruners" className="inline-flex items-center gap-2 text-red-600 font-medium hover:text-red-700 transition-colors">
                    詳しく見る <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
              <div className="bg-neutral-50 p-4 flex items-center justify-center">
                <img
                  src="/images/long-pruner-series.jpg"
                  alt="ロング剪定＆採集鋏"
                  className="w-full h-auto max-h-[300px] object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KAMAKIの強み Section */}
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
              <motion.div
                key={i}
                className="group rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{item.body}</p>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* 目的別ナビゲーション */}
      <Section title="目的から探す" bg="bg-white">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: '製品を探す',
              desc: '用途・種類別に製品を検索',
              link: '/products',
              accent: 'bg-red-500',
              iconBg: 'bg-red-50',
            },
            {
              title: '会社を知る',
              desc: '創業からの歩みと企業情報',
              link: '/company',
              accent: 'bg-green-500',
              iconBg: 'bg-green-50',
            },
            {
              title: 'お問い合わせ',
              desc: '見積・在庫・導入のご相談',
              link: '/contact',
              accent: 'bg-blue-500',
              iconBg: 'bg-blue-50',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={item.link} className="group block relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm hover:border-neutral-200 hover:shadow-md transition-all">
                <div className={`absolute top-0 left-0 w-1 h-full ${item.accent}`}/>
                <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                <p className="mt-1.5 text-sm text-neutral-600 mb-4">{item.desc}</p>
                <div className="flex items-center text-sm font-semibold text-red-600 group-hover:translate-x-1 transition-transform">
                  詳細を見る <ChevronRight size={16} />
                </div>
              </Link>
            </motion.div>
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

      {/* お問い合わせCTA */}
      <section className="py-12 md:py-16 bg-neutral-900 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">お気軽にご相談ください</h2>
            <p className="mt-3 text-neutral-400">製品のご質問、お見積り、修理のご依頼など</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:0794380070"
                className="inline-flex items-center gap-2 bg-white text-neutral-900 px-6 py-3 rounded-lg font-bold hover:bg-neutral-100 transition-colors"
              >
                <Phone size={20} />
                079-438-0070
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                お問い合わせフォーム <ArrowRight size={18} />
              </Link>
            </div>
            <p className="mt-4 text-sm text-neutral-500">受付時間: 平日 9:00〜17:00</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
