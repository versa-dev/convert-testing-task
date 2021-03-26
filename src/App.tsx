import React from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  ThemeProvider
} from '@material-ui/core';
import useSettings from 'src/hooks/useSettings';
import { createTheme } from 'src/theme';
import routes, { renderRoutes } from 'src/routes';

const App: FC = () => {
  const { settings } = useSettings();

  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {renderRoutes(routes)}
      </Router>
    </ThemeProvider>
  );
};

export default App;
