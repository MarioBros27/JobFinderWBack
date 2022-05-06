
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#020811',
      main: '#020811',
      dark: '#020811',
      contrastText: '#fff',
    },
    secondary: {
      light: '#020811',
      main: '#020811',
      dark: '#020811',
      contrastText: '#000',
    },
  },
});
function App() {
  return (


    <ThemeProvider theme={theme}>

      <AppBar position="static">
        <Toolbar sx={{ paddingTop: 2 }} >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>

          <Link to="/" style={{ color: "#fff" }}><Button color="inherit"><u>Menú</u></Button></Link>
          <Link to="/jobs" style={{ color: "#fff" }}><Button color="inherit"><u>Trabajos</u></Button></Link>
          <Link to="/profile" style={{ color: "#fff" }}><Button color="inherit"><u>Perfil</u></Button></Link>
          <Button color="inherit"><u>Preguntas Frecuentes</u></Button>
        </Toolbar>

      </AppBar>

      <Outlet />
      <footer style={{ backgroundColor: "#000", paddingTop: 20, paddingBottom: 20 }}>
        <Grid container direction="row"
          justifyContent="center"
          alignItems="center">
          <Grid item container xs={7}>
            <Grid container item xs={6}>
              <Grid item xs={12}>
                <Typography variant="h8" sx={{ color: "#fff" }}> JobFinder de México ©</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h8" sx={{ color: "#fff" }}> Miguel Allende 1789, Col. Insurgentes, CDMX</Typography>
              </Grid>
            </Grid>
            <Grid container item xs={6}>
              <Grid item xs={12}>
                <Typography variant="h8" sx={{ color: "#fff" }}> Contacto</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h8" sx={{ color: "#fff" }}> 555-51-23432</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </footer>
    </ThemeProvider>

  );
}

export default App;
