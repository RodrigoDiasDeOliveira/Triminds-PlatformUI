import { describe, it, expect } from 'vitest'
import { cn } from '@/utils/cn'

describe('cn utility', () => {
  it('merges class strings correctly', () => {
    const result = cn('px-2 py-1', 'px-4')
    expect(result).toBe('py-1 px-4')
  })

  it('removes falsy values', () => {
    const result = cn('px-2', false, undefined, null, 'py-1')
    expect(result).toBe('px-2 py-1')
  })

  it('handles empty strings', () => {
    const result = cn('', 'px-2', '')
    expect(result).toBe('px-2')
  })

  it('handles conditional classes', () => {
    const isActive = true
    const result = cn('base', isActive && 'active')
    expect(result).toContain('base')
    expect(result).toContain('active')
  })

  it('handles tailwind merge conflicts', () => {
    // The last class wins in tailwind-merge
    const result = cn('bg-red-500', 'bg-blue-500')
    expect(result).toContain('bg-blue-500')
    expect(result).not.toContain('bg-red-500')
  })

  it('handles array of classes', () => {
    const classes = ['px-2', 'py-1']
    const result = cn(classes)
    expect(result).toContain('px-2')
    expect(result).toContain('py-1')
  })

  it('handles multiple arguments', () => {
    const result = cn('text-sm', 'font-bold', 'text-gray-800')
    expect(result).toContain('text-sm')
    expect(result).toContain('font-bold')
    expect(result).toContain('text-gray-800')
  })

  it('handles complex nesting', () => {
    const result = cn(
      'px-2',
      ['py-1', 'text-base'],
      { 'font-bold': true, 'text-red-500': false }
    )
    expect(result).toContain('px-2')
    expect(result).toContain('py-1')
    expect(result).toContain('text-base')
    expect(result).toContain('font-bold')
    expect(result).not.toContain('text-red-500')
  })
})
