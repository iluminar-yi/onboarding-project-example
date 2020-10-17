import React, { FC } from 'react';
import Form from 'react-bootstrap/Form';

import { THEMES, Theme } from './theme-context';

interface ThemeSelectorProps {
  theme: Theme;
  onThemeChange: (nextTheme: Theme) => void;
}

export const ThemeSelector: FC<ThemeSelectorProps> = ({ theme, onThemeChange }) => {
  return (
    <Form>
      <Form.Group controlId="form.ThemeSelect">
        <Form.Label>Theme</Form.Label>
        <Form.Control
          as="select"
          value={theme}
          onChange={(e) => {
            onThemeChange(e.target.value as Theme);
          }}
          custom>
          {THEMES.map((theme, i) => {
            return <option key={i} value={theme}>{`${theme[0].toLocaleUpperCase()}${theme.substring(1)}`}</option>;
          })}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};
