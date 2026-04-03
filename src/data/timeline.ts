export interface TimelineEntry {
  role: string;
  company: string;
  location: string;
  note?: string;
  isCurrent?: boolean;
  isTransition?: boolean;
}

export const timeline: TimelineEntry[] = [
  {
    role: 'Senior AI Product Manager',
    company: 'Ngenux Solutions',
    location: 'Hyderabad, India',
    note: 'Building AI-powered products while creating content to simplify AI for others.',
    isCurrent: true,
  },
  {
    role: 'Shift into AI + Content Creation',
    company: 'Youtuber, AWS Community builder, Towards AI Writer',
    location: 'Remote',
    note: 'Started building with AI and documenting everything I learned through tutorials and real-world projects.',
    isTransition: true,
  },
  {
    role: 'Product Manager',
    company: 'Microsoft',
    location: 'Washington, USA',
    note: 'As a product manager, worked on high impact migrations, saving 1000s of dollars annually',
  },
  {
    role: 'Consultant',
    company: 'Deloitte US',
    location: 'Texas, USA',
    note: 'Worked on enterprise technology solutions across industries.',
  },
  {
    role: 'Product Specialist',
    company: 'Dynata',
    location: 'Texas, USA',
  },
  {
    role: 'MS in IT Management',
    company: 'University of Texas at Dallas',
    location: 'Dallas, TX',
    note: 'Deans Impact scholarship, Commencement Speaker',
  },
  {
    role: 'Technical Analyst',
    company: 'TCS (Tata Consultancy Services)',
    location: 'Chennai, India',
  },
];