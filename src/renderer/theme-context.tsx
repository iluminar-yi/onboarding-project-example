import React from 'react';

import { Consumer, noOp } from './utils';

export type Theme = 'light' | 'dark';
export const THEMES: Theme[] = ['light', 'dark'];

interface ThemeContextType {
  theme: Theme;
  setTheme: Consumer<Theme>;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
  setTheme: noOp,
});
