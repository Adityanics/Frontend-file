import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../ui/ClayCard';
import {
    LayoutDashboard,
    User,
    Target,
    BookOpen,
    Briefcase,
    FileText,
    MessageSquare,
    Bell,
    Settings,
    LogOut,
    LineChart,
    Users
} from 'lucide-react';

export type Role = 'student' | 'academician' | 'industry' | 'admin';

interface SidebarProps {
    role: Role;
}

export const Sidebar: React.FC<SidebarProps> = ({ role }) => {
    const getNavItems = (role: Role) => {
        switch (role) {
            case 'student':
                return [
                    { label: 'Dashboard', icon: LayoutDashboard, path: '/student/dashboard' },
                    { label: 'My Profile', icon: User, path: '/student/profile' },
                    { label: 'Skill Assessment', icon: Target, path: '/student/assessment' },
                    { label: 'Skill Gap', icon: LineChart, path: '/student/skill-gap' },
                    { label: 'Learning Programs', icon: BookOpen, path: '/student/learning' },
                    { label: 'Internships', icon: Briefcase, path: '/student/internships' },
                    { label: 'Jobs', icon: Briefcase, path: '/student/jobs' },
                    { label: 'Applications', icon: FileText, path: '/student/applications' },
                ];
            case 'industry':
                return [
                    { label: 'Dashboard', icon: LayoutDashboard, path: '/industry/dashboard' },
                    { label: 'Company Profile', icon: User, path: '/industry/profile' },
                    { label: 'Post Internship', icon: Briefcase, path: '/industry/post-internship' },
                    { label: 'Candidates', icon: Users, path: '/industry/candidates' },
                ];
            case 'academician':
            case 'admin':
            default:
                return [
                    { label: 'Dashboard', icon: LayoutDashboard, path: `/${role}/dashboard` },
                ];
        }
    };

    const navItems = getNavItems(role);

    return (
        <div className="w-64 bg-background-alt h-screen shadow-md flex flex-col fixed left-0 top-0 pt-16 z-10 transition-transform md:translate-x-0 -translate-x-full">
            <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            cn(
                                "flex items-center gap-3 px-4 py-3 rounded-clay-sm transition-all duration-200",
                                isActive
                                    ? "bg-clay-card shadow-clay-in text-primary font-medium"
                                    : "text-text-muted hover:bg-black/5 hover:text-text"
                            )
                        }
                    >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </div>
            <div className="p-4 border-t border-black/5">
                <NavLink to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-clay-sm text-text-muted hover:bg-black/5">
                    <Settings className="w-5 h-5" /> <span>Settings</span>
                </NavLink>
                <button className="flex w-full items-center gap-3 px-4 py-3 rounded-clay-sm text-error hover:bg-error/10 mt-2">
                    <LogOut className="w-5 h-5" /> <span>Logout</span>
                </button>
            </div>
        </div>
    );
};
