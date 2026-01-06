// Mock data for Mudit Nagori's portfolio

export const profileData = {
  name: "Mudit Nagori",
  title: "Senior Backend Software Engineer",
  tagline: "Building scalable, cloud-native backend systems with strong engineering quality and operational excellence.",
  location: "Bengaluru, India",
  email: "tidum.nagori@email.com",
  linkedin: "https://www.linkedin.com/in/mudit-nagori/",
  github: "https://github.com/MuditN",
  resumeUrl: "https://customer-assets.emergentagent.com/job_cloud-architect-23/artifacts/tpdr3umh_Mudit_Nagori_Resume_Latest.pdf"
};

export const aboutData = {
  description: "Senior Backend Software Engineer with 5+ years of experience building cloud-native SaaS backend systems. Specialized in distributed systems, AWS infrastructure, and CI/CD modernization. Strong track record in leading complex migrations, implementing observability solutions, and driving engineering quality initiatives. Experienced in mentoring teams and establishing best practices for scalable, reliable systems.",
  highlights: [
    "5+ years building distributed microservices and cloud-native systems",
    "Expert in AWS, Docker, Kubernetes, and modern DevOps practices",
    "Led major Spring Boot & Node.js version migrations across multiple services",
    "Achieved zero High/Medium SonarQube issues through quality initiatives",
    "Strong focus on observability, reliability, and operational excellence"
  ]
};

export const experienceData = [
  {
    id: "exp-1",
    company: "GE Aerospace",
    position: "Senior Software Engineer",
    duration: "Nov 2022 – Present",
    location: "Bengaluru, India",
    description: "Leading backend development for distributed microservices on AWS cloud infrastructure.",
    achievements: [
      "Architected and maintained distributed microservices handling high-volume transactions",
      "Led Spring Boot 2.x to 3.x migration across multiple critical services",
      "Drove Node.js 16 to 20 major version upgrade with zero downtime",
      "Modernized CI/CD pipelines, improving deployment efficiency and reliability",
      "Achieved zero High/Medium severity issues in SonarQube through code quality initiatives",
      "Implemented comprehensive observability solutions using New Relic and CloudWatch",
      "Mentored junior engineers and established engineering best practices"
    ],
    technologies: ["Java", "Spring Boot", "Node.js", "AWS", "PostgreSQL", "DynamoDB", "Docker", "Kubernetes"]
  },
  {
    id: "exp-2",
    company: "GE Renewable Energy",
    position: "Software Engineer",
    duration: "2020 – 2022",
    location: "Bengaluru, India",
    description: "Developed backend systems and workflow automation solutions.",
    achievements: [
      "Built scalable REST APIs using Python Flask and PostgreSQL",
      "Automated complex workflows reducing manual intervention by 40%",
      "Improved CI/CD pipeline efficiency by ~30% through optimization",
      "Implemented caching strategies improving response times by 50%",
      "Collaborated with cross-functional teams on system design and architecture"
    ],
    technologies: ["Python", "Flask", "PostgreSQL", "Redis", "Jenkins", "Docker"]
  },
  {
    id: "exp-3",
    company: "GE Renewable Energy",
    position: "Software Engineer Specialist",
    duration: "2019 – 2020",
    location: "Bengaluru, India",
    description: "Built AWS-based platforms and large-scale configuration management systems.",
    achievements: [
      "Developed AWS + Docker based platform for configuration management",
      "Handled large-scale configuration systems serving multiple teams",
      "Implemented automated deployment pipelines",
      "Established monitoring and alerting for production systems"
    ],
    technologies: ["AWS", "Docker", "Python", "Jenkins", "CloudFormation"]
  },
  {
    id: "exp-4",
    company: "Freelance",
    position: "Software Developer",
    duration: "2018 – 2019",
    location: "Remote",
    description: "Full-stack development for various client projects.",
    achievements: [
      "Delivered full-stack solutions for multiple clients",
      "Developed game projects using Unity and C#",
      "Built web applications with JavaScript and modern frameworks",
      "Managed end-to-end project delivery and client communication"
    ],
    technologies: ["Unity", "C#", "JavaScript", "MongoDB", "Node.js"]
  }
];

export const projectsData = [
  {
    id: "proj-1",
    title: "Custom Operating System",
    tagline: "A fully functional OS built from scratch with custom kernel, scheduler, and UI layer",
    description: "Developed a complete operating system from the ground up, implementing core OS concepts including process scheduling, memory management, and a graphical user interface.",
    problem: "Understanding low-level system programming and OS internals requires hands-on implementation. Built this project to master kernel development, resource management, and system-level programming.",
    solution: "Implemented a custom kernel in C++ with preemptive multitasking scheduler, virtual memory management, and inter-process communication. Added a UI layer and integrated 3D rendering capabilities.",
    challenges: [
      "Implementing virtual memory management and page fault handling",
      "Designing an efficient process scheduler with priority queues",
      "Handling hardware interrupts and system calls",
      "Integrating 3D rendering pipeline with kernel graphics subsystem"
    ],
    demonstrates: [
      "Deep understanding of operating system internals",
      "Low-level systems programming in C++",
      "Memory management and process scheduling algorithms",
      "Hardware-software interaction and interrupt handling"
    ],
    technologies: ["C++", "Assembly", "Python", "Blender"],
    github: "#"
  },
  {
    id: "proj-2",
    title: "Graphics Engine",
    tagline: "High-performance 3D graphics rendering engine with GPU acceleration",
    description: "Built a sophisticated graphics engine leveraging DirectX 11 and GPU compute capabilities for real-time 3D rendering with advanced shader effects.",
    problem: "Modern graphics rendering requires efficient GPU utilization and parallel processing. Created this engine to master graphics programming, GPU compute, and performance optimization.",
    solution: "Developed a DirectX 11-based rendering engine with HLSL shader pipeline, OpenCL compute kernels for parallel processing, and optimized GPU/CPU synchronization mechanisms.",
    challenges: [
      "Optimizing GPU/CPU data synchronization for minimal latency",
      "Implementing efficient memory management for GPU resources",
      "Writing high-performance HLSL shaders for complex effects",
      "Handling parallel compute tasks with OpenCL while maintaining frame rates"
    ],
    demonstrates: [
      "Graphics programming and GPU architecture understanding",
      "High-performance computing with OpenCL and HLSL",
      "Real-time rendering optimization techniques",
      "Parallel programming and resource synchronization"
    ],
    technologies: ["C++", "DirectX 11", "HLSL", "OpenCL"],
    github: "#"
  },
  {
    id: "proj-3",
    title: "Stick Traveller - 2D Game",
    tagline: "Cross-platform 2D game with persistent data storage and engaging gameplay",
    description: "Developed a complete 2D game using Unity engine with MongoDB backend for player data persistence and game state management.",
    problem: "Creating an engaging game experience requires balancing gameplay mechanics, performance optimization, and reliable data persistence across sessions.",
    solution: "Built a full-featured 2D game using Unity with C# scripting, integrated MongoDB for player progress and achievements, implemented efficient game state management and optimized rendering for smooth 60 FPS gameplay.",
    challenges: [
      "Optimizing game loop and rendering for consistent frame rates",
      "Implementing reliable save/load system with MongoDB",
      "Balancing gameplay mechanics and difficulty progression",
      "Managing game assets and memory efficiently"
    ],
    demonstrates: [
      "Game development and Unity engine expertise",
      "Database integration for persistent game state",
      "Performance optimization for real-time applications",
      "Full project lifecycle from concept to deployment"
    ],
    technologies: ["Unity", "C#", "MongoDB"],
    github: "#"
  }
];

export const skillsData = {
  languages: ["Java", "Python", "C++", "JavaScript", "TypeScript", "C#"],
  backend: ["Spring Boot", "Flask", "Node.js", "Express.js", "RESTful APIs"],
  databases: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "MySQL"],
  cloud: ["AWS (EC2, S3, Lambda, ECS, CloudWatch)", "Docker", "Kubernetes"],
  devops: ["CI/CD", "Jenkins", "GitHub Actions", "SonarQube", "New Relic", "CloudWatch"],
  systemDesign: ["Microservices", "Distributed Systems", "Scalability", "Reliability", "Observability"]
};

export const achievementsData = [
  {
    id: "ach-1",
    title: "GE Hackathon Winner",
    description: "Won internal hackathon for ML-based workflow automation solution",
    year: "2023"
  },
  {
    id: "ach-2",
    title: "AWS DeepRacer Competition",
    description: "Participated in AWS DeepRacer reinforcement learning competition",
    year: "2022"
  },
  {
    id: "ach-3",
    title: "Engineering Excellence Award",
    description: "Recognized for code quality initiatives and zero critical issues achievement",
    year: "2023"
  },
  {
    id: "ach-4",
    title: "Mentorship Leadership",
    description: "Led onboarding and mentorship program for 5+ junior engineers",
    year: "2022-Present"
  }
];