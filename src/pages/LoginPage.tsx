import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ClayCard } from '../components/ui/ClayCard';
import { ClayButton } from '../components/ui/ClayButton';

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('student');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (role === 'student') navigate('/student/dashboard');
        else if (role === 'industry') navigate('/industry/dashboard');
        else navigate('/academic/dashboard');
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-clay-out">
                            <span className="text-white font-bold text-2xl">A</span>
                        </div>
                        <span className="font-bold text-3xl text-primary tracking-tight">Academia &times; Industry</span>
                    </div>
                    <h2 className="text-4xl font-extrabold text-text leading-tight mb-4">
                        Welcome back to the future of learning.
                    </h2>
                    <p className="text-lg text-text-muted">
                        Sign in to access your customized dashboard, track your skills, and connect with industry leaders.
                    </p>
                </div>

                <ClayCard className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center text-text">Login to Your Account</h3>
                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-text-muted">Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="px-4 py-3 bg-clay-card shadow-clay-in rounded-clay-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-text"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-text-muted">Password</label>
                            <input
                                type="password"
                                required
                                className="px-4 py-3 bg-clay-card shadow-clay-in rounded-clay-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-text"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="flex flex-col gap-1 mt-2">
                            <label className="text-sm font-medium text-text-muted">Select Role (Demo)</label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="px-4 py-3 bg-clay-card shadow-clay-in rounded-clay-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-text appearance-none"
                            >
                                <option value="student">Student</option>
                                <option value="academician">Academician</option>
                                <option value="industry">Industry</option>
                            </select>
                        </div>

                        <div className="flex justify-between items-center my-2 text-sm">
                            <label className="flex items-center gap-2 text-text-muted cursor-pointer">
                                <input type="checkbox" className="rounded text-primary" />
                                Remember me
                            </label>
                            <a href="#" className="text-primary font-medium hover:underline">Forgot Password?</a>
                        </div>

                        <ClayButton variant="primary" type="submit" size="lg" className="w-full mt-2">
                            Sign In
                        </ClayButton>

                        <div className="text-center mt-6 text-sm text-text-muted">
                            Don't have an account? <a href="#" className="text-primary font-bold">Register</a>
                        </div>
                    </form>
                </ClayCard>
            </div>
        </div>
    );
};
