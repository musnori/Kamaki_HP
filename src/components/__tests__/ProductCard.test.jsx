import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductCard from '../ProductCard'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}))

const renderProductCard = (item, variant) => {
  return render(
    <MemoryRouter>
      <ProductCard item={item} variant={variant} />
    </MemoryRouter>
  )
}

describe('ProductCard component', () => {
  const mockProduct = {
    id: 'test1',
    name: '高枝切鋏',
    category: '鋏',
    desc: 'テスト説明文',
    link: '/products/test',
    image: '/images/test.jpg',
    tags: ['高所作業', '伸縮ポール', '剪定', '追加タグ'],
    recommendedFor: ['高所の枝を安全に切りたい', '脚立作業を減らしたい'],
  }

  describe('Compact variant (default)', () => {
    it('should render product name', () => {
      renderProductCard(mockProduct)
      expect(screen.getByText('高枝切鋏')).toBeInTheDocument()
    })

    it('should render product description', () => {
      renderProductCard(mockProduct)
      expect(screen.getByText('テスト説明文')).toBeInTheDocument()
    })

    it('should render category badge', () => {
      renderProductCard(mockProduct)
      expect(screen.getByText('鋏')).toBeInTheDocument()
    })

    it('should render product image', () => {
      renderProductCard(mockProduct)
      const img = screen.getByAltText('高枝切鋏')
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', '/images/test.jpg')
    })

    it('should link to product page', () => {
      renderProductCard(mockProduct)
      const links = screen.getAllByRole('link')
      expect(links[0]).toHaveAttribute('href', '/products/test')
    })

    it('should show fallback when image is missing', () => {
      const productWithoutImage = { ...mockProduct, image: null }
      renderProductCard(productWithoutImage)
      // In compact variant, there's a gradient div fallback, not queryable text
      expect(screen.queryByAltText('高枝切鋏')).not.toBeInTheDocument()
    })

    it('should hide category badge when not provided', () => {
      const productWithoutCategory = { ...mockProduct, category: undefined }
      renderProductCard(productWithoutCategory)
      expect(screen.queryByText('鋏')).not.toBeInTheDocument()
    })

    it('should use title if name is not provided', () => {
      const productWithTitle = { ...mockProduct, name: undefined, title: 'タイトル商品' }
      renderProductCard(productWithTitle)
      expect(screen.getByText('タイトル商品')).toBeInTheDocument()
    })
  })

  describe('Detailed variant', () => {
    it('should render with detailed variant', () => {
      renderProductCard(mockProduct, 'detailed')
      expect(screen.getByText('高枝切鋏')).toBeInTheDocument()
    })

    it('should display up to 3 tags maximum', () => {
      renderProductCard(mockProduct, 'detailed')
      expect(screen.getByText('高所作業')).toBeInTheDocument()
      expect(screen.getByText('伸縮ポール')).toBeInTheDocument()
      expect(screen.getByText('剪定')).toBeInTheDocument()
      // The 4th tag should not be visible
      expect(screen.queryByText('追加タグ')).not.toBeInTheDocument()
    })

    it('should render recommendedFor section when present', () => {
      renderProductCard(mockProduct, 'detailed')
      expect(screen.getByText('おすすめの用途')).toBeInTheDocument()
      expect(screen.getByText(/高所の枝を安全に切りたい/)).toBeInTheDocument()
      expect(screen.getByText(/脚立作業を減らしたい/)).toBeInTheDocument()
    })

    it('should hide recommendedFor section when empty', () => {
      const productWithoutRecommended = { ...mockProduct, recommendedFor: [] }
      renderProductCard(productWithoutRecommended, 'detailed')
      expect(screen.queryByText('おすすめの用途')).not.toBeInTheDocument()
    })

    it('should hide recommendedFor section when undefined', () => {
      const productWithoutRecommended = { ...mockProduct, recommendedFor: undefined }
      renderProductCard(productWithoutRecommended, 'detailed')
      expect(screen.queryByText('おすすめの用途')).not.toBeInTheDocument()
    })

    it('should show "No Image" placeholder when image missing', () => {
      const productWithoutImage = { ...mockProduct, image: null }
      renderProductCard(productWithoutImage, 'detailed')
      expect(screen.getByText('No Image')).toBeInTheDocument()
    })

    it('should render "詳細を見る" button', () => {
      renderProductCard(mockProduct, 'detailed')
      expect(screen.getByText('詳細を見る')).toBeInTheDocument()
    })

    it('should have correct link on detail button', () => {
      renderProductCard(mockProduct, 'detailed')
      const detailLink = screen.getByText('詳細を見る').closest('a')
      expect(detailLink).toHaveAttribute('href', '/products/test')
    })

    it('should handle empty tags gracefully', () => {
      const productWithoutTags = { ...mockProduct, tags: [] }
      renderProductCard(productWithoutTags, 'detailed')
      expect(screen.getByText('高枝切鋏')).toBeInTheDocument()
    })

    it('should handle undefined tags gracefully', () => {
      const productWithoutTags = { ...mockProduct, tags: undefined }
      renderProductCard(productWithoutTags, 'detailed')
      expect(screen.getByText('高枝切鋏')).toBeInTheDocument()
    })
  })

  describe('Link handling', () => {
    it('should use provided link correctly', () => {
      const productWithLink = { ...mockProduct, link: '/products/custom' }
      renderProductCard(productWithLink, 'detailed')
      const detailLink = screen.getByText('詳細を見る').closest('a')
      expect(detailLink).toHaveAttribute('href', '/products/custom')
    })

    it('should render links when link is undefined (defaults to #)', () => {
      const productWithoutLink = { ...mockProduct, link: undefined }
      renderProductCard(productWithoutLink, 'detailed')
      // Component should still render without errors
      expect(screen.getByText('高枝切鋏')).toBeInTheDocument()
    })
  })
})
