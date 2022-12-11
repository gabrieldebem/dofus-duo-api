import React from "react";

interface ISecondaryButtonProps {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disable?: boolean;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function SecondaryButton({ type = 'submit', className = '', disable = false, children, onClick }: ISecondaryButtonProps) {
    return (
        <button
            type={type}
            className={
                `flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-100 px-8 py-3 text-base font-medium text-emerald-700 hover:bg-emerald-200 md:py-4 md:px-10 md:text-lg
                ${disable && 'opacity-25'} ` + className
            }
            disabled={disable}
            onClick={onClick ? (e) => onClick(e) : undefined}
        >
            {children}
        </button>
    );
}
