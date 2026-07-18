import { Button, Card, ThemeProvider } from '@triminds/ui-core'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme="satellite">
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold">Triminds UI Demo</h1>
          
          <Card className="p-8">
            <h2 className="text-2xl mb-6">Testando Componentes</h2>
            
            <div className="space-y-4">
              <Button 
                variant="primary"
                onClick={() => setCount(c => c + 1)}
              >
                Contador: {count}
              </Button>

              <Button variant="secondary">
                Secondary Button
              </Button>

              <Button variant="outline">
                Outline Button
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App