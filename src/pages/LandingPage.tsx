import React from 'react';
import { Link } from 'react-router-dom';
import { ClayCard } from '../components/ui/ClayCard';
import { ClayButton } from '../components/ui/ClayButton';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, LineChart, Users } from 'lucide-react';

export const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <nav className="fixed top-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-md z-50 flex items-center justify-between px-6 lg:px-16 shadow-sm border-b border-white/20">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-clay-out">
                        <span className="text-white font-bold text-xl">A</span>
                    </div>
                    <span className="font-bold text-2xl text-primary tracking-tight">Academia &times; Industry</span>
                </div>
                <div className="hidden md:flex items-center gap-8 font-medium text-text-muted">
                    <a href="#features" className="hover:text-primary transition-colors">Features</a>
                    <a href="#about" className="hover:text-primary transition-colors">About</a>
                </div>
                <div className="flex gap-4">
                    <Link to="/login">
                        <ClayButton variant="ghost">Login</ClayButton>
                    </Link>
                    <Link to="/student/dashboard">
                        <ClayButton variant="primary">Get Started</ClayButton>
                    </Link>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6 lg:px-16">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-text leading-tight mb-6">
                            Bridging <span className="text-primary">Academia</span> and <span className="text-secondary">Industry</span> Through Skills
                        </h1>
                        <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-xl">
                            Discover the right skills, internships, training and career opportunities through one intelligent collaboration platform.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/student/dashboard">
                                <ClayButton variant="primary" size="lg">Explore Opportunities</ClayButton>
                            </Link>
                            <ClayButton variant="secondary" size="lg">Assess Your Skills</ClayButton>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <ClayCard className="aspect-square relative p-8 flex flex-col justify-center gap-6 ring-4 ring-white/50 bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9]">
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

                            <div className="grid grid-cols-2 gap-6 relative z-10">
                                <ClayCard className="bg-white/60 backdrop-blur aspect-square flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform cursor-pointer">
                                    <BookOpen className="w-12 h-12 text-primary mb-3" />
                                    <span className="font-bold text-center">Skill Mapping</span>
                                </ClayCard>
                                <ClayCard className="bg-white/60 backdrop-blur aspect-square flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform cursor-pointer">
                                    <Briefcase className="w-12 h-12 text-secondary mb-3" />
                                    <span className="font-bold text-center">Internships</span>
                                </ClayCard>
                                <ClayCard className="bg-white/60 backdrop-blur aspect-square flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform cursor-pointer">
                                    <LineChart className="w-12 h-12 text-accent mb-3" />
                                    <span className="font-bold text-center">Analytics</span>
                                </ClayCard>
                                <ClayCard className="bg-white/60 backdrop-blur aspect-square flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform cursor-pointer">
                                    <Users className="w-12 h-12 text-success mb-3" />
                                    <span className="font-bold text-center">Collaboration</span>
                                </ClayCard>
                            </div>
                        </ClayCard>
                    </motion.div>
                </div>
            </main>

            <footer className="bg-white py-12 border-t border-black/5 mt-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h4 className="text-xl font-bold text-text mb-2">Academia &times; Industry Connect</h4>
                    <p className="text-text-muted mb-6">Skill • Learn • Collaborate • Grow</p>
                    <p className="text-sm text-text-muted/60 max-w-2xl mx-auto">
                        An academic-industry collaboration platform concept for Ministry of Ayush / All India Institute of Ayurveda.
                        Designed bridging the gap between academic skills and industry requirements.
                    </p>
                </div>
            </footer>
        </div>
    );
};
