import React from 'react';

interface InputLabelProps {
    forInput: string;
    value?: string;
    className?: string;
    children?: React.ReactNode;
}

export default function InputLabel({ forInput, value = '', className = '', children = '' }: InputLabelProps) {
    return (
        <label htmlFor={forInput} className={`block font-medium text-sm text-gray-700 ` + className}>
            {
                value
                    ? value
                    : children
            }
        </label>
    );
}
