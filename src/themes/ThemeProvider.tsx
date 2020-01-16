import * as React from 'react';
import { theme, Theme } from './Theme';

export const ThemeContext = React.createContext<Theme>(theme());

// ThemeProvider使用の際は、tsxにすることを忘れずに行う。
export const ThemeProvider = (theme: Theme, children: React.ReactNode) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
