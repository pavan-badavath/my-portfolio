import profileImg from '../assets/Confident developer in modern office.png';
export type Resume = {
  name: string
  title: string
  tagline: string
  summary: string
  photo?: string
  contact: {
    email: string
    location?: string
    github: string
    linkedIn: string
  }
  experience: Array<{
    company: string
    role: string
    start: string
    end: string
    location?: string
    bullets: string[]
  }>
  projects: Array<{
    title: string
    description: string
    tech: string[]
    link?: string
    repo?: string
  }>
  skills: {
    frontend: string[]
    backend: string[]
    tooling: string[]
  }
  education: Array<{
    institution: string
    degree: string
    start: string
    end: string
    location?: string
  }>
}

export const resume: Resume = {
  name: 'Badavath Pavan Nayak',
  title: 'Frontend Developer',
  tagline: 'Building responsive and dynamic web applications with modern technologies.',
  summary:
    'Frontend Developer with 3+ years of experience building scalable, high-performance web applications using React.js, Next.js, TypeScript, and Redux Toolkit. Proven ability to translate complex UI/UX designs into pixel-perfect, responsive interfaces and integrate RESTful APIs and GraphQL for seamless data-driven experiences. Experienced in leveraging AI-powered developer tools such as GitHub Copilot and Cursor AI, along with OpenAI API for LLM integration and prompt engineering to enhance development efficiency and build intelligent features. Skilled in performance optimization, micro-frontend architecture, and modern development practices, delivering robust and production-ready applications. Strong foundation in HTML5, CSS3, SASS, and JavaScript (ES6+), with hands-on experience in testing (Jest, React Testing Library), CI/CD pipelines, and Agile environments.',
  photo: profileImg,
  contact: {
    email: 'badavathpavannayak30@gmail.com',
    location: 'Chennai, Tamil Nadu, India',
    github: 'https://github.com/pavan-badavath',
    linkedIn: 'https://linkedin.com/in/pavan-nayak-badavath-961a38372',
  },
  experience: [
    {
      company: 'LightCast',
      role: 'Software Engineer',
      start: 'October 2025',
      end: 'Present',
      location: 'Chennai, India',
      bullets: [
        'Architected and delivered a full-stack SaaS dashboard for an EdTech startup using Next.js 16 (App Router), TypeScript, and Tailwind CSS, integrated with Node.js/Express backend and MongoDB, serving 2,000+ active users within the first month of launch.',
        'Implemented Micro-Frontend architecture using Webpack Module Federation to independently deploy and scale UI modules, reducing deployment coupling and enabling parallel team development across 4 feature squads.',
        'Built a real-time analytics dashboard with WebSocket integration and Chart.js visualizations, enabling live data updates for key business KPIs with sub-200ms latency.',
        'Established a CI/CD pipeline using GitHub Actions with automated Jest & Cypress test suites, enforcing 90%+ test coverage and zero-regression deployments across staging and production environments.',
        'Optimized Core Web Vitals (LCP, FID, CLS) achieving a Lighthouse performance score improvement from 58 to 94, directly improving SEO ranking and user retention metrics.',
        'Integrated OAuth 2.0 and JWT-based authentication with role-based access control (RBAC), securing multi-tenant data across Admin, Instructor, and Learner roles.',
      ],
    },
    {
      company: 'KPMG (via Adrola Software Technologies)',
      role: 'Software Engineer',
      start: 'June 2023',
      end: 'September 2025',
      location: 'Bengaluru, India',
      bullets: [
        'Architected and developed high-performance, scalable UI components using React.js, Redux Toolkit, and TypeScript for enterprise-level applications.',
        'Led frontend development initiatives and integrated complex APIs using Axios and GraphQL, improving data flow efficiency by 30%.',
        'Collaborated closely with UI/UX designers, backend developers, and product managers to deliver seamless application functionality and user experience.',
        'Implemented comprehensive unit and integration testing strategies with Jest and React Testing Library, achieving 85%+ code coverage.',
        'Translated complex design wireframes and mockups into high-quality, pixel-perfect, responsive code ensuring cross-browser compatibility.',
        'Optimized application performance through code splitting, lazy loading, and best practices implementation, resulting in 40% faster load times.',
        'Mentored junior developers and conducted code reviews while maintaining coding standards and best practices across development teams.',
      ],
    },
    {
      company: 'Frontend Development Internship',
      role: 'React Developer Intern',
      start: 'December 2022',
      end: 'May 2023',
      location: 'Bengaluru, India & Remote',
      bullets: [
        'Developed responsive web applications using React.js with modern JavaScript (ES6+) features and TypeScript.',
        'Built reusable UI components using HTML5, CSS3, SASS preprocessors following React best practices.',
        'Implemented state management solutions using Redux Toolkit and Context API for data flow management.',
        'Integrated RESTful APIs using Axios and Fetch API to connect frontend with backend services.',
        'Created unit tests using Jest and React Testing Library to ensure code reliability.',
        'Collaborated with teams using Agile methodologies and utilized Git for version control workflows.',
      ],
    },
  ],
  projects: [
    {
      title: 'AI-Powered Learning Management System (LMS)',
      description:
        'Engineered a full-stack multi-tenant SaaS LMS featuring course creation, video streaming, live quiz sessions, and learner progress analytics, handling 2,000+ concurrent users with optimized SSR via Next.js App Router. Designed a real-time notification and progress tracking system using WebSocket (Socket.io) to enable live quiz events and instant instructor-learner communication, reducing latency to under 200ms. Implemented AI-powered course recommendation engine by integrating OpenAI API on the Node.js backend, delivering personalized content suggestions based on learner activity and quiz performance patterns. Built Micro-Frontend architecture with Webpack 5 Module Federation, isolating Course Player, Dashboard, and Assessment modules for independent deployments, enabling CI/CD pipelines via GitHub Actions. Secured application with OAuth 2.0, JWT refresh-token rotation, and RBAC for Admin, Instructor, and Learner roles; achieved Lighthouse score of 94 after Core Web Vitals optimizations. Wrote 90%+ test coverage using Jest and RTL for unit tests and Cypress for E2E, establishing automated test gates in CI pipeline to prevent regressions across 15+ feature modules.',
      tech: ['Next.js 14', 'TypeScript', 'Node.js', 'MongoDB', 'WebSocket', 'OpenAI API', 'Webpack 5', 'GitHub Actions', 'Jest', 'RTL', 'Cypress'],
      link: undefined,
      repo: undefined,
    },
    {
      title: 'Rakuten E-commerce Platform',
      description:
        'Rakuten is a global e-commerce platform (www.rakuten.com) offering cashback rewards on purchases from electronics, clothing, beauty, and home goods with partnerships across numerous retailers providing exclusive deals and promotions. Implemented responsive design patterns and ensured cross-browser compatibility across Chrome, Firefox, Safari, and Edge, delivering consistent user experience on desktop, tablet, and mobile devices. Designed and implemented scalable Redux store architecture using TypeScript with well-structured actions, reducers, and selectors for efficient application state management. Integrated Redux with React components to manage complex state transitions and side effects, ensuring seamless data flow throughout the application ecosystem. Leveraged TypeScript proficiency including strong typing, interface declarations, and type safety implementation throughout the codebase, reducing runtime errors and improving code maintainability. Utilized React Hooks including useState, useEffect, useReducer, and custom hooks for managing local state and side effects within functional components effectively. Implemented Context API strategically to avoid prop drilling and enable efficient state sharing across multiple components while maintaining component hierarchy and performance. Collaborated with cross-functional teams to deliver features on schedule while maintaining high code quality standards through comprehensive testing and code review processes.',
      tech: ['React.js', 'TypeScript', 'Redux Toolkit', 'Next.js', 'GraphQL', 'Tailwind CSS', 'Material UI'],
      link: 'https://www.rakuten.com',
      repo: undefined,
    },
    {
      title: 'Task Management Dashboard',
      description:
        'Developed a comprehensive task management web application for team productivity with features including task creation, assignment, status tracking, and deadline management for enhanced workflow organization. Built responsive user interface using HTML5 semantic elements, CSS3 flexbox and grid layouts, and Bootstrap framework ensuring optimal viewing experience across various devices and screen sizes. Implemented interactive functionality using vanilla JavaScript (ES6+) and jQuery for DOM manipulation, event handling, form validation, and dynamic content updates without page refreshes. Integrated RESTful API endpoints using Fetch API and AJAX calls for CRUD operations including task creation, updating, deletion, and real-time data synchronization with backend services. Applied modern CSS techniques including CSS variables, animations, transitions, and responsive design principles to create an intuitive and visually appealing user interface with smooth interactions. Implemented local storage functionality for offline data persistence and utilized browser APIs for enhanced user experience including notifications and drag-and-drop task management features.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'REST API'],
      link: undefined,
      repo: undefined,
    },
  ],
  skills: {
    frontend: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SASS/SCSS', 'React.js', 'React Native', 'Redux Toolkit', 'Next.js', 'React Hooks', 'Context API', 'Micro-Frontend (Module Federation)', 'Tailwind CSS', 'Material UI', 'Responsive Web Design', 'Cross-Browser Compatibility'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'GraphQL', 'Apollo Client', 'Axios', 'Fetch API', 'JSON', 'WebSocket', 'Socket.io', 'OpenAI API', 'AI Integration'],
    tooling: ['Jest', 'React Testing Library (RTL)', 'Cypress', 'Unit Testing', 'Integration Testing', 'Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'Docker (basics)', 'Webpack', 'Vite', 'npm/yarn', 'JWT (JSON Web Tokens)', 'OAuth 2.0', 'RBAC', 'Code Optimization', 'Best Practices', 'Agile/Scrum', 'Version Control', 'Code Reviews', 'Team Collaboration', 'GitHub Copilot', 'Cursor AI', 'Prompt Engineering'],
  },
  education: [
    {
      institution: 'National Institute of Technology (NIT), Nagaland',
      degree: 'B.Tech in Electronics and Instrumentation Engineering',
      start: '2019',
      end: '2023',
      location: 'Nagaland, India',
    },
  ],
}
