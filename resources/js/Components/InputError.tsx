import React from "react";

interface IInputErrorProps {
    message: string;
    className?: string;
}

export default function InputError({ message, className = '' }: IInputErrorProps) {
    return message
        ? <p className={'text-sm text-red-600 ' + className}>
            {message}
        </p>
        : null;
}
