import React from 'react';
import { Sidebar } from '../../components/layout/Sidebar';
import { TopNavbar } from '../../components/layout/TopNavbar';
import { OpportunityCard } from '../../components/ui/OpportunityCard';
import { mockOpportunities } from '../../mock-data/db';
import { Search, Filter } from 'lucide-react';
import { ClayButton } from '../../components/ui/ClayButton';

export const Internships: React.FC = () => {
    const internships = mockOpportunities.filter(op => op.type === 'internship');

    return (
        <div className="min-h-screen bg-background">
            <TopNavbar />
            <Sidebar role="student" />

            <main className="pt-20 pb-12 px-4 md:px-8 md:ml-64 transition-all">
                <div className="max-w-6xl mx-auto">

                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-text mb-2">Internships & Opportunities</h1>
                        <p className="text-text-muted">Find the perfect match for your skills.</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="relative flex-1">
                            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                            <input
                                type="text"
                                placeholder="Search internships, skills, companies..."
                                className="w-full pl-10 pr-4 py-3 bg-clay-card shadow-clay-in rounded-clay-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-text"
                            />
                        </div>
                        <ClayButton variant="secondary" className="flex items-center gap-2">
                            <Filter className="w-5 h-5" /> Filters
                        </ClayButton>
                    </div>

                    <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
                        <span className="px-4 py-1.5 bg-primary text-white rounded-full text-sm font-medium whitespace-nowrap shadow-clay-out">All Locations</span>
                        <span className="px-4 py-1.5 bg-clay-card text-text rounded-full text-sm font-medium whitespace-nowrap shadow-clay-out cursor-pointer hover:bg-black/5">Remote</span>
                        <span className="px-4 py-1.5 bg-clay-card text-text rounded-full text-sm font-medium whitespace-nowrap shadow-clay-out cursor-pointer hover:bg-black/5">Pune</span>
                        <span className="px-4 py-1.5 bg-clay-card text-text rounded-full text-sm font-medium whitespace-nowrap shadow-clay-out cursor-pointer hover:bg-black/5">Bengaluru</span>
                        <span className="px-4 py-1.5 bg-clay-card text-text rounded-full text-sm font-medium whitespace-nowrap shadow-clay-out cursor-pointer hover:bg-black/5">Delhi NCR</span>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {internships.map(opp => (
                            <OpportunityCard key={opp.id} {...opp} />
                        ))}
                        {/* Duplicate for visual mass */}
                        {internships.map(opp => (
                            <OpportunityCard key={opp.id + '-copy'} {...opp} />
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
};
