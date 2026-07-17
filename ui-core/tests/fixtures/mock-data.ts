export const mockThemeConfig = {
  colors: {
    primary: '#0ea5e9',
    primaryForeground: '#ffffff',
    secondary: '#64748b',
    accent: '#eab308',
    background: '#ffffff',
    foreground: '#0f172a',
    border: '#e2e8f0',
    muted: '#f1f5f9',
    destructive: '#ef4444',
  },
  radius: {
    lg: '0.75rem',
    md: '0.5rem',
    sm: '0.375rem',
  },
  density: 'comfortable' as const,
  fontFamily: {
    sans: 'Inter, system-ui, sans-serif',
  },
}

export const mockTrimindsConfig = {
  theme: mockThemeConfig,
  sidebar: {
    collapsible: true,
    defaultCollapsed: false,
  },
  branding: {
    companyName: 'Triminds',
  },
}
