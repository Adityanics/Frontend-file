import React from 'react';
import { Sidebar } from '../../components/layout/Sidebar';
import { TopNavbar } from '../../components/layout/TopNavbar';
import { ClayCard } from '../../components/ui/ClayCard';
import { SkillProgress } from '../../components/ui/SkillProgress';
import { mockStudent, industrySkillDemand } from '../../mock-data/db';
import { AlertCircle, CheckCircle, TrendingUp } from 'lucide-react';

export const SkillGap: React.FC = () => {
    return (
        <div className="min-h-screen bg-background">
            <TopNavbar />
            <Sidebar role="student" />

            <main className="pt-20 pb-12 px-4 md:px-8 md:ml-64 transition-all">
                <div className="max-w-5xl mx-auto">

                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-text mb-2">Your Skill Gap Analysis</h1>
                        <p className="text-text-muted">Compare your current skills with industry requirements.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <ClayCard className="flex items-center gap-4 bg-gradient-to-br from-success/10 to-transparent">
                            <div className="w-12 h-12 rounded-full bg-success text-white flex items-center justify-center shadow-clay-out">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-text-muted">Strong Skills</p>
                                <h4 className="text-2xl font-bold text-success">3</h4>
                            </div>
                        </ClayCard>

                        <ClayCard className="flex items-center gap-4 bg-gradient-to-br from-warning/10 to-transparent">
                            <div className="w-12 h-12 rounded-full bg-warning text-white flex items-center justify-center shadow-clay-out">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-text-muted">Needs Improvement</p>
                                <h4 className="text-2xl font-bold text-warning">2</h4>
                            </div>
                        </ClayCard>

                        <ClayCard className="flex items-center gap-4 bg-gradient-to-br from-error/10 to-transparent">
                            <div className="w-12 h-12 rounded-full bg-error text-white flex items-center justify-center shadow-clay-out">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-text-muted">Critical Gaps</p>
                                <h4 className="text-2xl font-bold text-error">2</h4>
                            </div>
                        </ClayCard>
                    </div>

                    <ClayCard className="mb-8 p-0 overflow-hidden">
                        <div className="p-6 border-b border-black/5 bg-clay-card flex justify-between items-center">
                            <h3 className="font-bold text-lg">Detailed Analysis</h3>
                        </div>
                        <div className="p-6 flex flex-col gap-8">
                            {mockStudent.skills.map((skill, index) => {
                                const target = skill.target || (skill.level < 70 ? 75 : null);
                                let status = 'Strong';
                                let statusColor = 'text-success';

                                if (target && skill.level < target) {
                                    if (target - skill.level > 20) {
                                        status = 'Skill Gap';
                                        statusColor = 'text-error';
                                    } else {
                                        status = 'Needs Improvement';
                                        statusColor = 'text-warning';
                                    }
                                }

                                return (
                                    <div key={index} className="grid md:grid-cols-12 items-center gap-4">
                                        <div className="md:col-span-3">
                                            <p className="font-bold text-text">{skill.name}</p>
                                            <p className={statusColor + " text-sm font-medium"}>{status}</p>
                                        </div>
                                        <div className="md:col-span-6">
                                            <SkillProgress
                                                name=""
                                                progress={skill.level}
                                                target={target || undefined}
                                                color={status === 'Strong' ? 'bg-success' : (status === 'Skill Gap' ? 'bg-error' : 'bg-warning')}
                                            />
                                        </div>
                                        <div className="md:col-span-3 text-right">
                                            {target && skill.level < target && (
                                                <button className="text-primary text-sm font-medium hover:underline">
                                                    View Recommendations
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </ClayCard>

                </div>
            </main>
        </div>
    );
};
