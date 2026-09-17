export const mockStudent = {
    id: 'st-001',
    name: 'Ayush Kumar',
    email: 'ayush.k@example.com',
    role: 'student',
    college: 'All India Institute of Ayurveda',
    degree: 'B.A.M.S',
    branch: 'Ayurveda',
    year: '3rd Year',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ayush',
    overallScore: 78,
    employabilityScore: 76,
    skills: [
        { name: 'JavaScript', category: 'technical', level: 85 },
        { name: 'React', category: 'technical', level: 80 },
        { name: 'HTML/CSS', category: 'technical', level: 90 },
        { name: 'Communication', category: 'soft', level: 74 },
        { name: 'Problem Solving', category: 'soft', level: 80 },
        { name: 'SQL', category: 'technical', level: 48, target: 80 },
        { name: 'Data Structures', category: 'technical', level: 55, target: 75 },
    ]
};

export const mockOpportunities = [
    {
        id: 'op-001',
        title: 'Frontend Developer Intern',
        company: 'Tata Technologies',
        location: 'Pune / Hybrid',
        duration: '6 Months',
        stipend: '₹15,000/mo',
        skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind'],
        matchPercentage: 92,
        type: 'internship'
    },
    {
        id: 'op-002',
        title: 'Data Analyst Intern',
        company: 'Infosys',
        location: 'Bengaluru / Remote',
        duration: '3 Months',
        stipend: '₹12,000/mo',
        skills: ['SQL', 'Python', 'Data Analytics', 'Excel'],
        matchPercentage: 65,
        type: 'internship'
    },
    {
        id: 'op-003',
        title: 'React Developer',
        company: 'TCS',
        location: 'Mumbai',
        duration: 'Full-time',
        stipend: '₹6–8 LPA',
        skills: ['React', 'JavaScript', 'TypeScript', 'Redux'],
        matchPercentage: 89,
        type: 'job'
    }
];

export const mockCourses = [
    {
        id: 'c-001',
        title: 'Advanced React Patterns',
        provider: 'Industry Experts',
        duration: '4 Weeks',
        level: 'Advanced',
        rating: 4.8,
        skillsCovered: ['React', 'Performance', 'Hooks'],
        category: 'Technical'
    },
    {
        id: 'c-002',
        title: 'Mastering SQL for Data Analysis',
        provider: 'Data Pro',
        duration: '6 Weeks',
        level: 'Beginner to Intermediate',
        rating: 4.6,
        skillsCovered: ['SQL', 'PostgreSQL', 'Data Modeling'],
        category: 'Technical'
    }
];

export const industrySkillDemand = [
    { name: 'Python', demand: 87, growth: true },
    { name: 'Communication', demand: 82, growth: true },
    { name: 'SQL', demand: 79, growth: false },
    { name: 'React', demand: 75, growth: true },
    { name: 'Data Analysis', demand: 72, growth: true },
    { name: 'Problem Solving', demand: 70, growth: false },
];
