import React from 'react';

interface ICheckboxProps {
    name: string;
    value?: string;
    className?: string;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Checkbox({ name, value = '', className = '', handleChange }: ICheckboxProps) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className={`rounded border-gray-300 text-emerald-600 shadow-sm focus:border-emerald-300 focus:ring-emerald-500` + className}
            onChange={handleChange ? (e) => handleChange(e) : undefined}
        />
    );
}
