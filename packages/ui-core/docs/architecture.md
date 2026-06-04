# Triminds Platform Architecture

## Overview

Triminds Platform is the official frontend platform and Design System of Triminds.

The architecture is designed to provide a single reusable foundation for all current and future products, ensuring:

* Visual consistency
* Faster development
* Shared UX patterns
* Centralized theming
* Reduced technical debt

---

# Architectural Strategy

The platform adopts a combination of:

* Path B — Shared Component Library + AppShell + Page Patterns
* Path D — Monorepo Architecture

This combination provides the best balance between:

* Standardization
* Flexibility
* Developer productivity
* Long-term maintainability

---

# High-Level Architecture

```text
triminds-platform
│
├── apps/
│   ├── ocl
│   ├── satellite
│   ├── vector-ai
│   └── demo
│
├── packages/
│   ├── ui-core
│   ├── ui-themes
│   └── shared-utils
│
└── docs/
```

---

# Architectural Layers

## Layer 1 — Design Tokens

Central source of truth.

Examples:

* Colors
* Typography
* Radius
* Shadows
* Spacing
* Animations

---

## Layer 2 — Primitive Components

Reusable UI building blocks.

Examples:

* Button
* Input
* Card
* Dialog
* Tooltip

Technology:

* Radix UI
* Tailwind CSS
* CVA

---

## Layer 3 — Layout System

Defines visual structure.

Components:

* AppShell
* Sidebar
* Header
* PageContainer
* Grid

Purpose:

Ensure every application follows the same navigation and layout conventions.

---

## Layer 4 — Page Patterns

Reusable business-oriented page templates.

Examples:

### DashboardPage

Widgets and metrics.

### DataTablePage

CRUD and data management.

### AuthPage

Authentication flows.

### AIChatPage

AI assistant interfaces.

---

## Layer 5 — Product Applications

Applications consume the platform through composition.

Example:

```tsx
<ThemeProvider theme="ocl">
  <AppShell>
    <DashboardPage />
  </AppShell>
</ThemeProvider>
```

Applications should primarily compose existing patterns rather than creating custom layouts.

---

# Theming Architecture

Themes are implemented through CSS Variables.

Supported themes:

* default
* ocl
* satellite
* vector-ai

Theming must never require component modifications.

Only tokens may change.

---

# Technology Stack

| Category        | Technology            |
| --------------- | --------------------- |
| Framework       | React 19              |
| Language        | TypeScript            |
| Styling         | Tailwind CSS v4       |
| Components      | Radix UI              |
| Variants        | CVA                   |
| Forms           | React Hook Form + Zod |
| Build           | Vite                  |
| Monorepo        | Turborepo             |
| Package Manager | pnpm                  |
| Testing         | Vitest                |
| Documentation   | Storybook             |

---

# Architectural Principles

## Composition Over Configuration

Prefer composition whenever possible.

## Accessibility First

All components must support:

* Keyboard navigation
* Screen readers
* ARIA standards

## Mobile First

Responsive design is mandatory.

## Performance First

Optimize:

* Tree shaking
* Lazy loading
* Bundle size

## Incremental Evolution

Avoid large rewrites.

Prefer iterative improvements.

---

# Governance

All major architectural changes must be documented through ADRs.

Location:

```text
docs/adr/
```

Current ADRs:

* 0001-design-system-monorepo.md
