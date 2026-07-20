const BASE = import.meta.env.VITE_GEO_API_URL ?? 'http://localhost:8000'

export async function getHealth() {
  const r = await fetch(`${BASE}/health`)
  if (!r.ok) throw new Error(`Health failed: ${r.status}`)
  return r.json() as Promise<{ status: string; model_loaded: boolean }>
}

export async function predict(file: File) {
  const fd = new FormData()
  fd.append('file', file)
  const r = await fetch(`${BASE}/predict`, { method: 'POST', body: fd })
  if (!r.ok) throw new Error(`Predict failed: ${r.status} ${await r.text()}`)
  return r.json() as Promise<{ prediction: number; class_name: string; confidence: number }>
}
