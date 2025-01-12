import * as React from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, display: 'flex', mx: "1rem" }}>
        <img src='/KoinX_Logo.svg' alt='KoinX' />
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'start' }}>
            <ListItemText primary={"Crypto Taxes"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'start' }}>
            <ListItemText primary={"Free Tools"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'start' }}>
            <ListItemText primary={"Resource Center"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'start', color: '#fff', mx: ".5rem", background: "linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)", borderRadius: ".3rem" }}>
            <ListItemText primary={"Get Started"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', zIndex: '1' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{
        zIndex: 1200,
        backgroundColor: '#fff',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', my: '1.5rem', mx: {lg: "1.5rem", xs: '0.1rem'} }}
          >
            <img src='/KoinX_Logo.svg' alt='KoinX' />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#0F1629', mx: ".5rem", fontWeight: 600 }}>
              {'Crypto Taxes'}
            </Button>
            <Button sx={{ color: '#0F1629', mx: ".5rem", fontWeight: 600 }}>
              {'Free Tools'}
            </Button>
            <Button sx={{ color: '#0F1629', mx: ".5rem", fontWeight: 600 }}>
              {'Resource Center'}
            </Button>
            <Button sx={{ color: '#fff', mx: ".5rem", fontWeight: 600, background: "linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)", mr: "1.5rem", px: "1rem" }}>
              {'Get Started'}
            </Button>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: -1, display: { sm: 'none' }, color: "#000" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 240,
              zIndex: 1300
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
