import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../Navbar'

// Mock the logo image
vi.mock('@/images/Kamaki.png', () => ({
  default: '/mock-logo.png',
}))

const renderNavbar = (initialRoute = '/') => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Navbar />
    </MemoryRouter>
  )
}

describe('Navbar component', () => {
  describe('Navigation items', () => {
    it('should render all navigation items', () => {
      renderNavbar()
      // Each nav item appears twice (desktop + mobile), so use getAllByText
      expect(screen.getAllByText('ホーム').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('会社案内').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('製品情報').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('参考資料').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('お問い合わせ').length).toBeGreaterThanOrEqual(1)
    })

    it('should render logo with link to home', () => {
      renderNavbar()
      const logoLink = screen.getByRole('link', { name: /kamaki logo/i })
      expect(logoLink).toHaveAttribute('href', '/')
    })

    it('should have correct hrefs for navigation links', () => {
      renderNavbar()
      // Desktop nav links (first occurrence)
      const homeLinks = screen.getAllByText('ホーム')
      expect(homeLinks[0].closest('a')).toHaveAttribute('href', '/')

      const companyLinks = screen.getAllByText('会社案内')
      expect(companyLinks[0].closest('a')).toHaveAttribute('href', '/company')

      const productsLinks = screen.getAllByText('製品情報')
      expect(productsLinks[0].closest('a')).toHaveAttribute('href', '/products')
    })
  })

  describe('Mobile menu toggle', () => {
    it('should render menu toggle button', () => {
      renderNavbar()
      const menuButton = screen.getByLabelText('メニューを開く')
      expect(menuButton).toBeInTheDocument()
    })

    it('should have aria-expanded=false initially', () => {
      renderNavbar()
      const menuButton = screen.getByLabelText('メニューを開く')
      expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    })

    it('should toggle aria-expanded when clicked', () => {
      renderNavbar()
      const menuButton = screen.getByLabelText('メニューを開く')

      fireEvent.click(menuButton)
      expect(menuButton).toHaveAttribute('aria-expanded', 'true')

      fireEvent.click(menuButton)
      expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    })
  })

  describe('Mobile menu visibility', () => {
    it('should have max-h-0 class when menu is closed', () => {
      renderNavbar()
      // Find the mobile nav drawer by its classes
      const mobileNav = document.querySelector('.md\\:hidden.overflow-hidden')
      expect(mobileNav).toHaveClass('max-h-0')
    })

    it('should change max-h class when menu is opened', () => {
      renderNavbar()
      const menuButton = screen.getByLabelText('メニューを開く')
      fireEvent.click(menuButton)

      const mobileNav = document.querySelector('.md\\:hidden.overflow-hidden')
      expect(mobileNav).toHaveClass('max-h-[450px]')
    })
  })

  describe('Phone link', () => {
    it('should render phone link in mobile menu', () => {
      renderNavbar()
      const phoneLink = screen.getByText('079-438-0070')
      expect(phoneLink.closest('a')).toHaveAttribute('href', 'tel:0794380070')
    })
  })

  describe('Active state styling', () => {
    it('should highlight home when on home route', () => {
      renderNavbar('/')
      const homeLinks = screen.getAllByText('ホーム')
      // The active link should have the red styling
      expect(homeLinks[0]).toHaveClass('bg-red-50', 'text-red-700')
    })

    it('should highlight products when on products route', () => {
      renderNavbar('/products')
      const productLinks = screen.getAllByText('製品情報')
      expect(productLinks[0]).toHaveClass('bg-red-50', 'text-red-700')
    })

    it('should highlight company when on company route', () => {
      renderNavbar('/company')
      const companyLinks = screen.getAllByText('会社案内')
      expect(companyLinks[0]).toHaveClass('bg-red-50', 'text-red-700')
    })
  })

  describe('Accessibility', () => {
    it('should have accessible menu button', () => {
      renderNavbar()
      const menuButton = screen.getByLabelText('メニューを開く')
      expect(menuButton).toBeInTheDocument()
      expect(menuButton).toHaveAttribute('aria-expanded')
    })

    it('should have alt text on logo', () => {
      renderNavbar()
      const logo = screen.getByAltText('Kamaki Logo')
      expect(logo).toBeInTheDocument()
    })
  })
})
