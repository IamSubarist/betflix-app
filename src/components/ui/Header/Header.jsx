import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ICON_COMPONENTS, MOVIE_LISTS, TOP_LIST } from '../../../constants';

const Icon = ({ iconName }) => {
  const IconComponent = ICON_COMPONENTS[iconName];
  return <IconComponent />;
};

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const trigger = useScrollTrigger({
    target: typeof window !== 'undefined' ? window : undefined, // ✅ Исправлено
  });

  const handleDrawerToggle = () => {
    setIsOpen(prevState => !prevState);
  };
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer open={isOpen} onClose={handleDrawerToggle}>
              <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
                <List>
                  {TOP_LIST.map(item => (
                    <Link key={item.title} component={RouterLink} to={item.url}>
                      <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                          <ListItemIcon>
                            <Icon iconName={item.icon} />
                          </ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
                <Divider />
                <List>
                  {MOVIE_LISTS.map(item => (
                    <Link key={item.title} component={RouterLink} to={item.url}>
                      <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                          <ListItemIcon>
                            <Icon iconName={item.icon} />
                          </ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Box>
            </Drawer>
            <Typography
              variant="h4"
              sx={{ color: 'white', textDecoration: 'none' }}
              component={RouterLink}
              to="/"
            >
              BetFlix
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};
