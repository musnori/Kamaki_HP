// カテゴリはシンプルに「鋏」「鎌」「パンフレット」に分ける例
export const CATEGORIES = [
  '鋏',
  '鎌',
  'パンフレット'
]

export const PRODUCTS = [
  { id: 'hp', name: '高枝切鋏', category: '鋏', desc: '高所の枝を楽にカットできるロングリーチ鋏。', link: '/products/high-branch' },
  { id: 'rhp', name: 'ロープ式高枝切鋏', category: '鋏', desc: 'ロープ引きで高所の枝を安全にカットできるタイプ。' , link: '/products/rope-high-branch' },
  { id: 'hs', name: '刈込鋏・伸縮式刈込鋏', category: '鋏', desc: '生垣の整枝に最適な刈込鋏と伸縮式モデル。' , link: '/products/hedge-shears' },
  { id: 'lp',  name: '太枝切鋏',           category: '鋏', desc: '太い枝もテコの力で強力切断。',             link: '/products/loppers' },
  { id: 'hlp', name: '高枝式太枝切鋏',     category: '鋏', desc: '高所の太い枝を安全・確実にカット。',       link: '/products/high-loppers' },
  { id: 'pr',  name: '剪定鋏',             category: '鋏', desc: '果樹・庭木の細かな剪定に。',               link: '/products/pruners' },
  { id: 'hv',  name: '採果鋏・植木鋏',     category: '鋏', desc: '収穫・繊細作業向けの軽量モデル。',         link: '/products/harvest-shears' },
  { id: 'lp2',  name: 'ロング剪定＆採集鋏', category: '鋏', desc: '長柄で届きにくい場所の剪定や採集向け。', link: '/products/long-pruners' },
  { id: 'lss',  name: '芝生鋏・押切・鎌',   category: '鎌', desc: '芝生仕上げや草刈り・細工用ツール群。',     link: '/products/lawn-shears-sickles' },
  { id: 'saw',  name: '鋸・高枝鋸',         category: '鋸', desc: '太枝切断や高所作業向けの鋸。',             link: '/products/saws' },
]
