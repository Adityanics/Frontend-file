import React from 'react';
import { cn } from './ClayCard';

interface ClayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const ClayButton: React.FC<ClayButtonProps> = ({
    children,
    className,
    variant = 'secondary',
    size = 'md',
    fullWidth = false,
    ...props
}) => {

    const baseClasses = "flex justify-center items-center transition-all duration-200";

    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg font-medium",
    };

    const variants = {
        primary: "clay-btn-primary",
        secondary: "clay-btn",
        outline: "border-2 border-primary text-primary hover:bg-primary/5 rounded-clay-sm",
        ghost: "text-text-muted hover:text-text hover:bg-black/5 rounded-clay-sm",
    };

    return (
        <button
            className={cn(
                baseClasses,
                sizeClasses[size],
                variants[variant],
                fullWidth && "w-full",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
