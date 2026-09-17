import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { ClayButton } from '../ui/ClayButton';

export const TopNavbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md z-20 shadow-sm border-b border-white/20 flex items-center justify-between px-4 lg:px-8">
            <div className="flex items-center gap-4">
                <button className="md:hidden p-2 text-text-muted hover:text-text">
                    <Menu className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-clay-out">
                        <span className="text-white font-bold">A</span>
                    </div>
                    <span className="font-bold text-xl text-primary hidden sm:block">
                        Academia &times; Industry
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                    <input
                        type="text"
                        placeholder="Search skills, jobs..."
                        className="pl-9 pr-4 py-2 bg-clay-card shadow-clay-in rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                </div>

                <ClayButton variant="ghost" size="sm" className="relative !p-2 rounded-full">
                    <Bell className="w-5 h-5 text-text-muted" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
                </ClayButton>

                <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ayush"
                        alt="User profile"
                        className="w-9 h-9 rounded-full bg-clay-card shadow-clay-out"
                    />
                    <div className="hidden sm:block">
                        <p className="text-sm font-medium text-text">Ayush K.</p>
                        <p className="text-xs text-text-muted">Student</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};
