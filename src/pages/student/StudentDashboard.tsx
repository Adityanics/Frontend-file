import React from 'react';
import { Sidebar } from '../../components/layout/Sidebar';
import { TopNavbar } from '../../components/layout/TopNavbar';
import { StatCard } from '../../components/ui/StatCard';
import { SkillProgress } from '../../components/ui/SkillProgress';
import { OpportunityCard } from '../../components/ui/OpportunityCard';
import { ClayCard } from '../../components/ui/ClayCard';
import { mockStudent, mockOpportunities } from '../../mock-data/db';
import { Award, Target, TrendingUp, Zap } from 'lucide-react';

export const StudentDashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-background">
            <TopNavbar />
            <Sidebar role="student" />

            <main className="pt-20 pb-12 px-4 md:px-8 md:ml-64 transition-all">
                <div className="max-w-6xl mx-auto">

                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-text">Good morning, {mockStudent.name.split(' ')[0]} 👋</h1>
                            <p className="text-text-muted">Here is your skill and career overview today.</p>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 bg-clay-card px-4 py-2 rounded-full shadow-clay-out">
                            <span className="w-2 h-2 rounded-full bg-success"></span>
                            <span className="text-sm font-medium">Profile: 85% Complete</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <StatCard
                            title="Overall Skill Score"
                            value={`${mockStudent.overallScore}%`}
                            icon={Target}
                            trend={{ value: 5, isPositive: true }}
                            iconBgColor="bg-primary"
                        />
                        <StatCard
                            title="Technical Skills"
                            value="82%"
                            icon={Zap}
                            iconBgColor="bg-secondary"
                        />
                        <StatCard
                            title="Employability"
                            value={`${mockStudent.employabilityScore}%`}
                            icon={TrendingUp}
                            trend={{ value: 2, isPositive: true }}
                            iconBgColor="bg-accent"
                        />
                        <StatCard
                            title="Certifications"
                            value="3"
                            icon={Award}
                            iconBgColor="bg-success"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Skills */}
                        <div className="lg:col-span-1 flex flex-col gap-8">
                            <ClayCard className="flex flex-col gap-4">
                                <h3 className="font-bold text-lg text-text border-b border-black/5 pb-2">Your Top Skills</h3>
                                <div className="flex flex-col gap-4">
                                    {mockStudent.skills.filter(s => s.level >= 75).map(skill => (
                                        <SkillProgress key={skill.name} name={skill.name} progress={skill.level} />
                                    ))}
                                </div>
                            </ClayCard>

                            <ClayCard className="flex flex-col gap-4">
                                <h3 className="font-bold text-lg text-text border-b border-black/5 pb-2">Skills to Improve</h3>
                                <div className="flex flex-col gap-4">
                                    {mockStudent.skills.filter(s => s.level < 75).map(skill => (
                                        <SkillProgress
                                            key={skill.name}
                                            name={skill.name}
                                            progress={skill.level}
                                            target={skill.target}
                                            color="bg-warning"
                                        />
                                    ))}
                                </div>
                            </ClayCard>
                        </div>

                        {/* Right Column - Recommendations */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-xl text-text">Recommended For You</h3>
                                <button className="text-primary font-medium text-sm hover:underline">View All</button>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {mockOpportunities.map(opp => (
                                    <OpportunityCard key={opp.id} {...opp} />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};
