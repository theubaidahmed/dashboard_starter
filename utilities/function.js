const link = path => process.env.REACT_APP_MAIN_SITE + path;

const env = name => {
    const nodeENV = process.env.NODE_ENV.toUpperCase();

    return (
        process.env[`REACT_APP_${nodeENV}_${name}`] ||
        process.env[`REACT_APP_${name}`]
    );
};

let b64DecodeUnicode = str =>
    decodeURIComponent(
        Array.prototype.map
            .call(
                atob(str),
                c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            )
            .join('')
    );

let parseJwt = token => {
    console.log({ token });
    return JSON.parse(
        b64DecodeUnicode(
            token.split('.')[1].replace('-', '+').replace('_', '/')
        )
    );
};

export { link, env, parseJwt };
