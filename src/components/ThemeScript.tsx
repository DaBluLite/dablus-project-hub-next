// This script runs before React hydrates to prevent flash of unstyled content
export function ThemeScript() {
  const themeScript = `
    (function() {
      function getTheme() {
        const stored = localStorage.getItem('theme-preference');
        if (stored && ['light', 'dark', 'system'].includes(stored)) {
          if (stored === 'system') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          }
          return stored;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      
      const theme = getTheme();
      document.documentElement.classList.add(theme);
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
