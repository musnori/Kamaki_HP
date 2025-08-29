import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Home from '@/pages/Home'
import Products from '@/pages/Products'
import Contact from '@/pages/Contact'
import Resources from '@/pages/Resources'
import Company from '@/pages/Company'
import HighPruner from '@/pages/HighPruner' 
import RopeHighPruner from '@/pages/RopeHighPruner'
import HedgeShears from '@/pages/HedgeShears' 
import Loppers from '@/pages/Loppers'
import HighLoppers from '@/pages/HighLoppers'
import Pruners from '@/pages/Pruners'
import HarvestShears from '@/pages/HarvestShears'
import LongPruners from '@/pages/LongPruners'
import LawnShearsAndSickles from '@/pages/LawnShearsAndSickles'
import Saws from '@/pages/Saws'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} /> 
          <Route path="/products" element={<Products />} />
          <Route path="/products/high-branch" element={<HighPruner />} />
          <Route path="/products/rope-high-branch" element={<RopeHighPruner />} />
          <Route path="/products/hedge-shears" element={<HedgeShears />} />
          <Route path="/products/loppers" element={<Loppers />} />                 
          <Route path="/products/high-loppers" element={<HighLoppers />} />      
          <Route path="/products/pruners" element={<Pruners />} />              
          <Route path="/products/harvest-shears" element={<HarvestShears />} />   
          <Route path="/products/long-pruners" element={<LongPruners />} />
          <Route path="/products/lawn-shears-sickles" element={<LawnShearsAndSickles />} />
          <Route path="/products/saws" element={<Saws />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
