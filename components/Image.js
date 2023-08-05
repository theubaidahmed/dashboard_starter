import React from 'react';
import NextImage from 'next/image';

const Image = props => {
    const { name, src, ...rest } = props;

    const link = process.env.REACT_APP_CDN_SERVER + '/images/' + src;

    return <NextImage src={src ? link : `/images/${name}`} {...rest} />;
};

export default Image;
