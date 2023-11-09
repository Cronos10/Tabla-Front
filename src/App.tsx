import React, { useState } from 'react';
import './App.css';
import Tabla from './Components/Tabla';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import CssBaseline from '@mui/material/CssBaseline'; 

function App() {
  // Control modo dark
  const [isDarkMode, setIsDarkMode] = useState(true);

  // tema modo dark
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    typography: {
      fontFamily: isDarkMode ? 'Comic Sans MS' : 'Geneva',
    },
  });

  // Cambiar modo 
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* modo dark */}
      <IconButton onClick={toggleDarkMode} color="inherit">
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={12} md={8}>
          <Paper elevation={2} style={{ padding: '1rem', margin: '1rem' }}>
            <Tabla />
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
