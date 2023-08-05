import { createTheme } from '@mui/material';

const Theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0cad77',
        },
        background: {
            default: '#000',
            paper: 'rgb(33, 37, 41)',
        },
        text: {
            tertiary: 'rgb(151 151 151 / 90%)',
        },
        custom: {
            background: 'rgb(45 51 57)',
            borderColor: 'rgba(255, 255, 255, 0.07)',
        },
    },
    components: {
        MuiIconButton: {
            variants: [
                {
                    props: { disableRipple: true, variant: 'navIcon' },
                    style: ({ theme }) => ({
                        marginRight: theme.spacing(2),
                        padding: '12px',
                        borderRadius: '8px',
                        backgroundColor: theme.palette.custom.background,
                        '&:hover': {
                            backgroundColor: theme.palette.custom.background,
                        },
                    }),
                },
            ],
        },
        MuiDivider: {
            styleOverrides: {
                light: {
                    borderColor: '#424242',
                    width: '100%',
                },
            },
        },
        MuiListItemButton: {
            variants: [
                {
                    props: { variant: 'sidebarButton' },
                    style: ({ theme }) => ({
                        padding: '5px 15px',
                        cursor: 'pointer',
                        color: theme.palette.text.secondary,
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                        '&.Mui-selected': {
                            '&:hover': {
                                backgroundColor: theme.palette.primary.main,
                            },
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: '5px',
                            '.MuiListItemIcon-root': {
                                color: 'white',
                            },
                            '.MuiListItemText-root': {
                                color: 'white',
                            },
                        },
                    }),
                },
            ],
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained' },
                    style: ({ theme }) => ({ color: theme.palette.common.white }),
                },
            ],
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginBottom: '16px',
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                root: {
                    '.MuiPaper-root.MuiMenu-paper.MuiPopover-paper': {
                        width: 'min(100%, 180px)',
                    },
                    '.MuiMenu-list': {
                        padding: '5px',
                    },
                    '.MuiButtonBase-root.MuiMenuItem-root': {
                        fontSize: '14px',
                    },
                },
            },
        },
    },
});

export default Theme;
