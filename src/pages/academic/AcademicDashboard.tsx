import React from 'react';
import { Sidebar } from '../../components/layout/Sidebar';
import { TopNavbar } from '../../components/layout/TopNavbar';
import { ClayCard } from '../../components/ui/ClayCard';
import { ClayButton } from '../../components/ui/ClayButton';

export const AcademicDashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-background">
            <TopNavbar />
            <Sidebar role="academician" />

            <main className="pt-20 pb-12 px-4 md:px-8 md:ml-64 transition-all">
                <div className="max-w-6xl mx-auto">

                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-text">Academician Dashboard</h1>
                            <p className="text-text-muted">Manage courses, research projects, and collaborations.</p>
                        </div>
                        <ClayButton variant="primary">Create Project</ClayButton>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <ClayCard className="p-6 flex flex-col gap-2">
                            <span className="text-text-muted">Active FDPs</span>
                            <span className="text-3xl font-bold text-primary">3</span>
                        </ClayCard>
                        <ClayCard className="p-6 flex flex-col gap-2">
                            <span className="text-text-muted">Industry Projects</span>
                            <span className="text-3xl font-bold text-secondary">5</span>
                        </ClayCard>
                        <ClayCard className="p-6 flex flex-col gap-2">
                            <span className="text-text-muted">Consultancy Requests</span>
                            <span className="text-3xl font-bold text-accent">2</span>
                        </ClayCard>
                    </div>

                    <ClayCard className="h-64 flex items-center justify-center">
                        <p className="text-text-muted">Collaboration Tools Coming Soon...</p>
                    </ClayCard>

                </div>
            </main>
        </div>
    );
};
