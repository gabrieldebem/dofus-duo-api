import React from 'react';

interface IPrimaryButtonProps {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disable?: boolean;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export default function PrimaryButton({ type = 'submit', className = '', disable = false, children, onClick }: IPrimaryButtonProps) {
    return (
        <button
            type={type}
            className={
                `flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-600 px-8 py-3 text-base font-medium text-white hover:bg-emerald-700 md:py-4 md:px-10 md:text-lg ${
                    disable && 'opacity-25'
                } ` + className
            }
            disabled={disable}
            onClick={onClick ? (e) => onClick(e) : undefined}
        >
            {children}
        </button>
    );
}
