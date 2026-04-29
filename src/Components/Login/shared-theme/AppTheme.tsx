import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function AppTheme({ children, disableCustomTheme }: { 
  children: React.ReactNode;
  disableCustomTheme?: boolean;
}) {
  const theme = createTheme();
  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}