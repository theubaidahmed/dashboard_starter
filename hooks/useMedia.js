import React, { useEffect, useState } from 'react';

const useMedia = (value, cb) => {
    const [media, setMedia] = useState(false);

    useEffect(() => {
        const matched = window.matchMedia(`(min-width: ${value}px)`);

        matched.addEventListener('change', e => {
            setMedia(e.matches);
            if (cb) cb(e);
        });
    }, [media]);

    return media;
};

export default useMedia;
