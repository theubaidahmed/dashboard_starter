import React from 'react';
import NextImage from 'next/image';

const Image = props => {
    return <NextImage src={`/images/${props.src}`} {...props} />;
};

export default Image;
