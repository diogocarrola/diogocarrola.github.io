class DarkMode {
  constructor() {
    this.toggleButton = document.querySelector('.theme-toggle');
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    this.setTheme(this.currentTheme);
    if (this.toggleButton) {
      this.toggleButton.addEventListener('click', () => this.toggleTheme());
    }
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;

    // Update meta theme-color for mobile browsers
    this.updateMetaThemeColor(theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  updateMetaThemeColor(theme) {
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      document.head.appendChild(metaThemeColor);
    }

    if (theme === 'dark') {
      metaThemeColor.content = '#121212';
    } else {
      metaThemeColor.content = '#ffffff';
    }
  }
}

// Initialize dark mode when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new DarkMode();
});