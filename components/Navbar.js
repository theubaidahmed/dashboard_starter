import React, { useEffect, useMemo, useState } from 'react';

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
    styled,
    Badge,
    useTheme,
} from '@mui/material';

//mui icons
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import StorageIcon from '@mui/icons-material/Storage';

import MenuIcon from '@mui/icons-material/Menu';

//services
import NavLinks from '@/services/navLinks';
import Search from './Search';
import Image from './Image';
import { useRouter } from 'next/router';
import NavLink from './NavLink';
import useMedia from '@/hooks/useMedia';

const drawerWidth = 270;

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#0dcd94',
        color: '#0dcd94',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export default function Navbar(props) {
    const { children } = props;
    const theme = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawerOpenMedia = useMedia('900');

    useMemo(
        () => (drawerOpenMedia ? setDrawerOpen(true) : setDrawerOpen(false)),
        [drawerOpenMedia]
    );
    // const { showSuccess, showError } = useMessage();

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawer = (
        <Box color='text.secondary'>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                // component={Link}
                minHeight={'85px'}
                // href='/'
                sx={{ textDecoration: 'none', color: 'text.primary' }}>
                <Image name='greenIcon.png' width='73' height='75' />
                <Typography variant='h6' letterSpacing={1}>
                    Workspace
                </Typography>
            </Box>
            <Divider />
            <Stack direction='column' alignItems='center' my={3}>
                <Box
                    sx={{
                        padding: '4px',
                        bgcolor: 'custom.background',
                        borderRadius: '100%',
                        mb: 1.5,
                        transition: 'all 250ms ease-out',
                        '&:hover': {
                            transform: 'scale(1.1)',
                        },
                    }}>
                    <StyledBadge
                        overlap='circular'
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant='dot'>
                        <Avatar
                            alt='Remy Sharp'
                            src='https://shorturl.at/fjqz9'
                            sx={{
                                width: 80,
                                height: 80,
                            }}
                        />
                    </StyledBadge>
                </Box>
                <Typography variant='h6' color='text.primary'>
                    Mohd Ubaid
                </Typography>
                <Typography variant='body2'>Web Developer</Typography>
            </Stack>

            <Divider />
            <Typography
                variant='body2'
                pl={3}
                mt={2}
                fontSize='11px'
                fontWeight={500}
                color='text.tertiary'>
                DASHBOARDS
            </Typography>
            <List sx={{ p: '10px' }}>
                {NavLinks.dashboard.map(link => (
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
            <Typography
                variant='body2'
                pl={3}
                mt={2}
                fontSize='11px'
                fontWeight={500}
                color='text.tertiary'>
                APPS
            </Typography>
            <List sx={{ p: '10px' }}>
                {NavLinks.apps.map(link => (
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
            <Typography
                variant='body2'
                pl={3}
                mt={2}
                fontSize='11px'
                fontWeight={500}
                color='text.tertiary'>
                PAGES
            </Typography>
            <List sx={{ p: '10px' }}>
                {NavLinks.apps.map(link => (
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
                    width: { md: drawerOpen ? `calc(100% - ${drawerWidth}px)` : '100%' },
                    ml: { md: drawerOpen ? `${drawerWidth}px` : 0 },
                    backgroundColor: 'background.paper',
                    transition: 'all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                    borderBottom: '1px solid',
                    borderBottomColor: 'custom.borderColor',
                    color: 'text.primary',
                }}>
                <Toolbar
                    sx={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        '&': {
                            px: 2,
                            minHeight: '85px',
                        },
                    }}>
                    <Grid container alignItems='center'>
                        <Grid item>
                            <IconButton
                                disableRipple
                                onClick={handleDrawerToggle}
                                variant='navIcon'>
                                <MenuIcon sx={{ fontSize: 20 }} />
                            </IconButton>
                        </Grid>
                        <Grid
                            item
                            xs={3}
                            alignItems={{ xs: 'center', md: 'start' }}
                            display={{ xs: 'none', md: 'block' }}>
                            <Search />
                        </Grid>
                        <Grid item xs>
                            <Stack
                                direction='row'
                                alignItems='center'
                                justifyContent='flex-end'
                                spacing={2}>
                                <Box display={{ xs: 'block', md: 'none' }}>
                                    <IconButton disableRipple variant='navIcon' sx={{ mr: 0 }}>
                                        <SearchIcon />
                                    </IconButton>
                                </Box>

                                <Box display={{ xs: 'none', md: 'block' }}>
                                    <IconButton disableRipple variant='navIcon'>
                                        <WbSunnyOutlinedIcon sx={{ fontSize: 20 }} />
                                    </IconButton>
                                    <IconButton disableRipple variant='navIcon'>
                                        <EmailOutlinedIcon sx={{ fontSize: 20 }} />
                                    </IconButton>
                                    <IconButton disableRipple variant='navIcon' sx={{ mr: 0 }}>
                                        <NotificationsNoneOutlinedIcon sx={{ fontSize: 20 }} />
                                    </IconButton>
                                </Box>

                                <Avatar
                                    alt='Remy Sharp'
                                    src='https://shorturl.at/fjqz9'
                                    sx={{ width: 42, height: 42, borderRadius: '8px' }}
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box
                component='nav'
                sx={{
                    width: drawerWidth,
                    flexShrink: { md: 0 },
                    backgroundColor: 'background.paper',
                }}
                aria-label='mailbox folders'>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant={drawerOpenMedia ? 'persistent' : 'temporary'}
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        '& .MuiDrawer-paper': {
                            '::-webkit-scrollbar': {
                                width: '3px',
                                backgroundColor: 'transparent',
                            },
                            '::-webkit-scrollbar-track': {
                                backgroundColor: 'transparent',
                            },
                            '::-webkit-scrollbar-thumb': {
                                backgroundColor: 'transparent',
                            },
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            backgroundColor: 'background.paper',
                            backgroundImage: 'none',
                            '&:hover::-webkit-scrollbar-thumb': {
                                backgroundColor: 'custom.background',
                            },
                        },
                    }}>
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component='main'
                sx={{
                    width: { md: drawerOpen ? `calc(100% - ${drawerWidth}px)` : '100%' },
                    ml: { md: drawerOpen ? `${drawerWidth}px` : 0 },
                    minHeight: 'calc(100vh - 115px)',
                    transition: 'all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                    backgroundColor: 'background.default',
                    mt: { xs: 7, md: '115px' },
                }}>
                {children}
            </Box>
        </Box>
    );
}
