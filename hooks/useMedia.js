import { useEffect, useState } from 'react';

const useMedia = (query, cb) => {
    const [media, setMedia] = useState(false);

    useEffect(() => {
        const matched = window.matchMedia(query);
        setMedia(matched.matches);
        matched.addEventListener('change', e => {
            setMedia(e.matches);
            if (cb) cb(e);
        });
    }, [media]);

    return media;
};

export default useMedia;
