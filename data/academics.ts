export interface AcademicModule {
  id: string;
  code: string;
  name: string;
  credits: number;
  grade: string;
  gpa: number;
  semester: number;
  year: number;
  category: 'core' | 'elective' | 'general';
}

export interface AcademicYear {
  year: number;
  semester: number;
  modules: AcademicModule[];
  gpa: number;
}

export const academicData: AcademicYear[] = [
  {
    year: 1,
    semester: 1,
    gpa: 3.86,
    modules: [
      { id: 'it1010', code: 'IT1010', name: 'Introduction to Programming', credits: 4, grade: 'A', gpa: 4.0, semester: 1, year: 1, category: 'core' },
      { id: 'it1020', code: 'IT1020', name: 'Introduction to Computer Systems', credits: 4, grade: 'A', gpa: 4.0, semester: 1, year: 1, category: 'core' },
      { id: 'it1030', code: 'IT1030', name: 'Mathematics for Computing', credits: 4, grade: 'A', gpa: 4.0, semester: 1, year: 1, category: 'core' },
      { id: 'it1040', code: 'IT1040', name: 'Communication Skills', credits: 3, grade: 'B+', gpa: 3.3, semester: 1, year: 1, category: 'general' }
    ]
  },
  {
    year: 1,
    semester: 2,
    gpa: 3.74,
    modules: [
      { id: 'it1050', code: 'IT1050', name: 'Object Oriented Concepts', credits: 2, grade: 'A', gpa: 4.0, semester: 2, year: 1, category: 'core' },
      { id: 'it1060', code: 'IT1060', name: 'Software Process Modeling', credits: 3, grade: 'B+', gpa: 3.3, semester: 2, year: 1, category: 'core' },
      { id: 'it1080', code: 'IT1080', name: 'English for Academic Purposes', credits: 3, grade: 'B+', gpa: 3.3, semester: 2, year: 1, category: 'general' },
      { id: 'it1090', code: 'IT1090', name: 'Information Systems & Data Modeling', credits: 4, grade: 'A', gpa: 4.0, semester: 2, year: 1, category: 'core' },
      { id: 'it1100', code: 'IT1100', name: 'Internet & Web Technologies', credits: 4, grade: 'A', gpa: 4.0, semester: 2, year: 1, category: 'core' }
    ]
  },
  {
    year: 2,
    semester: 1,
    gpa: 3.66,
    modules: [
      { id: 'it2020', code: 'IT2020', name: 'Software Engineering', credits: 4, grade: 'A', gpa: 4.0, semester: 1, year: 2, category: 'core' },
      { id: 'it2030', code: 'IT2030', name: 'Object Oriented Programming', credits: 4, grade: 'B', gpa: 3.0, semester: 1, year: 2, category: 'core' },
      { id: 'it2040', code: 'IT2040', name: 'Database Management Systems', credits: 4, grade: 'B+', gpa: 3.3, semester: 1, year: 2, category: 'core' },
      { id: 'it2050', code: 'IT2050', name: 'Computer Networks', credits: 4, grade: 'A', gpa: 4.0, semester: 1, year: 2, category: 'core' },
      { id: 'it2060', code: 'IT2060', name: 'Operating Systems and System Administration', credits: 4, grade: 'A', gpa: 4.0, semester: 1, year: 2, category: 'core' }
    ]
  },
  {
    year: 2,
    semester: 2,
    gpa: 3.53,
    modules: [
      { id: 'it2010', code: 'IT2010', name: 'Mobile Application Development', credits: 4, grade: 'B', gpa: 3.0, semester: 2, year: 2, category: 'core' },
      { id: 'it2070', code: 'IT2070', name: 'Data Structures & Algorithms', credits: 4, grade: 'B', gpa: 3.0, semester: 2, year: 2, category: 'core' },
      { id: 'it2080', code: 'IT2080', name: 'IT Project', credits: 4, grade: 'A', gpa: 4.0, semester: 2, year: 2, category: 'core' },
      { id: 'it2090', code: 'IT2090', name: 'Professional Skills', credits: 2, grade: 'A', gpa: 4.0, semester: 2, year: 2, category: 'general' },
      { id: 'it2100', code: 'IT2100', name: 'Employability Skills Development - Seminar', credits: 1, grade: 'A+', gpa: 4.0, semester: 2, year: 2, category: 'general' },
      { id: 'it2110', code: 'IT2110', name: 'Probability & Statistics', credits: 3, grade: 'A+', gpa: 4.0, semester: 2, year: 2, category: 'general' }
    ]
  }
];

export const overallGPA = 3.69;
export const currentYear = 3;
export const currentSemester = 1;
