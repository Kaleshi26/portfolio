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
    id: 'oracle-java',
    title: 'Oracle Certified Associate Java SE 8 Programmer',
    issuer: 'Oracle',
    description: 'Certified in Java SE 8 programming fundamentals and object-oriented concepts',
    image: '/certifications/oracle-logo.svg',
    issueDate: '2024-06',
    credentialId: 'OCA-1Z0-808',
    credentialUrl: 'https://www.credly.com/badges/example',
    category: 'technical'
  },
  {
    id: 'mongodb-developer',
    title: 'MongoDB Certified Developer Associate',
    issuer: 'MongoDB',
    description: 'Certified in MongoDB database design, querying, and application development',
    image: '/certifications/mongodb-logo.svg',
    issueDate: '2024-08',
    credentialId: 'MCDA-001',
    credentialUrl: 'https://www.credly.com/badges/example',
    category: 'technical'
  },
  {
    id: 'deans-list-2024',
    title: "Dean's List - Academic Excellence",
    issuer: 'University of Peradeniya',
    description: 'Recognized for outstanding academic performance in Computer Science program',
    image: '/certifications/university-logo.svg',
    issueDate: '2024-12',
    category: 'academic'
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    description: 'Foundational understanding of AWS Cloud concepts and services',
    image: '/certifications/aws-logo.svg',
    issueDate: '2024-10',
    credentialId: 'AWS-CLF-C01',
    credentialUrl: 'https://www.credly.com/badges/example',
    category: 'technical'
  }
];
