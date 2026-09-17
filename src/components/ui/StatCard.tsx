import React from 'react';
import { ClayCard } from './ClayCard';
import type { LucideIcon } from 'lucide-react';
import { cn } from './ClayCard';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    className?: string;
    iconBgColor?: string;
    iconColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    icon: Icon,
    trend,
    className,
    iconBgColor = 'bg-primary',
    iconColor = 'text-white'
}) => {
    return (
        <ClayCard className={cn("flex flex-col gap-4", className)}>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm text-text-muted font-medium mb-1">{title}</p>
                    <h3 className="text-3xl font-bold text-text">{value}</h3>
                </div>
                <div className={cn("w-12 h-12 rounded-clay shadow-clay-out flex items-center justify-center", iconBgColor, iconColor)}>
                    <Icon className="w-6 h-6" />
                </div>
            </div>

            {trend && (
                <div className="flex items-center gap-2 text-sm mt-2">
                    <span className={cn(
                        "font-medium px-2 py-0.5 rounded-full shadow-clay-in",
                        trend.isPositive ? "text-success bg-success/10" : "text-error bg-error/10"
                    )}>
                        {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
                    </span>
                    <span className="text-text-muted text-xs">from last month</span>
                </div>
            )}
        </ClayCard>
    );
};
