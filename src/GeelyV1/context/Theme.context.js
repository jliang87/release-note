import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();
  const previousTheme = usePrevious(theme);
  const location = useLocation();

  const toggleTheme = () => {
    if (theme === undefined){
      window.history.pushState({}, '', '?darkMode=true');
      setTheme('dark-theme');
    } else {
      const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
      const isDark = newTheme === 'light-theme' ? 'false' : 'true';

      const queryParams = new URLSearchParams(location.search);
      queryParams.delete("darkMode");
      window.history.pushState({}, '', `?${queryParams}&darkMode=${isDark}`);
      setTheme(newTheme);
    }
  };

  function usePrevious(theme) {
    const ref = useRef();
    useEffect(() => {
      ref.current = theme;
    },[theme]);
    return ref.current;
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const themeParam = queryParams.get('darkMode');

    if ((previousTheme === undefined && theme === 'dark-theme') || (theme === undefined && themeParam && themeParam === "true") ||
        (previousTheme === "light-theme" && theme === "dark-theme")) {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
      setTheme('dark-theme');
    } else if ((theme === undefined && themeParam && themeParam === "false") ||
               (previousTheme === "dark-theme" && theme === "light-theme")) {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
      setTheme('light-theme'); 
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
export { ThemeProvider };
