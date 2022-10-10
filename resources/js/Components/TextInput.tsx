import React, { useEffect, useRef } from 'react';

interface ITextInputProps {
    type?: string;
    name: string;
    className: string;
    autoComplete: string;
    required?: boolean;
    isFocused?: boolean;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={handleChange ? (e) => handleChange(e) : undefined}
                placeholder={placeholder}
            />
        </div>
    );
}
