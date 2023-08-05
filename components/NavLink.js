import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NavLink({ children, className, href, style, ...props }) {
    const { pathname } = useRouter();
    
    if (!href) throw new Error('href is not defined');

    const isActive = pathname === href;

    const getStyle = () => (typeof style === 'function' ? style(isActive) : style)
    const getClassName = () => (typeof className === 'function' ? className(isActive) : className)

    return (
        <Link href={href} style={{...getStyle(), display: 'flex', marginBottom: '5px'}} className={...getClassName()}  {...props} >
            {(typeof children === 'function' ? children(isActive) : children)}
        </Link>
    );
}
