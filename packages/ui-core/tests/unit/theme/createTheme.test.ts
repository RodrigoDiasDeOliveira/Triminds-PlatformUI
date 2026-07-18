import { describe, it, expect } from 'vitest'
import { createTheme, defaultTheme, themeToCSSVariables } from '@/theme/createTheme'
import { mockThemeConfig } from '../../fixtures/mock-data'

describe('createTheme', () => {
  it('returns default theme when no overrides provided', () => {
    const theme = createTheme()
    expect(theme).toEqual(defaultTheme)
  })

  it('merges color overrides correctly', () => {
    const theme = createTheme({
      colors: {
        primary: '#ff0000',
      },
    })
    expect(theme.colors.primary).toBe('#ff0000')
    expect(theme.colors.secondary).toBe(defaultTheme.colors.secondary)
  })

  it('merges radius overrides correctly', () => {
    const theme = createTheme({
      radius: {
        lg: '1rem',
      },
    })
    expect(theme.radius.lg).toBe('1rem')
    expect(theme.radius.md).toBe(defaultTheme.radius.md)
  })

  it('overrides density correctly', () => {
    const theme = createTheme({
      density: 'compact',
    })
    expect(theme.density).toBe('compact')
  })

  it('merges fontFamily overrides correctly', () => {
    const theme = createTheme({
      fontFamily: {
        sans: 'Custom Font, sans-serif',
      },
    })
    expect(theme.fontFamily.sans).toBe('Custom Font, sans-serif')
  })

  it('deep merges all properties', () => {
    const theme = createTheme({
      colors: { primary: '#123456' },
      radius: { sm: '0.25rem' },
      density: 'compact',
    })
    expect(theme.colors.primary).toBe('#123456')
    expect(theme.colors.secondary).toBe(defaultTheme.colors.secondary)
    expect(theme.radius.sm).toBe('0.25rem')
    expect(theme.radius.lg).toBe(defaultTheme.radius.lg)
    expect(theme.density).toBe('compact')
  })
})

describe('themeToCSSVariables', () => {
  it('converts theme to CSS variables object', () => {
    const cssVars = themeToCSSVariables(defaultTheme)
    expect(cssVars).toHaveProperty('--color-primary')
    expect(cssVars).toHaveProperty('--radius-lg')
  })

  it('converts hex colors to RGB', () => {
    const cssVars = themeToCSSVariables(defaultTheme)
    const primaryRgb = cssVars['--color-primary']
    expect(primaryRgb).toMatch(/^\d+ \d+ \d+$/)
  })

  it('includes all color CSS variables', () => {
    const cssVars = themeToCSSVariables(defaultTheme)
    expect(cssVars['--color-primary']).toBeDefined()
    expect(cssVars['--color-primary-foreground']).toBeDefined()
    expect(cssVars['--color-secondary']).toBeDefined()
    expect(cssVars['--color-accent']).toBeDefined()
    expect(cssVars['--color-background']).toBeDefined()
    expect(cssVars['--color-foreground']).toBeDefined()
    expect(cssVars['--color-border']).toBeDefined()
    expect(cssVars['--color-muted']).toBeDefined()
    expect(cssVars['--color-destructive']).toBeDefined()
  })

  it('includes all radius CSS variables', () => {
    const cssVars = themeToCSSVariables(defaultTheme)
    expect(cssVars['--radius-lg']).toBe('0.75rem')
    expect(cssVars['--radius-md']).toBe('0.5rem')
    expect(cssVars['--radius-sm']).toBe('0.375rem')
  })

  it('handles custom themes correctly', () => {
    const customTheme = createTheme({
      colors: { primary: '#ff0000' },
      radius: { lg: '1rem' },
    })
    const cssVars = themeToCSSVariables(customTheme)
    expect(cssVars['--radius-lg']).toBe('1rem')
  })

  it('returns object with string values only', () => {
    const cssVars = themeToCSSVariables(defaultTheme)
    Object.values(cssVars).forEach((value) => {
      expect(typeof value).toBe('string')
    })
  })
})
