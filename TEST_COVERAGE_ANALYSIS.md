# Test Coverage Analysis - Kamaki HP

## Executive Summary

**Current State: No testing infrastructure exists.**

This React e-commerce website (~2,200 lines of code) has **zero test coverage**. There are no test files, no test frameworks installed, and no coverage reporting configured.

---

## Current Codebase Overview

| Metric | Value |
|--------|-------|
| Total Source Files | 24 |
| React Components | 9 |
| Page Components | 14 |
| Data Files | 2 |
| Lines of Code | ~2,200 |
| Test Files | 0 |
| Test Coverage | 0% |

**Technology Stack:**
- React 18.3.1 + React Router DOM 6.26.1
- Vite 5.4.2 (build tool)
- Tailwind CSS 3.4.10
- Framer Motion 11.0.0

---

## Recommended Testing Infrastructure

### 1. Install Testing Dependencies

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitest/coverage-v8
```

### 2. Add Vitest Configuration

Create `vitest.config.js`:

```javascript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/test/'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### 3. Add Test Scripts to package.json

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage"
  }
}
```

---

## Priority Areas for Test Coverage

### Priority 1: Critical Business Logic (HIGH)

#### A. Products Page Filtering Logic (`src/pages/Products.jsx:12-18`)

**Why:** This contains the most complex business logic in the application - search and filter functionality that directly impacts user experience.

**What to Test:**
```javascript
// Test cases for product filtering
describe('Products filtering logic', () => {
  it('should filter products by keyword in name')
  it('should filter products by keyword in description')
  it('should filter products by keyword in tags')
  it('should filter products by category')
  it('should combine keyword and category filters')
  it('should be case-insensitive')
  it('should return empty array when no matches')
  it('should return all products when filters are empty')
  it('should handle products with missing tags gracefully')
})
```

**Edge Cases:**
- Empty search query
- Special characters in search (e.g., `・`, `ー`)
- Products without optional fields (`tags`, `image`)
- Japanese vs ASCII character handling

---

#### B. ProductCard Component (`src/components/ProductCard.jsx`)

**Why:** Renders in two variants with conditional logic. Used across multiple pages.

**What to Test:**
```javascript
describe('ProductCard', () => {
  describe('compact variant (default)', () => {
    it('should render product name')
    it('should render product description')
    it('should render category badge when present')
    it('should show fallback when image is missing')
    it('should link to correct product page')
  })

  describe('detailed variant', () => {
    it('should render with variant="detailed"')
    it('should display up to 3 tags maximum')
    it('should render recommendedFor section when present')
    it('should hide recommendedFor when empty')
    it('should show "No Image" placeholder when image missing')
  })
})
```

**Key Logic to Test:**
- Tag truncation: `tags.slice(0, 3)` (line 39)
- Fallback values: `item.name || item.title` (line 7)
- Conditional rendering of `recommendedFor` section

---

### Priority 2: Data Integrity (MEDIUM-HIGH)

#### A. Product Data Validation (`src/data/products.js`)

**Why:** Data consistency is crucial. Invalid data can break the UI.

**What to Test:**
```javascript
describe('Product data validation', () => {
  describe('PRODUCTS array', () => {
    it('should have unique IDs for all products')
    it('should have required fields: id, name, category, link')
    it('should have valid category from CATEGORIES list')
    it('should have valid links matching route definitions')
    it('should have tags as array or undefined')
    it('should have recommendedFor as array or undefined')
  })

  describe('PRODUCT_SERIES array', () => {
    it('should have unique IDs')
    it('should have required fields')
    it('should have valid links')
  })

  describe('CATEGORIES array', () => {
    it('should not be empty')
    it('should contain unique values')
  })
})
```

---

### Priority 3: Navigation & Routing (MEDIUM)

#### A. Navbar Component (`src/components/Navbar.jsx`)

**Why:** Contains stateful mobile menu logic and route-based behavior.

**What to Test:**
```javascript
describe('Navbar', () => {
  it('should render all navigation items')
  it('should toggle mobile menu on button click')
  it('should close mobile menu on route change')
  it('should highlight active navigation item')
  it('should display phone number link in mobile menu')
})
```

#### B. Route Integrity (`src/App.jsx`)

**What to Test:**
```javascript
describe('App routing', () => {
  it('should render Home page at /')
  it('should render Products page at /products')
  it('should render all product detail pages')
  it('should include ScrollToTop component')

  // Cross-reference with data
  it('should have routes for all PRODUCTS links')
})
```

---

### Priority 4: Utility Components (LOW-MEDIUM)

#### A. ScrollToTop (`src/components/ScrollToTop.jsx`)

**What to Test:**
```javascript
describe('ScrollToTop', () => {
  it('should call window.scrollTo on pathname change')
  it('should not scroll on initial mount')
})
```

#### B. Section Component (`src/components/Section.jsx`)

**What to Test:**
```javascript
describe('Section', () => {
  it('should render children')
  it('should render title when provided')
  it('should render subtitle when provided')
  it('should apply custom className')
  it('should apply background color')
})
```

---

## Test Coverage Goals

| Phase | Timeline | Coverage Target | Focus Areas |
|-------|----------|-----------------|-------------|
| Phase 1 | Initial | 30% | Products filter logic, ProductCard variants |
| Phase 2 | +2 weeks | 50% | Data validation, Navigation |
| Phase 3 | +4 weeks | 70% | All components, integration tests |
| Phase 4 | Ongoing | 80%+ | E2E tests, edge cases |

---

## Specific Code Locations Needing Tests

| File | Lines | Priority | Reason |
|------|-------|----------|--------|
| `src/pages/Products.jsx` | 12-18 | HIGH | Filter/search logic with useMemo |
| `src/components/ProductCard.jsx` | 6-122 | HIGH | Dual variant rendering |
| `src/data/products.js` | 1-147 | MEDIUM | Data integrity validation |
| `src/components/Navbar.jsx` | 15-22 | MEDIUM | Stateful mobile menu |
| `src/App.jsx` | 27-43 | MEDIUM | Route definitions |
| `src/components/ScrollToTop.jsx` | - | LOW | Side effect hook |

---

## Risk Assessment

### High Risk (No Tests)
1. **Product filtering breaks** - Users cannot find products
2. **Invalid product links** - 404 errors on product pages
3. **Data inconsistencies** - Missing fields cause runtime errors

### Medium Risk
1. **Navigation issues** - Menu doesn't close properly
2. **Rendering bugs** - ProductCard shows wrong variant

### Low Risk
1. **Scroll position issues** - Minor UX problem
2. **Styling inconsistencies** - Visual only, no functionality impact

---

## Recommended First Test File

Create `src/pages/__tests__/Products.test.jsx`:

```javascript
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Products from '../Products'

// Mock the data
vi.mock('@/data/products', () => ({
  CATEGORIES: ['鋏', '鎌', '鋸'],
  PRODUCTS: [
    {
      id: 'test1',
      name: '高枝切鋏',
      category: '鋏',
      desc: 'テスト説明',
      link: '/products/test',
      tags: ['高所作業', '剪定'],
    },
    {
      id: 'test2',
      name: '芝生鋏',
      category: '鎌',
      desc: '芝生用',
      link: '/products/test2',
      tags: ['芝生'],
    },
  ],
}))

describe('Products page', () => {
  const renderProducts = () => {
    return render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    )
  }

  it('renders all products initially', () => {
    renderProducts()
    expect(screen.getByText('高枝切鋏')).toBeInTheDocument()
    expect(screen.getByText('芝生鋏')).toBeInTheDocument()
  })

  it('filters products by search keyword', () => {
    renderProducts()
    const searchInput = screen.getByPlaceholderText(/キーワード検索/)
    fireEvent.change(searchInput, { target: { value: '高枝' } })

    expect(screen.getByText('高枝切鋏')).toBeInTheDocument()
    expect(screen.queryByText('芝生鋏')).not.toBeInTheDocument()
  })

  it('filters products by category', () => {
    renderProducts()
    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: '鎌' } })

    expect(screen.queryByText('高枝切鋏')).not.toBeInTheDocument()
    expect(screen.getByText('芝生鋏')).toBeInTheDocument()
  })

  it('shows no results message when no matches', () => {
    renderProducts()
    const searchInput = screen.getByPlaceholderText(/キーワード検索/)
    fireEvent.change(searchInput, { target: { value: 'nonexistent' } })

    expect(screen.getByText(/該当する製品が見つかりませんでした/)).toBeInTheDocument()
  })

  it('resets filters when reset button clicked', () => {
    renderProducts()
    const searchInput = screen.getByPlaceholderText(/キーワード検索/)
    fireEvent.change(searchInput, { target: { value: 'nonexistent' } })

    const resetButton = screen.getByText(/条件をリセット/)
    fireEvent.click(resetButton)

    expect(screen.getByText('高枝切鋏')).toBeInTheDocument()
    expect(screen.getByText('芝生鋏')).toBeInTheDocument()
  })
})
```

---

## Conclusion

This codebase has no test coverage, which is a significant gap for a production e-commerce website. The recommended approach is:

1. **Immediate:** Set up testing infrastructure (Vitest + React Testing Library)
2. **Week 1:** Add tests for Products filtering logic (highest risk)
3. **Week 2:** Add tests for ProductCard and data validation
4. **Week 3+:** Expand to navigation, routing, and remaining components

The filtering logic in `Products.jsx` should be the first priority as it represents the core user-facing functionality and has the most complex conditional logic.
