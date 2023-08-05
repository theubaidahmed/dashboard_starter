import React, { createContext, useContext, useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import { getCookie } from '@/utilities/cookies';
import axios from 'axios';

const authorizeContext = createContext();

const authServer = axios.create({
    baseURL: process.env.AUTHENTICATION_SERVER,
});

const accessToken = getCookie('accessToken');
authServer.defaults.withCredentials = false;
authServer.defaults.headers.Authorization = `Bearer ${accessToken}`;

const AuthorizationProvider = ({ children }) => {
    const [content, setContent] = useState(<Loading message='Please wait, logging you in...' />);
    const [user, setUser] = useState({});

    const authorize = async (loggedIn, cb) => {
        if (loggedIn) {
            setContent(children);
        } else {
            const redirectTo =
                env('AUTHENTICATION_CLIENT') +
                '/login?redirectto=' +
                encodeURIComponent(env('DOMAIN'));
            console.log(redirectTo);
            setContent(
                <Loading
                    message='Please wait, redirecting you to Clikkle Accounts'
                    redirectTo={redirectTo}
                />
            );
        }
        if (typeof cb === 'function') cb(setUser);
    };

    useEffect(() => {
        (async () => {
            try {
                const role = getCookie('role');
                if (!role) throw new Error('role not found');
                const response = await authServer.get(`/${role}/profile`);
                const user = response.data.user;
                authorize(true, setUser => setUser(user));
            } catch (err) {
                console.log(err);
                authorize(false);
            }
        })();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <authorizeContext.Provider value={{ authorize, setUser, user }}>
            {content}
        </authorizeContext.Provider>
    );
};

const useAuthorize = () => useContext(authorizeContext).authorize;
const useUser = () => useContext(authorizeContext).user;
const useSetUser = () => useContext(authorizeContext).setUser;

export default AuthorizationProvider;
export { useAuthorize, useUser, useSetUser };
