export interface Achievement {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  category: 'hacktoberfest' | 'academic' | 'sports' | 'certification';
  year: number;
  link?: string;
}

export const achievements: Achievement[] = [
  // Hacktoberfest 2025
  {
    id: 'hacktoberfest-supercontributor',
    title: 'Hacktoberfest 2025 - Super contributor',
    description: 'Achieved Supercontributor level in Hacktoberfest 2025',
    image: 'https://assets.holopin.io/hf2025levels/lvl5-alien.webp',
    alt: 'Supercontributor',
    category: 'hacktoberfest',
    year: 2025
  },
  {
    id: 'hacktoberfest-tree-planted',
    title: 'Tree Planted',
    description: 'Contributed to open source and helped plant a tree',
    image: 'https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbWY2NmlrajQwMDAwaWUwNG8xaGRsZGF1IiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=',
    alt: 'Tree Planted',
    category: 'hacktoberfest',
    year: 2025
  },
  {
    id: 'hacktoberfest-level-4',
    title: 'Hacktoberfest 2025 - Level 4',
    description: 'Achieved Level 4 in Hacktoberfest 2025',
    image: 'https://assets.holopin.io/hf2025levels/lvl4-alien.webp',
    alt: 'Level 4',
    category: 'hacktoberfest',
    year: 2025
  },
  {
    id: 'hacktoberfest-level-3',
    title: 'Hacktoberfest 2025 - Level 3',
    description: 'Achieved Level 3 in Hacktoberfest 2025',
    image: 'https://assets.holopin.io/hf2025levels/lvl3-alien.webp',
    alt: 'Level 3',
    category: 'hacktoberfest',
    year: 2025
  },
  {
    id: 'hacktoberfest-level-2',
    title: 'Hacktoberfest 2025 - Level 2',
    description: 'Achieved Level 2 in Hacktoberfest 2025',
    image: 'https://assets.holopin.io/hf2025levels/lvl2-alien.webp',
    alt: 'Level 2',
    category: 'hacktoberfest',
    year: 2025
  },
  {
    id: 'hacktoberfest-level-1',
    title: 'Hacktoberfest 2025 - Level 1',
    description: 'Achieved Level 1 in Hacktoberfest 2025',
    image: 'https://assets.holopin.io/hf2025levels/lvl1-alien.webp',
    alt: 'Level 1',
    category: 'hacktoberfest',
    year: 2025
  },
  {
    id: 'hacktoberfest-level-0',
    title: 'Hacktoberfest 2025 - Level 0',
    description: 'Achieved Level 0 in Hacktoberfest 2025',
    image: 'https://assets.holopin.io/hf2025levels/lvl0-alien.webp',
    alt: 'Level 0',
    category: 'hacktoberfest',
    year: 2025
  },
  {
    id: 'hacktoberfest-early-bird',
    title: 'Early Bird Pegasaurus',
    description: 'Early bird participant in Hacktoberfest 2025',
    image: 'https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDd0ZDhncDUwMTMyMDlrMHd1OHFlNHg5IiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=',
    alt: 'Early Bird Pegasaurus',
    category: 'hacktoberfest',
    year: 2025
  }
];
