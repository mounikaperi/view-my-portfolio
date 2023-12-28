import { ThemeProvider as NextThemeProvider } from 'next-themes';

const ThemeProvider = ({ children }) => {
  return (
    <NextThemeProvider defaultTheme="light" attribute="class">
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
