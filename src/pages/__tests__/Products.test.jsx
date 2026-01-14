import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Products from '../Products'

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}))

// Mock the products data
vi.mock('@/data/products', () => ({
  CATEGORIES: ['鋏', '鎌', '鋸'],
  PRODUCTS: [
    {
      id: 'hp',
      name: '高枝切鋏',
      category: '鋏',
      desc: '高所の枝を楽にカットできるロングリーチ鋏。',
      link: '/products/high-branch',
      image: '/images/test.jpg',
      tags: ['高所作業', '伸縮ポール', '剪定'],
      recommendedFor: ['高所の枝を安全に切りたい'],
    },
    {
      id: 'lss',
      name: '芝生鋏・押切・鎌',
      category: '鎌',
      desc: '芝生仕上げや草刈り・細工用ツール群。',
      link: '/products/lawn-shears-sickles',
      tags: ['芝生', '草刈り'],
      recommendedFor: ['芝生の仕上げ精度を上げたい'],
    },
    {
      id: 'saw',
      name: '鋸・高枝鋸',
      category: '鋸',
      desc: '太枝切断や高所作業向けの鋸。',
      link: '/products/saws',
      tags: ['太枝', '高所', '鋸'],
      recommendedFor: ['太枝を手早く切断したい'],
    },
    {
      id: 'pr',
      name: '剪定鋏',
      category: '鋏',
      desc: '果樹・庭木の細かな剪定に。',
      link: '/products/pruners',
      tags: ['細枝', '日常剪定'],
      recommendedFor: ['日常的な剪定作業が多い'],
    },
  ],
}))

const renderProducts = () => {
  return render(
    <MemoryRouter>
      <Products />
    </MemoryRouter>
  )
}

describe('Products page', () => {
  describe('Initial rendering', () => {
    it('should render page title', () => {
      renderProducts()
      expect(screen.getByText('製品一覧')).toBeInTheDocument()
    })

    it('should render all products initially', () => {
      renderProducts()
      expect(screen.getByText('高枝切鋏')).toBeInTheDocument()
      expect(screen.getByText('芝生鋏・押切・鎌')).toBeInTheDocument()
      expect(screen.getByText('鋸・高枝鋸')).toBeInTheDocument()
      expect(screen.getByText('剪定鋏')).toBeInTheDocument()
    })

    it('should render search input', () => {
      renderProducts()
      expect(screen.getByPlaceholderText(/キーワード検索/)).toBeInTheDocument()
    })

    it('should render category selector', () => {
      renderProducts()
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })
  })

  describe('Keyword search filtering', () => {
    it('should filter products by name', () => {
      renderProducts()
      const searchInput = screen.getByPlaceholderText(/キーワード検索/)
      fireEvent.change(searchInput, { target: { value: '高枝' } })

      expect(screen.getByText('高枝切鋏')).toBeInTheDocument()
      expect(screen.getByText('鋸・高枝鋸')).toBeInTheDocument()
      expect(screen.queryByText('芝生鋏・押切・鎌')).not.toBeInTheDocument()
      expect(screen.queryByText('剪定鋏')).not.toBeInTheDocument()
    })

    it('should filter products by description', () => {
      renderProducts()
      const searchInput = screen.getByPlaceholderText(/キーワード検索/)
      fireEvent.change(searchInput, { target: { value: '芝生仕上げ' } })

      expect(screen.getByText('芝生鋏・押切・鎌')).toBeInTheDocument()
      expect(screen.queryByText('高枝切鋏')).not.toBeInTheDocument()
    })

    it('should filter products by tags', () => {
      renderProducts()
      const searchInput = screen.getByPlaceholderText(/キーワード検索/)
      fireEvent.change(searchInput, { target: { value: '草刈り' } })

      expect(screen.getByText('芝生鋏・押切・鎌')).toBeInTheDocument()
      expect(screen.queryByText('高枝切鋏')).not.toBeInTheDocument()
    })

    it('should be case-insensitive', () => {
      renderProducts()
      const searchInput = screen.getByPlaceholderText(/キーワード検索/)
      fireEvent.change(searchInput, { target: { value: '剪定' } })

      expect(screen.getByText('高枝切鋏')).toBeInTheDocument()
      expect(screen.getByText('剪定鋏')).toBeInTheDocument()
    })

    it('should show no results message when no matches', () => {
      renderProducts()
      const searchInput = screen.getByPlaceholderText(/キーワード検索/)
      fireEvent.change(searchInput, { target: { value: 'nonexistent' } })

      expect(screen.getByText(/該当する製品が見つかりませんでした/)).toBeInTheDocument()
    })

    it('should show all products with empty search', () => {
      renderProducts()
      const searchInput = screen.getByPlaceholderText(/キーワード検索/)

      // First filter, then clear
      fireEvent.change(searchInput, { target: { value: '高枝' } })
      fireEvent.change(searchInput, { target: { value: '' } })

      expect(screen.getByText('高枝切鋏')).toBeInTheDocument()
      expect(screen.getByText('芝生鋏・押切・鎌')).toBeInTheDocument()
      expect(screen.getByText('鋸・高枝鋸')).toBeInTheDocument()
      expect(screen.getByText('剪定鋏')).toBeInTheDocument()
    })
  })

  describe('Category filtering', () => {
    it('should filter products by category 鋏', () => {
      renderProducts()
      const select = screen.getByRole('combobox')
      fireEvent.change(select, { target: { value: '鋏' } })

      expect(screen.getByText('高枝切鋏')).toBeInTheDocument()
      expect(screen.getByText('剪定鋏')).toBeInTheDocument()
      expect(screen.queryByText('芝生鋏・押切・鎌')).not.toBeInTheDocument()
      expect(screen.queryByText('鋸・高枝鋸')).not.toBeInTheDocument()
    })

    it('should filter products by category 鎌', () => {
      renderProducts()
      const select = screen.getByRole('combobox')
      fireEvent.change(select, { target: { value: '鎌' } })

      expect(screen.getByText('芝生鋏・押切・鎌')).toBeInTheDocument()
      expect(screen.queryByText('高枝切鋏')).not.toBeInTheDocument()
    })

    it('should filter products by category 鋸', () => {
      renderProducts()
      const select = screen.getByRole('combobox')
      fireEvent.change(select, { target: { value: '鋸' } })

      expect(screen.getByText('鋸・高枝鋸')).toBeInTheDocument()
      expect(screen.queryByText('高枝切鋏')).not.toBeInTheDocument()
    })

    it('should show all products when selecting すべて', () => {
      renderProducts()
      const select = screen.getByRole('combobox')

      // Filter first, then reset
      fireEvent.change(select, { target: { value: '鋏' } })
      fireEvent.change(select, { target: { value: 'すべて' } })

      expect(screen.getByText('高枝切鋏')).toBeInTheDocument()
      expect(screen.getByText('芝生鋏・押切・鎌')).toBeInTheDocument()
      expect(screen.getByText('鋸・高枝鋸')).toBeInTheDocument()
    })
  })

  describe('Combined filtering', () => {
    it('should filter by both keyword and category', () => {
      renderProducts()
      const searchInput = screen.getByPlaceholderText(/キーワード検索/)
      const select = screen.getByRole('combobox')

      fireEvent.change(searchInput, { target: { value: '剪定' } })
      fireEvent.change(select, { target: { value: '鋏' } })

      // Only products matching both filters
      expect(screen.getByText('高枝切鋏')).toBeInTheDocument()
      expect(screen.getByText('剪定鋏')).toBeInTheDocument()
      expect(screen.queryByText('芝生鋏・押切・鎌')).not.toBeInTheDocument()
    })

    it('should show no results when combined filters have no matches', () => {
      renderProducts()
      const searchInput = screen.getByPlaceholderText(/キーワード検索/)
      const select = screen.getByRole('combobox')

      fireEvent.change(searchInput, { target: { value: '芝生' } })
      fireEvent.change(select, { target: { value: '鋏' } })

      expect(screen.getByText(/該当する製品が見つかりませんでした/)).toBeInTheDocument()
    })
  })

  describe('Reset functionality', () => {
    it('should reset filters when reset button is clicked', () => {
      renderProducts()
      const searchInput = screen.getByPlaceholderText(/キーワード検索/)
      fireEvent.change(searchInput, { target: { value: 'nonexistent' } })

      const resetButton = screen.getByText(/条件をリセット/)
      fireEvent.click(resetButton)

      expect(screen.getByText('高枝切鋏')).toBeInTheDocument()
      expect(screen.getByText('芝生鋏・押切・鎌')).toBeInTheDocument()
      expect(searchInput.value).toBe('')
    })
  })
})
