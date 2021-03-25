import React from 'react';
import type { FC } from 'react';
import {
  ThemeProvider
} from '@material-ui/core';
import useSettings from 'src/hooks/useSettings';
import { createTheme } from 'src/theme';

import {Box, Typography} from '@material-ui/core'

const App: FC = () => {
  const { settings } = useSettings();

  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography>
          Hello
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default App;
