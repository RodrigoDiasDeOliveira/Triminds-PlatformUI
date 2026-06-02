# Testes do @triminds/ui-core

Estrutura completa de testes para a biblioteca de componentes UI com Vitest, React Testing Library e JSDOM.

## Estrutura de Pastas

```
tests/
├── unit/                    # Testes unitários
│   ├── components/ui/       # Testes de componentes UI
│   ├── theme/               # Testes de tema e configuração
│   └── utils/               # Testes de utilidades
├── integration/             # Testes de integração
├── fixtures/                # Dados de teste reutilizáveis
└── setup.ts                 # Configuração global
```

## Scripts de Teste

```bash
# Rodar testes uma vez
pnpm test

# Rodar em modo watch
pnpm test:watch

# Ver interface de testes
pnpm test:ui

# Gerar relatório de cobertura
pnpm test:coverage
```

## Escrevendo Testes

### Teste Básico de Componente

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders button', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
```

### Com User Interaction

```typescript
import userEvent from '@testing-library/user-event'

it('handles click', async () => {
  const user = userEvent.setup()
  const handleClick = vi.fn()
  
  render(<Button onClick={handleClick}>Click</Button>)
  await user.click(screen.getByRole('button'))
  
  expect(handleClick).toHaveBeenCalled()
})
```

## Fixtures

Dados reutilizáveis para testes estão em `tests/fixtures/mock-data.ts`:

```typescript
import { mockThemeConfig } from '@/tests/fixtures/mock-data'

it('uses mock theme', () => {
  const theme = createTheme(mockThemeConfig)
  expect(theme.colors.primary).toBeDefined()
})
```

## Mocks Globais

Configurados automaticamente em `tests/setup.ts`:
- `window.matchMedia`
- `IntersectionObserver`
- Testing Library cleanup

## Cobertura

- Componentes UI: 80%+
- Utilidades: 100%
- Temas: 90%+

## Boas Práticas

1. **Organize por tipo**: unit vs integration
2. **Use fixtures**: reutilize dados de teste
3. **Test behavior**: não detalhes de implementação
4. **Descriptive names**: descreva o que está sendo testado
5. **One assertion per test**: mantenha testes simples

## Debugging

```bash
# Modo interativo
pnpm test:watch

# Interface gráfica
pnpm test:ui

# Com logs
pnpm test -- --reporter=verbose
```
