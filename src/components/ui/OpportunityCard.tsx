import React from 'react';
import { ClayCard } from './ClayCard';
import { ClayButton } from './ClayButton';
import { MapPin, Clock, Calendar, CheckCircle, Briefcase } from 'lucide-react';
import { cn } from './ClayCard';

interface OpportunityCardProps {
    title: string;
    company: string;
    location: string;
    duration: string;
    stipend: string;
    skills: string[];
    matchPercentage: number;
    logoUrl?: string;
    className?: string;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({
    title,
    company,
    location,
    duration,
    stipend,
    skills,
    matchPercentage,
    logoUrl,
    className
}) => {
    const getMatchColor = (match: number) => {
        if (match >= 85) return 'text-success bg-success/10';
        if (match >= 70) return 'text-warning bg-warning/10';
        return 'text-error bg-error/10';
    };

    return (
        <ClayCard className={cn("flex flex-col gap-4", className)}>
            <div className="flex justify-between items-start">
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-clay shadow-clay-in bg-white flex items-center justify-center p-2">
                        {logoUrl ? (
                            <img src={logoUrl} alt={company} className="max-w-full max-h-full object-contain" />
                        ) : (
                            <Briefcase className="w-6 h-6 text-primary" />
                        )}
                    </div>
                    <div>
                        <h4 className="font-bold text-text text-lg">{title}</h4>
                        <p className="text-sm text-text-muted font-medium">{company}</p>
                    </div>
                </div>
                <div className={cn("px-2 py-1 rounded-full shadow-clay-in text-xs font-bold flex items-center gap-1", getMatchColor(matchPercentage))}>
                    <CheckCircle className="w-3 h-3" />
                    {matchPercentage}% Match
                </div>
            </div>

            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-text-muted mt-2">
                <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {location}
                </div>
                <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {duration}
                </div>
                <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {stipend}
                </div>
            </div>

            <div className="mt-2">
                <p className="text-xs font-medium text-text mb-1">Required Skills:</p>
                <div className="flex flex-wrap gap-2">
                    {skills.slice(0, 4).map((skill, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-clay-card shadow-clay-in rounded-md text-text-muted">
                            {skill}
                        </span>
                    ))}
                    {skills.length > 4 && (
                        <span className="text-xs px-2 py-1 bg-clay-card shadow-clay-in rounded-md text-text-muted">
                            +{skills.length - 4}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex gap-3 mt-2">
                <ClayButton variant="primary" className="flex-1">Apply Now</ClayButton>
                <ClayButton variant="outline">Details</ClayButton>
            </div>
        </ClayCard>
    );
};
