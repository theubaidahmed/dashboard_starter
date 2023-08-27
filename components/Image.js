import React from 'react';
import NextImage from 'next/image';

const Image = props => {
    const { name, src, ...rest } = props;
    return (
        <NextImage
            src={src ? 'https://cdn.clikkle.com/images/' + src : `/images/${name}`}
            {...rest}
        />
    );
};

export default Image;
