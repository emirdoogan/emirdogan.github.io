import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { GlobalStyles } from '@mui/material';

// Theme configuration
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF1A1A',
      dark: '#B30000',
    },
    secondary: {
      main: '#FF1A1A',
    },
    background: {
      default: '#0F0F0F',
      paper: '#1A1A1A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Roboto Mono", monospace',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(180deg, #000000 0%, #0F0F0F 70%)',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#0F0F0F',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#FF1A1A',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#B30000',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
          padding: '12px 24px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 0 15px #FF1A1A',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 0,
          '&:hover': {
            boxShadow: '0 0 15px rgba(255, 26, 26, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 0,
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
  },
});

// Custom global styles
const customGlobalStyles = {
  '.page-container': {
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '5px',
    padding: '5px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  '.content-section': {
    padding: '2rem',
  },
  '.svg-background': {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    opacity: 0.1,
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={customGlobalStyles} />
      <Router>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
}

export default App;
