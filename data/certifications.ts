export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  image: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  category: 'technical' | 'academic' | 'professional';
}

export const certifications: Certification[] = [
  {
    id: 'sliit-aiml-stage-1',
    title: 'AI/ML Engineer - Stage 1',
    issuer: 'SLIIT',
    description: 'Completed the requirements for the first stage of the AI/ML Engineer program, covering foundational concepts in AI and Machine Learning.',
    image: '/certifications/sliit-logo.svg',
    issueDate: '2025-09',
    credentialId: 'zh5xlq9od8',
    credentialUrl: 'https://code.sliit.org/certificates/zh5xlq9od8',
    category: 'technical'
  },
  {
    id: 'sliit-aiml-stage-2',
    title: 'AI/ML Engineer - Stage 2',
    issuer: 'SLIIT',
    description: 'Completed the requirements for the second stage of the AI/ML Engineer program, focusing on advanced concepts and practical application in AI and ML.',
    image: '/certifications/sliit-logo.svg',
    issueDate: '2025-09',
    credentialId: 'fezlzyOyrl',
    credentialUrl: 'https://code.sliit.org/certificates/fezlzy0yrl',
    category: 'technical'
  },
  {
    id: 'deans-list-2024',
    title: "Dean's List - Academic Excellence",
    issuer: 'Sri Lanka Institute of Information Technology', 
    description: 'Recognized for outstanding academic performance in Computer Science program',
    image: '/certifications/university-logo.svg',
    issueDate: '2024-12',
    credentialUrl: 'https://mysliit-my.sharepoint.com/:i:/g/personal/it23142732_my_sliit_lk/EQZLrmJ7cFdBkk6a4qzCtQ0BNzRPojvSPXa9ewfggrm97Q?e=mi6fc3',
    category: 'academic'
  },
  {
    id: 'uom-web-design-beginners',
    title: 'Web Design for Beginners',
    issuer: 'University of Moratuwa - CODL',
    description: 'Completed the online learning program covering foundational principles and practices of web design, conducted by the Department of Information Technology.',
    image: '/certifications/uom-codl-logo.svg', // Placeholder for the CODL logo
    issueDate: '2024-05', // Assumed date, you may need to adjust this
    credentialId: '18HogtM1m4',
    credentialUrl: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it23142732_my_sliit_lk/EXxjb-OniRRCrofM1VKnEPABWv1wBJsPXTy2Su8j8UN-oA?e=1bnMmw',
    category: 'technical'
  },
  {
    id: 'oci-foundations-associate',
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    description: 'Recognizes foundational knowledge of Oracle Cloud Infrastructure (OCI) services, security, and networking concepts.',
    image: '/certifications/cert1.JPG',
    issueDate: '2025-10',
    credentialId: '102808498OCI25FNDCFA',
    credentialUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=8B0CF7FA4B0192A1A88226447E4B5325E2E678873CF8538308B842CB59BE762F',
    category: 'technical'
  },
  {
    id: 'oci-ai-foundations-associate',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    description: 'Certifies foundational knowledge in key Artificial Intelligence (AI) and Machine Learning (ML) services on Oracle Cloud Infrastructure.',
    image: '/certifications/oracle-logo.svg',
    issueDate: '2025-10',
    credentialId: '102808498OCI25AICFA',
    credentialUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=E35EBD8FD28B079DBC77D8B39CB7FBD71C760AA1A3706144A083FC49BC89997A',
    category: 'technical'
  }
];
