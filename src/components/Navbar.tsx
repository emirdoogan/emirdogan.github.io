import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Projects', path: '/projects' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          component={RouterLink}
          to={item.path}
          key={item.text}
          onClick={handleDrawerToggle}
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            WebkitTapHighlightColor: 'transparent',
            outline: 'none',
            transition: 'background-color 0.2s',
            '&:hover': {
              backgroundColor: 'rgba(255, 26, 26, 0.1)',
            },
            '&:active': {
              backgroundColor: 'rgba(255, 26, 26, 0.1)',
            },
            '&:focus': {
              backgroundColor: 'transparent',
            },
            '&:focus-visible': {
              outline: 'none',
            },
            '@media (hover: none)': {
              '&:hover': {
                backgroundColor: 'transparent',
              },
              '&:active': {
                backgroundColor: 'rgba(255, 26, 26, 0.1)',
              },
              '&:focus': {
                backgroundColor: 'transparent',
                outline: 'none',
              },
              '&::after': {
                display: 'none',
              }
            }
          }}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(8px)' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold',
            }}
          >
            Emir Dogan
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                WebkitTapHighlightColor: 'transparent',
                outline: 'none',
                border: 'none',
                transition: 'background-color 0.2s',
                '&:hover': {
                  backgroundColor: 'rgba(255, 26, 26, 0.1)',
                },
                '&:active': {
                  backgroundColor: 'rgba(255, 26, 26, 0.1)',
                },
                '&:focus': {
                  backgroundColor: 'transparent',
                  outline: 'none',
                },
                '&:focus-visible': {
                  outline: 'none',
                },
                '@media (hover: none)': {
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                  '&:active': {
                    backgroundColor: 'rgba(255, 26, 26, 0.1)',
                  },
                  '&:focus': {
                    backgroundColor: 'transparent',
                    outline: 'none',
                  },
                  '&::after': {
                    display: 'none',
                  }
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                  sx={{ ml: 2 }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: 'background.default',
          },
          '& *': {
            WebkitTapHighlightColor: 'transparent',
          }
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar />
    </>
  );
};

export default Navbar; 