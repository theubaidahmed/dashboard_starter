import React, { createContext, useContext } from 'react';
import Navbar from './Navbar';
// import AuthorizationProvider from '@/hooks/Authorize';
import { CssBaseline, ThemeProvider } from '@mui/material';
import useSnack from '@/hooks/useSnack';
import Theme from '@/styles/theme';

const SnackContext = createContext();

export default function Header({ children }) {
    const { SnackBar, showMessage } = useSnack();

    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <SnackContext.Provider value={showMessage}>
                {/* <AuthorizationProvider> */}
                <Navbar>{children}</Navbar>
                {/* </AuthorizationProvider> */}
                {SnackBar}
            </SnackContext.Provider>
        </ThemeProvider>
    );
}

const useMessage = () => {
    const showMessage = useContext(SnackContext);

    function showSuccess(msg) {
        showMessage({ success: msg });
    }

    function showError(msg) {
        showMessage({ error: msg });
    }

    return { showError, showSuccess };
};

export { useMessage };
