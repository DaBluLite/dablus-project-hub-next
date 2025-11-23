# Theme Context Usage

This project now includes a theme context that allows switching between light, dark, and system modes.

## Features

- **Three theme options**: Light, Dark, and System (follows OS preference)
- **Persistent**: Theme preference is saved to localStorage
- **No flash**: Theme is applied before React hydrates to prevent FOUC
- **System detection**: Automatically follows system theme when set to "system"
- **Reactive**: Listens to system theme changes in real-time

## Usage

### Using the Theme Hook

```tsx
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme setting: {theme}</p>
      <p>Resolved theme: {resolvedTheme}</p>
      
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('system')}>System</button>
    </div>
  );
}
```

### Theme Toggle Component

A `ThemeToggle` component is already integrated into the navigation bar. It provides a dropdown menu to switch between the three theme options.

## Implementation Details

### Files Created

1. **`src/contexts/ThemeContext.tsx`** - Main theme context and provider
2. **`src/contexts/index.ts`** - Export file for easy imports
3. **`src/components/ThemeToggle.tsx`** - Theme toggle dropdown component
4. **`src/components/ThemeScript.tsx`** - Script to prevent FOUC

### Configuration Changes

- **`tailwind.config.ts`**: Changed `darkMode` from `"media"` to `"class"`
- **`src/app/layout.tsx`**: Added `ThemeProvider`, `ThemeToggle`, and `ThemeScript`

## API

### `useTheme()`

Returns an object with:

- `theme`: Current theme setting (`'light'` | `'dark'` | `'system'`)
- `setTheme`: Function to update the theme
- `resolvedTheme`: The actual theme being applied (`'light'` | `'dark'`)

### Theme Type

```typescript
type Theme = "light" | "dark" | "system";
```
