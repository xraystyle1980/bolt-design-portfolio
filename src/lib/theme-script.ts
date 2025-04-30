export const themeScript = `
  (function() {
    let stored = localStorage.getItem('theme');
    let isDark;
    
    if (stored === 'dark') {
      isDark = true;
    } else if (stored === 'light') {
      isDark = false;
    } else {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  })();
`; 