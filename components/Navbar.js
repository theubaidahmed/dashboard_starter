import React, { useEffect, useRef, useState } from 'react';

//mui component
import {
    AppBar,
    Box,
    Stack,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Avatar,
    Grid,
    Toolbar,
    Typography,
    ListItemButton,
} from '@mui/material';

//mui icons
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import StorageIcon from '@mui/icons-material/Storage';

import MenuIcon from '@mui/icons-material/Menu';

//services
import NavLinks from '@/services/links';
import Search from './Search';
import Image from './Image';
import { useRouter } from 'next/router';
import NavLink from './NavLink';

const drawerWidth = 280;

export default function Navbar(props) {
    const { children } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    // const { showSuccess, showError } = useMessage();
    const location = useRouter();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const page = NavLinks.find(link => location.pathname === link.to) || {
        name: 'Overview Storage',
        to: '/',
    };

    const drawer = (
        <Box
            bgcolor='background.paper'
            minHeight='100vh'
            color='text.secondary'
            sx={{ borderRight: '1px solid custom.border' }}>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                // component={Link}
                minHeight={'85px'}
                // href='/'
                sx={{ textDecoration: 'none', color: 'text.primary' }}>
                {/* <Image src='files/logo/files-text.png' sx={{ height: '40px' }} /> */}
                {/* <Typography variant='h6' letterSpacing={1} ml={2}>
                    Clikkle Files
                </Typography> */}
            </Box>
            <Divider />
            {/* <Typography variant='body2' pl={3} mt={1.5} fontSize='14px' fontWeight={500}>
                Overview
            </Typography> */}
            <List sx={{ px: 3, py: 1.8 }}>
                <NavLink href='/' style={{ textDecoration: 'none' }}>
                    {({ isActive }) => (
                        <ListItem disablePadding>
                            <ListItemButton
                                selected={isActive}
                                disableRipple
                                disableTouchRipple
                                variant='sidebarButton'>
                                <ListItemIcon
                                    sx={{
                                        minWidth: '35px',
                                        color: 'text.secondary',
                                    }}>
                                    <StorageIcon fontSize='small' />
                                </ListItemIcon>
                                <ListItemText primary='Overview Storage' />
                            </ListItemButton>
                        </ListItem>
                    )}
                </NavLink>
            </List>

            <Divider />
            <Typography variant='body2' pl={3} mt={1.5} fontSize='14px' fontWeight={500}>
                File Manager
            </Typography>
            <List sx={{ px: 3 }}>
                {NavLinks.map(link => (
                    <NavLink
                        href={link.to}
                        key={link.name}
                        style={{ textDecoration: 'none', color: 'inherit' }}>
                        {isActive => (
                            <ListItem disablePadding>
                                <ListItemButton
                                    selected={isActive}
                                    disableRipple
                                    disableTouchRipple
                                    variant='sidebarButton'>
                                    <ListItemIcon
                                        sx={{
                                            minWidth: '35px',
                                            color: 'text.secondary',
                                        }}>
                                        {link.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={link.name} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </NavLink>
                ))}
            </List>
        </Box>
    );

    return (
        <Box p={0}>
            <AppBar
                elevation={0}
                component={Box}
                position='fixed'
                sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` },
                    backgroundColor: 'background.paper',

                    borderBottom: '1px solid custom.border',
                    borderBottomColor: 'custom.border',
                    color: 'text.primary',
                }}>
                <Toolbar
                    sx={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        '&': {
                            minHeight: '85px',
                        },
                    }}>
                    <Grid container alignItems='center'>
                        <Grid item>
                            <IconButton
                                edge='start'
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { md: 'none' } }}>
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs>
                            <Typography>{page?.name}</Typography>
                        </Grid>
                        <Grid
                            item
                            xs={5}
                            alignItems={{ xs: 'center', md: 'start' }}
                            display={{ xs: 'none', md: 'block' }}>
                            <Search />
                        </Grid>
                        <Grid item xs={4}>
                            <Stack
                                direction='row'
                                alignItems='center'
                                justifyContent='flex-end'
                                spacing={4}>
                                <Box display={{ xs: 'block', md: 'none' }} pt={1} mx={1}>
                                    <SearchIcon />
                                </Box>

                                <Box display={{ xs: 'none', sm: 'block' }}>
                                    <IconButton sx={{ mx: 0.5 }}>
                                        <NotificationsNoneOutlinedIcon fontSize='small' />
                                    </IconButton>
                                </Box>

                                <IconButton ml={0}>
                                    <Avatar
                                        alt='Remy Sharp'
                                        src='https://shorturl.at/fjqz9'
                                        sx={{ width: 30, height: 30 }}
                                    />
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box
                component='nav'
                sx={{
                    width: { md: drawerWidth },
                    flexShrink: { sm: 0 },
                    backgroundColor: 'background.paper',
                }}
                aria-label='mailbox folders'>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            backgroundColor: 'background.default',
                        },
                    }}>
                    {drawer}
                </Drawer>
                <Drawer
                    variant='permanent'
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            backgroundColor: 'background.default',
                        },
                    }}
                    open>
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component='main'
                sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` },
                    minHeight: 'calc(100vh - 115px)',
                    backgroundColor: 'background.default',
                    mt: { xs: 7, sm: '115px' },
                }}>
                {children}
            </Box>
        </Box>
    );
}
