import React, { useEffect, useRef } from 'react';

interface ITextInputProps {
    type: string;
    name: string;
    className?: string;
    autoComplete?: string;
    value: string;
    required?: boolean;
    isFocused?: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}
export default function TextInput({
    type = 'text',
    name,
    className,
    autoComplete,
    required = false,
    isFocused = false,
    handleChange,
    placeholder
}: ITextInputProps) {
    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-md shadow-sm ` +
                    className
                }
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
}
