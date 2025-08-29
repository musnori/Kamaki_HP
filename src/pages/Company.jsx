import Section from '@/components/Section'
import {
  Building2, User, Calendar, Landmark, Coins, Briefcase,
  Users, MapPin, Phone, Printer
} from 'lucide-react'

export default function Company() {
  return (
    <Section title="会社案内" subtitle="株式会社 Kamaki の基本情報をご紹介します。">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-white shadow-soft p-6 hover:shadow transition-shadow">
          <h3 className="flex items-center gap-2 font-semibold text-lg text-brand-700">
            <Building2 size={20}/> 社名 / Company
          </h3>
          <p className="mt-2">
            株式会社 Kamaki<br/>
            <span className="text-neutral-600 text-sm">KAMAKI AGRICULTURAL MFG. CO., LTD.</span>
          </p>
        </div>

        <div className="rounded-2xl border bg-white shadow-soft p-6 hover:shadow transition-shadow">
          <h3 className="flex items-center gap-2 font-semibold text-lg text-brand-700">
            <User size={20}/> 代表者 / President
          </h3>
          <p className="mt-2">岸本 伊久男 <span className="text-neutral-600 text-sm">(Ikuo Kishimoto)</span></p>
        </div>

        <div className="rounded-2xl border bg-white shadow-soft p-6 hover:shadow transition-shadow">
          <h3 className="flex items-center gap-2 font-semibold text-lg text-brand-700">
            <Calendar size={20}/> 創業 / Established
          </h3>
          <p className="mt-2">明治20年（1876年）</p>
        </div>

        <div className="rounded-2xl border bg-white shadow-soft p-6 hover:shadow transition-shadow">
          <h3 className="flex items-center gap-2 font-semibold text-lg text-brand-700">
            <Landmark size={20}/> 法人設立 / Incorporated
          </h3>
          <p className="mt-2">昭和36年（1962年）</p>
        </div>

        <div className="rounded-2xl border bg-white shadow-soft p-6 hover:shadow transition-shadow">
          <h3 className="flex items-center gap-2 font-semibold text-lg text-brand-700">
            <Coins size={20}/> 資本金 / Capital
          </h3>
          <p className="mt-2">
            300万円<br/>
            <span className="text-neutral-600 text-sm">JP¥ 3,000,000.- (JP¥110 = US$1)</span>
          </p>
        </div>

        <div className="rounded-2xl border bg-white shadow-soft p-6 hover:shadow transition-shadow">
          <h3 className="flex items-center gap-2 font-semibold text-lg text-brand-700">
            <Briefcase size={20}/> 事業内容 / Business
          </h3>
          <p className="mt-2">
            園芸用刃物の製造販売<br/>
            <span className="text-neutral-600 text-sm">Manufacture & Exporters of “KAMAKI” brand cutting tools</span>
          </p>
        </div>

        <div className="rounded-2xl border bg-white shadow-soft p-6 hover:shadow transition-shadow">
          <h3 className="flex items-center gap-2 font-semibold text-lg text-brand-700">
            <Users size={20}/> 従業員数 / Employees
          </h3>
          <p className="mt-2">20名</p>
        </div>

        <div className="rounded-2xl border bg-white shadow-soft p-6 hover:shadow transition-shadow md:col-span-2">
          <h3 className="flex items-center gap-2 font-semibold text-lg text-brand-700">
            <MapPin size={20}/> 本社 / Head Office
          </h3>
          <p className="mt-2">
            兵庫県加古川市八幡町船町114番地<br/>
            <span className="text-neutral-600 text-sm">114 Funamachi, Yahata-cho, Kakogawa, Hyogo 675-1206 Japan</span>
          </p>
          <p className="flex items-center gap-2 mt-2 text-sm text-neutral-700"><Phone size={16}/> 079-438-0070（+81-79-438-0070）</p>
          <p className="flex items-center gap-2 text-sm text-neutral-700"><Printer size={16}/> 079-438-6362（+81-79-438-6362）</p>
        </div>

        <div className="rounded-2xl border bg-white shadow-soft p-6 hover:shadow transition-shadow md:col-span-2">
          <h3 className="flex items-center gap-2 font-semibold text-lg text-brand-700">
            <MapPin size={20}/> 第二工場 / 2nd Factory
          </h3>
          <p className="mt-2">
            兵庫県加古川市八幡町船町115番地<br/>
            <span className="text-neutral-600 text-sm">115 Funamachi, Yahata-cho, Kakogawa, Hyogo 675-1206 Japan</span>
          </p>
        </div>
      </div>
    </Section>
  )
}
