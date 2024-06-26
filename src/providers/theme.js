import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import usePrevious from "../hooks/usePrevious";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  document.documentElement.classList.add(props.templateClass);

  const [theme, setTheme] = useState();
  const previousTheme = usePrevious(theme);
  const location = useLocation();

  const toggleTheme = () => {
    const queryParams = new URLSearchParams(location.search);

    if (theme === undefined){
      window.history.pushState({}, '', `?${queryParams}&darkMode=true`);
      setTheme('dark-theme');
    } else {
      const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
      const isDark = newTheme === 'light-theme' ? 'false' : 'true';

      queryParams.delete("darkMode");
      window.history.pushState({}, '', `?${queryParams}&darkMode=${isDark}`);
      setTheme(newTheme);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const themeParam = queryParams.get('darkMode');

    if ((previousTheme === undefined && theme === 'dark-theme') || (theme === undefined && themeParam && themeParam === "true") ||
        (previousTheme === "light-theme" && theme === "dark-theme")) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      setTheme('dark-theme');
    } else if ((theme === undefined && themeParam && themeParam === "false") ||
        (previousTheme === "dark-theme" && theme === "light-theme")) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      setTheme('light-theme'); 
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
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
