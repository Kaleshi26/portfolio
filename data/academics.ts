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
    year: 2024,
    semester: 2,
    gpa: 3.8,
    modules: [
      { id: 'cs301', code: 'CS301', name: 'Data Structures and Algorithms', credits: 3, grade: 'A', gpa: 4.0, semester: 2, year: 2024, category: 'core' },
      { id: 'cs302', code: 'CS302', name: 'Database Systems', credits: 3, grade: 'A-', gpa: 3.7, semester: 2, year: 2024, category: 'core' },
      { id: 'cs303', code: 'CS303', name: 'Software Engineering', credits: 3, grade: 'A', gpa: 4.0, semester: 2, year: 2024, category: 'core' },
      { id: 'cs304', code: 'CS304', name: 'Computer Networks', credits: 3, grade: 'B+', gpa: 3.3, semester: 2, year: 2024, category: 'core' },
      { id: 'cs305', code: 'CS305', name: 'Web Development', credits: 3, grade: 'A', gpa: 4.0, semester: 2, year: 2024, category: 'core' }
    ]
  },
  {
    year: 2024,
    semester: 1,
    gpa: 3.6,
    modules: [
      { id: 'cs201', code: 'CS201', name: 'Object-Oriented Programming', credits: 3, grade: 'A-', gpa: 3.7, semester: 1, year: 2024, category: 'core' },
      { id: 'cs202', code: 'CS202', name: 'Discrete Mathematics', credits: 3, grade: 'B+', gpa: 3.3, semester: 1, year: 2024, category: 'core' },
      { id: 'cs203', code: 'CS203', name: 'Computer Architecture', credits: 3, grade: 'A', gpa: 4.0, semester: 1, year: 2024, category: 'core' },
      { id: 'cs204', code: 'CS204', name: 'Operating Systems', credits: 3, grade: 'B+', gpa: 3.3, semester: 1, year: 2024, category: 'core' },
      { id: 'math201', code: 'MATH201', name: 'Calculus II', credits: 3, grade: 'A-', gpa: 3.7, semester: 1, year: 2024, category: 'general' }
    ]
  },
  {
    year: 2023,
    semester: 2,
    gpa: 3.5,
    modules: [
      { id: 'cs101', code: 'CS101', name: 'Programming Fundamentals', credits: 3, grade: 'A', gpa: 4.0, semester: 2, year: 2023, category: 'core' },
      { id: 'cs102', code: 'CS102', name: 'Data Structures', credits: 3, grade: 'A-', gpa: 3.7, semester: 2, year: 2023, category: 'core' },
      { id: 'cs103', code: 'CS103', name: 'Digital Logic Design', credits: 3, grade: 'B+', gpa: 3.3, semester: 2, year: 2023, category: 'core' },
      { id: 'math101', code: 'MATH101', name: 'Calculus I', credits: 3, grade: 'B+', gpa: 3.3, semester: 2, year: 2023, category: 'general' },
      { id: 'phy101', code: 'PHY101', name: 'Physics I', credits: 3, grade: 'A-', gpa: 3.7, semester: 2, year: 2023, category: 'general' }
    ]
  }
];

export const overallGPA = 3.6;
export const currentYear = 2024;
export const currentSemester = 2;
