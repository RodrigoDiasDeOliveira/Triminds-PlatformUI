import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

describe('Card', () => {
  it('renders card component', () => {
    const { container } = render(<Card>Card content</Card>)
    const card = container.querySelector('div')
    expect(card).toHaveClass('rounded-2xl')
    expect(card).toHaveClass('border')
  })

  it('renders all card subcomponents correctly', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description</CardDescription>
        </CardHeader>
        <CardContent>Main content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    )

    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card description')).toBeInTheDocument()
    expect(screen.getByText('Main content')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })

  it('CardHeader has correct styling', () => {
    render(
      <Card>
        <CardHeader>Header</CardHeader>
      </Card>
    )
    const header = screen.getByText('Header')
    expect(header).toHaveClass('p-6')
  })

  it('CardTitle renders as p tag with correct styling', () => {
    const { container } = render(
      <Card>
        <CardTitle>Title</CardTitle>
      </Card>
    )
    const title = container.querySelector('p')
    expect(title).toHaveClass('text-lg')
    expect(title).toHaveClass('font-semibold')
  })

  it('CardContent has correct padding', () => {
    render(
      <Card>
        <CardContent>Content</CardContent>
      </Card>
    )
    const content = screen.getByText('Content')
    expect(content).toHaveClass('p-6')
  })

  it('accepts className prop and merges with default styles', () => {
    const { container } = render(
      <Card className="custom-class">Content</Card>
    )
    const card = container.querySelector('div')
    expect(card).toHaveClass('custom-class')
    expect(card).toHaveClass('rounded-2xl')
  })
})
