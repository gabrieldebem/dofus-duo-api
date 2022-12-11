import React from 'react';

interface ILinkProps {
    className?: string;
    href: string;
    active?: boolean;
    children: React.ReactNode;
}

export default function Link({ method = 'get', as = 'a', href, active = false, children, className = '' }: ILinkProps) {
    return (
        <a
            href={href}
            className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
                active
                    ? 'border-emerald-400 text-emerald-700 bg-emerald-50 focus:outline-none focus:text-emerald-800 focus:bg-emerald-100 focus:border-emerald-700'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out` + className}
        >
            {children}
        </a>
    );
}
