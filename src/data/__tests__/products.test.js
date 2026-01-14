import { describe, it, expect } from 'vitest'
import { CATEGORIES, PRODUCTS, PRODUCT_SERIES } from '../products'

describe('Product data validation', () => {
  describe('CATEGORIES array', () => {
    it('should not be empty', () => {
      expect(CATEGORIES.length).toBeGreaterThan(0)
    })

    it('should contain unique values', () => {
      const uniqueCategories = [...new Set(CATEGORIES)]
      expect(uniqueCategories.length).toBe(CATEGORIES.length)
    })

    it('should contain expected categories', () => {
      expect(CATEGORIES).toContain('鋏')
      expect(CATEGORIES).toContain('鎌')
      expect(CATEGORIES).toContain('鋸')
    })
  })

  describe('PRODUCTS array', () => {
    it('should not be empty', () => {
      expect(PRODUCTS.length).toBeGreaterThan(0)
    })

    it('should have unique IDs for all products', () => {
      const ids = PRODUCTS.map((p) => p.id)
      const uniqueIds = [...new Set(ids)]
      expect(uniqueIds.length).toBe(PRODUCTS.length)
    })

    it('should have required field: id for all products', () => {
      PRODUCTS.forEach((product) => {
        expect(product.id).toBeDefined()
        expect(typeof product.id).toBe('string')
        expect(product.id.length).toBeGreaterThan(0)
      })
    })

    it('should have required field: name for all products', () => {
      PRODUCTS.forEach((product) => {
        expect(product.name).toBeDefined()
        expect(typeof product.name).toBe('string')
        expect(product.name.length).toBeGreaterThan(0)
      })
    })

    it('should have required field: category for all products', () => {
      PRODUCTS.forEach((product) => {
        expect(product.category).toBeDefined()
        expect(typeof product.category).toBe('string')
      })
    })

    it('should have required field: link for all products', () => {
      PRODUCTS.forEach((product) => {
        expect(product.link).toBeDefined()
        expect(typeof product.link).toBe('string')
        expect(product.link.startsWith('/')).toBe(true)
      })
    })

    it('should have valid category from CATEGORIES list', () => {
      const validCategories = [...CATEGORIES, 'パンフレット']
      PRODUCTS.forEach((product) => {
        expect(validCategories).toContain(product.category)
      })
    })

    it('should have tags as array when defined', () => {
      PRODUCTS.forEach((product) => {
        if (product.tags !== undefined) {
          expect(Array.isArray(product.tags)).toBe(true)
        }
      })
    })

    it('should have recommendedFor as array when defined', () => {
      PRODUCTS.forEach((product) => {
        if (product.recommendedFor !== undefined) {
          expect(Array.isArray(product.recommendedFor)).toBe(true)
        }
      })
    })

    it('should have valid link format starting with /products/', () => {
      PRODUCTS.forEach((product) => {
        expect(product.link.startsWith('/products/')).toBe(true)
      })
    })

    it('should have desc as string when defined', () => {
      PRODUCTS.forEach((product) => {
        if (product.desc !== undefined) {
          expect(typeof product.desc).toBe('string')
        }
      })
    })
  })

  describe('PRODUCT_SERIES array', () => {
    it('should not be empty', () => {
      expect(PRODUCT_SERIES.length).toBeGreaterThan(0)
    })

    it('should have unique IDs', () => {
      const ids = PRODUCT_SERIES.map((s) => s.id)
      const uniqueIds = [...new Set(ids)]
      expect(uniqueIds.length).toBe(PRODUCT_SERIES.length)
    })

    it('should have required fields for all series', () => {
      PRODUCT_SERIES.forEach((series) => {
        expect(series.id).toBeDefined()
        expect(series.name).toBeDefined()
        expect(series.description).toBeDefined()
        expect(series.link).toBeDefined()
      })
    })

    it('should have valid link format', () => {
      PRODUCT_SERIES.forEach((series) => {
        expect(series.link.startsWith('/')).toBe(true)
      })
    })

    it('should have features as array', () => {
      PRODUCT_SERIES.forEach((series) => {
        expect(Array.isArray(series.features)).toBe(true)
        expect(series.features.length).toBeGreaterThan(0)
      })
    })

    it('should have badge defined', () => {
      PRODUCT_SERIES.forEach((series) => {
        expect(series.badge).toBeDefined()
        expect(typeof series.badge).toBe('string')
      })
    })

    it('should have badgeColor defined', () => {
      PRODUCT_SERIES.forEach((series) => {
        expect(series.badgeColor).toBeDefined()
        expect(['red', 'blue', 'orange', 'green']).toContain(series.badgeColor)
      })
    })
  })

  describe('Data consistency', () => {
    it('should have at least one product in each category', () => {
      const productCategories = [...new Set(PRODUCTS.map((p) => p.category))]
      // Exclude パンフレット as it may not have products
      const mainCategories = CATEGORIES.filter((c) => c !== 'パンフレット')
      mainCategories.forEach((category) => {
        expect(productCategories).toContain(category)
      })
    })

    it('should have no empty strings in product names', () => {
      PRODUCTS.forEach((product) => {
        expect(product.name.trim()).not.toBe('')
      })
    })

    it('should have no duplicate product links', () => {
      const links = PRODUCTS.map((p) => p.link)
      const uniqueLinks = [...new Set(links)]
      expect(uniqueLinks.length).toBe(PRODUCTS.length)
    })
  })
})
