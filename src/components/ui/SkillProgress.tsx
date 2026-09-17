import React from 'react';
import { cn } from './ClayCard';

interface SkillProgressProps {
    name: string;
    progress: number; // 0-100
    target?: number; // optionally show gap
    color?: string;
    className?: string;
}

export const SkillProgress: React.FC<SkillProgressProps> = ({
    name,
    progress,
    target,
    color = 'bg-primary',
    className
}) => {
    return (
        <div className={cn("w-full", className)}>
            <div className="flex justify-between items-end mb-1">
                <span className="text-sm font-medium text-text">{name}</span>
                <div className="flex gap-2 text-xs">
                    {target && <span className="text-text-muted">Target: {target}%</span>}
                    <span className="font-bold">{progress}%</span>
                </div>
            </div>
            <div className="clay-progress-bg relative">
                <div
                    className={cn("absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out", color)}
                    style={{ width: `${progress}%` }}
                />
                {target && (
                    <div
                        className="absolute top-0 h-full w-1 bg-warning z-10"
                        style={{ left: `${target}%` }}
                        title={`Industry Target: ${target}%`}
                    />
                )}
            </div>
        </div>
    );
};
