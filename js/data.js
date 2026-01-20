window.APP_DATA = {
    departments: [
        {
            id: '1',
            slug: 'cse',
            name: 'Computer Science and Engineering',
            code: 'CSE',
            description: 'The Department of Computer Science and Engineering was established to provide world-class education in computing and technology. We aim to produce globally competent professionals.',
            hodName: 'Dr. C Mohammed Gulzar',
            hodMessage: 'Welcome to the CSE Department. Our mission is to empower students with computing knowledge and analytical skills to solve complex problems in the digital age.',
            vision: 'To be a center of excellence in Computer Science and Engineering education and research.',
            mission: [
                'To provide quality education in Computer Science and Engineering.',
                'To promote research and innovation.',
                'To foster industry-academia interaction.'
            ],
            faculty: [
                { id: 'cse-f1', name: 'Dr. Dhanaraj Cheelu', designation: 'Professor', qualification: 'Ph.D', specialization: 'Computer Science' },
                { id: 'cse-f2', name: 'Dr. K. Pavan Kumar', designation: 'Professor', qualification: 'Ph.D', specialization: 'Computer Science' },
                { id: 'cse-f3', name: 'Dr. P. Surya Narayana Babu', designation: 'Professor', qualification: 'Ph.D', specialization: 'Computer Science' },
                { id: 'cse-f4', name: 'Dr. M. Veeresha', designation: 'Associate Professor', qualification: 'Ph.D', specialization: 'Computer Science' },
                { id: 'cse-f5', name: 'Dr. C. Mohammed Gulzar', designation: 'Associate Professor & HoD', qualification: 'Ph.D', specialization: 'Computer Science' },
                { id: 'cse-f6', name: 'Dr. H. Ateeq Ahmed', designation: 'Associate Professor', qualification: 'Ph.D', specialization: 'Computer Science' },
                { id: 'cse-f7', name: 'Trilik Venkateswarlu', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'Computer Science' },
                { id: 'cse-f8', name: 'A. Emmanuel Raju', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'Computer Science' },
                { id: 'cse-f9', name: 'P. Pradeep Kumar', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'Computer Science' },
                { id: 'cse-f10', name: 'G. Sreenivasulu', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'Computer Science' }
            ],
            curriculum: [
                { semester: '1st Semester', subjects: ['Mathematics I', 'Programming for Problem Solving', 'Engineering Physics'] },
                { semester: '2nd Semester', subjects: ['Mathematics II', 'Data Structures', 'Engineering Chemistry'] }
            ],
            researchAreas: [
                { id: 'r1', title: 'Artificial Intelligence', description: 'Research in Machine Learning, Deep Learning, and NLP.' },
                { id: 'r2', title: 'IoT and Embedded Systems', description: 'Developing smart solutions for real-world problems.' }
            ],
            resources: [
                { id: 'res1', title: 'CSE Syllabus 2024-25', category: 'Syllabus', link: '#' },
                { id: 'res2', title: 'Data Structures Question Bank', category: 'Previous Paper', link: '#' },
            ],
            timetables: [
                { id: 'tt1', title: '2nd Year Sec-A Timetable', year: '2nd Year', semester: '1st Sem', link: '#' },
                { id: 'tt2', title: '3rd Year Sec-B Timetable', year: '3rd Year', semester: '1st Sem', link: '#' },
            ],
            image: '/images/hero/hero-1.png'
        },
        {
            id: '2',
            slug: 'ece',
            name: 'Electronics and Communication Engineering',
            code: 'ECE',
            description: 'The ECE department focuses on Electronics, Communication, and Signal Processing.',
            hodName: 'Dr. M.V. Sruthi',
            hodMessage: 'Leading the way in electronics and next-generation communication systems.',
            vision: 'To produce high-quality Electronics and Communication Engineers.',
            mission: [
                'To impart strong fundamental knowledge.',
                'To facilitate research in emerging technologies.'
            ],
            faculty: [
                { id: 'ece-f1', name: 'Dr. M.V. Sruthi', designation: 'Associate Professor & HoD', qualification: 'Ph.D', specialization: 'Signal Processing' },
                { id: 'ece-f2', name: 'Dr. R. Prabhakar', designation: 'Professor', qualification: 'Ph.D', specialization: 'Communication Systems' },
                { id: 'ece-f3', name: 'Dr. T. Syed Akheel', designation: 'Professor', qualification: 'Ph.D', specialization: 'VLSI' },
                { id: 'ece-f4', name: 'P. Jayarami Reddy', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'Electronics' },
                { id: 'ece-f5', name: 'V.R. Shanthi', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'ECE' },
                { id: 'ece-f6', name: 'M. Suneel Kumar', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'ECE' }
            ],
            curriculum: [],
            researchAreas: [
                { id: 'ece-r1', title: 'VLSI Design', description: 'Research on low power VLSI systems.' }
            ],
            resources: [],
            timetables: [],
            image: '/images/hero/hero-2.png'
        },
        {
            id: '3',
            slug: 'eee',
            name: 'Electrical and Electronics Engineering',
            code: 'EEE',
            description: 'The EEE department provides a strong foundation in electrical engineering and modern electronics technologies.',
            hodName: 'Dr. M. Madhusudhan Reddy',
            hodMessage: 'Empowering students to lead in power systems and renewable energy.',
            vision: 'To lead in electrical and electronics engineering education.',
            mission: [
                'To provide technical expertise in electrical systems.',
                'To encourage sustainable energy research.'
            ],
            faculty: [
                { id: 'eee-f1', name: 'Dr. M. Madhusudhan Reddy', designation: 'Professor & HoD', qualification: 'Ph.D', specialization: 'Power Systems' },
                { id: 'eee-f2', name: 'Dr. K. Rajesh', designation: 'Associate Professor', qualification: 'Ph.D', specialization: 'Power Electronics' },
                { id: 'eee-f3', name: 'V. Nirmala Devi', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'EEE' },
                { id: 'eee-f4', name: 'S. Thirumalaiah', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'EEE' }
            ],
            curriculum: [],
            researchAreas: [],
            resources: [],
            timetables: [],
            image: '/images/hero/extra-1.png'
        },
        {
            id: '4',
            slug: 'ce',
            name: 'Civil Engineering',
            code: 'CE',
            description: 'The Civil Engineering department is dedicated to creating sustainable infrastructure and shaping the built environment.',
            hodName: 'Dr. Raj Kumar',
            hodMessage: 'Engineering the future with sustainable and resilient infrastructure.',
            vision: 'To be a premier department in Civil Engineering.',
            mission: [
                'To create competent civil engineers.',
                'To focus on sustainable infrastructure development.'
            ],
            faculty: [
                { id: 'ce-f1', name: 'Dr. Raj Kumar', designation: 'Professor & HoD', qualification: 'Ph.D', specialization: 'Structural Engineering' },
                { id: 'ce-f2', name: 'Dr. Nagalingeswara Rao', designation: 'Professor', qualification: 'Ph.D', specialization: 'Geo-Technical' },
                { id: 'ce-f3', name: 'J. Omprakash', designation: 'Associate Professor', qualification: 'M.Tech', specialization: 'Civil' },
                { id: 'ce-f4', name: 'C. Prasanth', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'Civil' }
            ],
            curriculum: [],
            researchAreas: [],
            resources: [],
            timetables: [],
            image: '/images/ce-dept.jpg'
        },
        {
            id: '5',
            slug: 'me',
            name: 'Mechanical Engineering',
            code: 'ME',
            description: 'The Mechanical Engineering department fosters innovation in design, manufacturing, and thermal sciences.',
            hodName: 'Dr. J. Kanna Kumar',
            hodMessage: 'Innovative engineering for a dynamic world.',
            vision: 'To excel in mechanical engineering education and research.',
            mission: [
                'To impart knowledge in design and manufacturing.',
                'To promote interdisciplinary research.'
            ],
            faculty: [
                { id: 'me-f1', name: 'Dr. J. Kanna Kumar', designation: 'Professor & HoD', qualification: 'Ph.D', specialization: 'Thermal Engineering' },
                { id: 'me-f2', name: 'Dr. G. Thirupati Reddy', designation: 'Professor', qualification: 'Ph.D', specialization: 'Manufacturing' },
                { id: 'me-f3', name: 'K. Venkateswar Reddy', designation: 'Associate Professor', qualification: 'M.Tech', specialization: 'Design' },
                { id: 'me-f4', name: 'B. Uma Shankar', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'CAD/CAM' }
            ],
            curriculum: [],
            researchAreas: [],
            resources: [],
            timetables: [],
            image: '/images/me-dept.jpg'
        },
        {
            id: '6',
            slug: 'hs',
            name: 'Humanities & Sciences',
            code: 'H&S',
            description: 'The H&S department provides the foundation for engineering education with mathematics, physics, and communication skills.',
            hodName: 'Dr. V.P. Geetha Vani',
            hodMessage: 'Shaping versatile engineers with strong theoretical foundations.',
            vision: 'To empower students with basic sciences and professional values.',
            mission: ['To impart foundational knowledge in sciences.', 'To improve communication and soft skills.'],
            faculty: [
                { id: 'hs-f1', name: 'Dr. V.P. Geetha Vani', designation: 'Associate Professor & HoD', qualification: 'Ph.D', specialization: 'Mathematics' },
                { id: 'hs-f2', name: 'G. Ananda Rambabu', designation: 'Assistant Professor', qualification: 'M.Sc', specialization: 'Physics' },
                { id: 'hs-f3', name: 'J.P. Latha', designation: 'Assistant Professor', qualification: 'MA', specialization: 'English' }
            ],
            curriculum: [],
            researchAreas: [],
            resources: [],
            timetables: [],
            image: '/images/hero/hero-1.png'
        },
        {
            id: '7',
            slug: 'mba',
            name: 'Master of Business Administration',
            code: 'MBA',
            description: 'Developing leadership and management skills for the corporate world.',
            hodName: 'Dr. S. Mahaboob Basha',
            hodMessage: 'Nurturing the next generation of business leaders.',
            vision: 'To be a leading center for management education.',
            mission: ['To provide industry-ready management professionals.'],
            faculty: [
                { id: 'mba-f1', name: 'Dr. S. Mahaboob Basha', designation: 'Assistant Professor & HoD', qualification: 'Ph.D', specialization: 'Management' },
                { id: 'mba-f2', name: 'Syed Irfan Ul Haqq', designation: 'Assistant Professor', qualification: 'MBA', specialization: 'Finance' },
                { id: 'mba-f3', name: 'M. Jhansi Rani', designation: 'Assistant Professor', qualification: 'MBA', specialization: 'HR' }
            ],
            curriculum: [],
            researchAreas: [],
            resources: [],
            timetables: [],
            image: '/images/hero/hero-2.png'
        },
        {
            id: '8',
            slug: 'mca',
            name: 'Master of Computer Applications',
            code: 'MCA',
            description: 'Advanced studies in computer applications and software development.',
            hodName: 'Dr. B. Mahesh',
            hodMessage: 'Excellence in software engineering and application development.',
            vision: 'To produce highly skilled IT professionals.',
            mission: ['To provide quality training in software technologies.'],
            faculty: [
                { id: 'mca-f1', name: 'Dr. B. Mahesh', designation: 'Professor & HoD', qualification: 'Ph.D', specialization: 'Computer Applications' },
                { id: 'mca-f2', name: 'M. Khaja Hussain', designation: 'Assistant Professor', qualification: 'MCA', specialization: 'IT' },
                { id: 'mca-f3', name: 'P. Sree Lakshmi', designation: 'Assistant Professor', qualification: 'MCA', specialization: 'Computer Science' }
            ],
            curriculum: [],
            researchAreas: [],
            resources: [],
            timetables: [],
            image: '/images/hero/extra-1.png'
        },
        {
            id: '9',
            slug: 'ai',
            name: 'Artificial Intelligence',
            code: 'AI',
            description: 'The Department of Artificial Intelligence focuses on creating intelligent systems and advanced problem-solving methodologies.',
            hodName: 'Dr. TBD',
            hodMessage: 'Welcome to the AI Department. We aim to lead the future of intelligent computing.',
            vision: 'To be a center of excellence in Artificial Intelligence education and research.',
            mission: [
                'To provide cutting-edge education in AI technologies.',
                'To foster innovation in intelligent systems.'
            ],
            faculty: [],
            curriculum: [],
            researchAreas: [],
            resources: [],
            timetables: [],
            image: '/images/hero/hero-1.png'
        }
    ],
    events: [
        {
            id: '1',
            slug: 'tech-fest-2025',
            title: 'KVSRIT Tech Fest 2025',
            date: '2025-03-15',
            time: '09:00 AM',
            venue: 'Main Auditorium',
            category: 'Cultural',
            description: 'Annual technical symposium featuring coding contests, paper presentations, and robotics workshops.',
            objectives: [
                'To provide a platform for students to showcase their technical skills.',
                'To encourage innovation and creativity.',
                'To facilitate networking with industry experts.'
            ],
            registrationLink: 'https://forms.gle/example',
            gallery: [],
            thumbnail: null
        },
        {
            id: '2',
            slug: 'ai-workshop',
            title: 'Workshop on Generative AI',
            date: '2025-02-20',
            time: '10:00 AM',
            venue: 'CSE Seminar Hall',
            category: 'Workshop',
            description: 'A hands-on workshop on the latest trends in Generative AI and LLMs.',
            objectives: [
                'Understand the basics of Generative AI.',
                'Hands-on experience with LLMs.'
            ],
            registrationLink: 'https://forms.gle/workshop',
            gallery: [],
            thumbnail: null
        }
    ],
    courseCategories: [
        {
            id: '1',
            slug: 'btech',
            title: 'B.Tech (Bachelor of Technology)',
            description: '4-Year Undergraduate Degree Program designed to provide a strong foundation in engineering principles and practical skills.',
            duration: '4 Years',
            courses: [
                { name: "Computer Science and Engineering (CSE)", code: "CSE" },
                { name: "Electronics and Communication Engineering (ECE)", code: "ECE" },
                { name: "Electrical and Electronics Engineering (EEE)", code: "EEE" },
                { name: "Civil Engineering", code: "CE" },
                { name: "Mechanical Engineering", code: "ME" },
                { name: "Artificial Intelligence and Machine Learning", code: "AIML" },
                { name: "Artificial Intelligence (AI)", code: "AI" },
                { name: "Data Science", code: "DS" },
            ]
        },
        {
            id: '2',
            slug: 'mtech',
            title: 'M.Tech (Master of Technology)',
            description: '2-Year Postgraduate Degree Program focusing on advanced engineering concepts and research.',
            duration: '2 Years',
            courses: [
                { name: "Computer Science and Engineering", code: "CSE" },
                { name: "VLSI Design", code: "VLSI" },
                { name: "Power Electronics", code: "PE" },
                { name: "Structural Engineering", code: "SE" },
            ]
        },
        {
            id: '3',
            slug: 'management',
            title: 'Management & Computer Applications',
            description: 'Postgraduate Professional Programs to develop business leaders and IT professionals.',
            duration: '2 Years',
            courses: [
                { name: "Master of Business Administration (MBA)", code: "MBA" },
                { name: "Master of Computer Applications (MCA)", code: "MCA" },
            ]
        },
        {
            id: '4',
            slug: 'diploma',
            title: 'Diploma (Polytechnic)',
            description: '3-Year Diploma Program providing technical skills for immediate employment or further studies.',
            duration: '3 Years',
            courses: [
                { name: "Diploma in Civil Engineering", code: "DCE" },
                { name: "Diploma in Computer Science", code: "DCSE" },
                { name: "Diploma in EEE", code: "DEEE" },
                { name: "Diploma in ECE", code: "DECE" },
                { name: "Diploma in Mechanical Engineering", code: "DME" },
            ]
        }
    ],
    leadership: [
        {
            role: 'Chairman',
            name: 'Dr. K.V. Subba Reddy',
            designation: 'Founder & Chairman, Vaibhav Educational Society',
            message: 'In 2007, KVSRIT was founded in Kurnool. It is our unwavering commitment to the highest quality education. I would like to thank the generations of parents who have interested us with the care and education of their children. I believe that education is an important role to play in the progress of a nation DrKVSRIT has the sole objective of promoting ancient Indian values and adopting modern technology in technical education. The students should be made job ready so that the industry knock the doors of our college for campus drives. We create opportunities not just for young people to learn but also to experience the fulfillment that comes from sharing this learning with others.',
            image: '/images/leadership/chairman.png'
        },
        {
            role: 'Secretary & Correspondent',
            name: 'Smt. S. Vijayalakshmamma',
            designation: 'Secretary, Vaibhav Educational Society',
            message: 'The KVSRIT is well aware that education plays a key role in a student’s life, in acquiring abilities to solve problems, achieve success and lead a fruitful life. I do strongly believe that with the committed efforts of the board of governors, staff, and students. I hope we can all discharge our duties fully to give a better future to our children. At KVSRIT, prepare to be constantly challenged, whether it is in the classroom or outside. You can look forward to being trained by stellar faculty, getting hands-on experience at leading organizations and building enduring bonds with your peers.',
            image: '/images/leadership/secretary.png'
        },
        {
            role: 'Principal',
            name: 'Dr. Subba Reddy Borra',
            designation: 'Principal, KVSRIT',
            credentials: 'Ph.D. (JNTUH), M.Tech, B.E.',
            message: 'Engineering represents a vital human endeavor, focused on the creation of new artifacts, algorithms, processes, and systems that serve the needs of society. The role of an engineer is to innovate and to bring into existence that which has not yet been realized. Pursuing an education in engineering is a significant privilege. At Dr. K.V. Subba Reddy Institute of Technology(AUTONOMOUS), our vision is to become a global leader in providing quality technical education. We aim to produce competent, technically innovative engineers equipped with research aptitude, a spirit of entrepreneurship, and a strong sense of social responsibility. I am committed to integrating my experience in education with the collective efforts of the faculty to develop a robust methodology that nurtures the intellectual growth of our future engineers.',
            achievements: [
                'Authored 10 Technical Books',
                'Filed 4 Patents',
                '50+ Research Papers in International Journals',
                'Recognized Reviewer for Elsevier & Springer'
            ],
            image: '/images/leadership/principal.png'
        }
    ],
    professionalChapters: [
        {
            name: 'IEEE Student Branch',
            description: 'The world\'s largest technical professional organization for the advancement of technology.',
            activities: ['Technical Workshops', 'Paper Presentations', 'Networking Events'],
            id: 'ieee'
        },
        {
            name: 'ISTE Chapter',
            description: 'Indian Society for Technical Education - focusing on teacher and student development.',
            activities: ['Faculty Development Programs', 'Skill Enhancement', 'Seminars'],
            id: 'iste'
        },
        {
            name: 'IETE Student Forum',
            description: 'The Institution of Electronics and Telecommunication Engineers student chapter.',
            activities: ['Electronics Design Contests', 'Technical Talks', 'Industrial Visits'],
            id: 'iete'
        },
        {
            name: 'CSI Student Branch',
            description: 'Computer Society of India - promoting software professional development.',
            activities: ['Coding Contests', 'App Development Workshops', 'IT Quizzes'],
            id: 'csi'
        }
    ],
    qualityAssurance: {
        naac: {
            grade: 'A+',
            cgpa: '3.30',
            cycle: '1st Cycle',
            status: 'Accredited'
        },
        nba: {
            departments: ['B.Tech in Computer Science and Engineering'],
            status: 'Accredited'
        },
        iqac: {
            established: '2015',
            vision: 'To build and ensure a quality culture at the institutional level.',
            functions: [
                'Developing quality benchmarks for academic and administrative activities.',
                'Facilitating creation of learner-centric environment.',
                'Arrangement for feedback response from students, parents, and other stakeholders.',
                'Organization of inter and intra institutional workshops, seminars on quality related themes.'
            ]
        }
    },
    statutoryInfo: {
        rti: {
            title: 'Right to Information',
            description: 'The college complies with the Right to Information Act, 2005. Details regarding the public information officer and appellate authority can be found in the mandatory disclosures.',
            link: '#'
        },
        antiRagging: {
            title: 'Anti-Ragging Committee',
            description: 'KVSRIT maintains a zero-tolerance policy towards ragging. We have a robust anti-ragging committee in place to ensure student safety.',
            tollFree: '1800-180-5522',
            email: 'antiragging@drkvsrit.ac.in'
        }
    },
    contactDirectory: [
        { department: 'Admissions Office', contact: '+91 91773 17722', email: 'admissions@drkvsrit.ac.in' },
        { department: 'Exam Cell', contact: '+91 91107 11440', email: 'exams@drkvsrit.ac.in' },
        { department: 'Placement Cell', contact: '+91 98493 84646', email: 'tpcell@drkvsrit.ac.in' },
        { department: 'Library', contact: '+91 12345 67894', email: 'library@drkvsrit.ac.in' },
        { department: 'HOD CSE', contact: '+91 98858 83737', email: 'hod.cse@drkvsrit.ac.in' },
        { department: 'Admin Office', contact: '+91 08518 285559', email: 'admin@drkvsrit.ac.in' }
    ],
    announcements: {
        featured: [
            {
                id: 'f1',
                title: 'Admissions Open for Academic Year 2025-2026',
                date: 'Dec 24, 2024',
                description: 'Applications are invited for B.Tech, M.Tech, and MBA programs. Apply online or visit the campus for more details.',
                category: 'Admission',
            },
            {
                id: 'f2',
                title: 'KVSRIT Ranked NAAC A+ with 3.30 CGPA',
                date: 'Nov 15, 2024',
                description: 'We are proud to announce that our institution has been accredited with NAAC A+ grade in the first cycle of assessment.',
                category: 'Achievement',
            },
            {
                id: 'f3',
                title: 'New R&D Center Inauguration',
                date: 'Oct 20, 2024',
                description: 'A state-of-the-art Research and Development center has been inaugurated to foster innovation among students and faculty.',
                category: 'Campus',
            }
        ],
        list: [
            {
                id: 1,
                title: 'Aditya Birla Capital Campus Recruitment Drive',
                date: 'Oct 07, 2021',
                category: 'Placement',
            },
            {
                id: 2,
                title: 'Milekal Company, Hyderabad Campus Recruitment Drive',
                date: 'Jun 17, 2020',
                category: 'Placement',
            },
            {
                id: 3,
                title: 'Tech Mahindra, Chennai Campus Recruitment Drive',
                date: 'May 07, 2020',
                category: 'Placement',
            },
            {
                id: 4,
                title: 'Vee Technologies, Chennai Campus Recruitment Drive',
                date: 'Apr 04, 2020',
                category: 'Placement',
            }
        ]
    },
    research: {
        areas: [
            {
                title: 'Artificial Intelligence & ML',
                description: 'Deep learning, NLP, computer vision, and intelligent systems research.',
                icon: 'cpu',
                projects: 15,
                color: 'from-blue-500 to-cyan-400'
            },
            {
                title: 'Internet of Things',
                description: 'Smart systems, sensor networks, and embedded computing solutions.',
                icon: 'globe',
                projects: 12,
                color: 'from-purple-500 to-pink-400'
            },
            {
                title: 'Renewable Energy',
                description: 'Solar power systems, energy efficiency, and sustainable technologies.',
                icon: 'zap',
                projects: 8,
                color: 'from-emerald-500 to-teal-400'
            },
            {
                title: 'Biotechnology',
                description: 'Biomedical devices, healthcare technology, and life sciences.',
                icon: 'microscope',
                projects: 10,
                color: 'from-rose-500 to-red-400'
            }
        ],
        featuredProjects: [
            {
                title: 'Smart Campus IoT System',
                description: 'An integrated IoT system for monitoring campus utilities, security, and environment.',
                department: 'Computer Science',
                team: 'Final Year B.Tech',
                status: 'Completed',
                award: 'Best Project Award 2024'
            },
            {
                title: 'AI-Powered Crop Disease Detection',
                description: 'Using deep learning to identify crop diseases from images for early intervention.',
                department: 'CSE (AI/ML)',
                team: 'Research Team',
                status: 'Ongoing',
                award: null
            },
            {
                title: 'Solar-Powered E-Vehicle',
                description: 'Design and development of a solar-assisted electric vehicle prototype.',
                department: 'Mechanical & EEE',
                team: 'Interdisciplinary Team',
                status: 'Prototype Ready',
                award: 'Innovation Award 2023'
            }
        ],
        publications: [
            {
                title: 'Deep Learning Approaches for Medical Image Analysis',
                authors: 'Dr. A. Suresh, Dr. B. Ramesh',
                journal: 'International Journal of Computer Science',
                year: 2024
            },
            {
                title: 'IoT-Based Smart Agriculture System',
                authors: 'Prof. C. Krishna, Research Team',
                journal: 'IEEE Conference on Emerging Technologies',
                year: 2024
            },
            {
                title: 'Renewable Energy Integration in Smart Grids',
                authors: 'Dr. D. Srinivas, Dr. E. Venkat',
                journal: 'Journal of Sustainable Energy',
                year: 2023
            }
        ],
        stats: [
            { label: 'Research Papers', value: '150+' },
            { label: 'Patents Filed', value: '12' },
            { label: 'Research Projects', value: '45+' },
            { label: 'Industry Collaborations', value: '20+' }
        ]
    },
    academicPrograms: {
        "btech": {
            title: "B.Tech (Bachelor of Technology)",
            description: "4-Year Undergraduate Degree Program",
            courses: [
                { name: "Computer Science and Engineering (CSE)", code: "CSE", },
                { name: "Electronics and Communication Engineering (ECE)", code: "ECE" },
                { name: "Electrical and Electronics Engineering (EEE)", code: "EEE" },
                { name: "Civil Engineering", code: "CE" },
                { name: "Mechanical Engineering", code: "ME" },
                { name: "Artificial Intelligence and Machine Learning", code: "AIML" },
                { name: "Data Science", code: "DS" },
            ]
        },
        "mtech": {
            title: "M.Tech (Master of Technology)",
            description: "2-Year Postgraduate Degree Program",
            courses: [
                { name: "Computer Science and Engineering", code: "CSE" },
                { name: "VLSI Design", code: "VLSI" },
                { name: "Power Electronics", code: "PE" },
                { name: "Structural Engineering", code: "SE" },
            ]
        },
        "management": {
            title: "Management & Computer Applications",
            description: "Postgraduate Professional Programs",
            courses: [
                { name: "Master of Business Administration (MBA)", code: "MBA" },
                { name: "Master of Computer Applications (MCA)", code: "MCA" },
            ]
        },
        "diploma": {
            title: "Diploma (Polytechnic)",
            description: "3-Year Diploma Program",
            courses: [
                { name: "Diploma in Civil Engineering", code: "DCE" },
                { name: "Diploma in Computer Science", code: "DCSE" },
                { name: "Diploma in EEE", code: "DEEE" },
                { name: "Diploma in ECE", code: "DECE" },
                { name: "Diploma in Mechanical Engineering", code: "DME" },
            ]
        }
    },
    placements: {
        stats: [
            { label: 'Placement Rate', value: '95%', icon: 'trending-up', color: 'from-emerald-500 to-teal-400' },
            { label: 'Highest Package', value: '₹18 LPA', icon: 'dollar-sign', color: 'from-amber-500 to-orange-400' },
            { label: 'Average Package', value: '₹5.2 LPA', icon: 'bar-chart-3', color: 'from-blue-500 to-cyan-400' },
            { label: 'Companies Visiting', value: '100+', icon: 'building-2', color: 'from-purple-500 to-pink-400' }
        ],
        recruiters: [
            { name: 'TCS', category: 'IT Services' },
            { name: 'Infosys', category: 'IT Services' },
            { name: 'Wipro', category: 'IT Services' },
            { name: 'Tech Mahindra', category: 'IT Services' },
            { name: 'Cognizant', category: 'IT Services' },
            { name: 'HCL', category: 'IT Services' },
            { name: 'Capgemini', category: 'Consulting' },
            { name: 'Accenture', category: 'Consulting' },
            { name: 'Amazon', category: 'Product' },
            { name: 'Zoho', category: 'Product' },
            { name: 'L&T', category: 'Core' },
            { name: 'Ashok Leyland', category: 'Core' }
        ],
        successStories: [
            {
                name: 'Sai Krishna',
                role: 'Software Engineer at Amazon',
                batch: '2024',
                package: '₹18 LPA',
                quote: 'KVSRIT provided excellent placement training and support. The mock interviews were incredibly helpful.',
                department: 'Computer Science'
            },
            {
                name: 'Priya Sharma',
                role: 'Data Analyst at TCS',
                batch: '2024',
                package: '₹6.5 LPA',
                quote: 'The placement cell arranged multiple opportunities. I got placed in my dream company!',
                department: 'Information Technology'
            },
            {
                name: 'Rahul Reddy',
                role: 'Design Engineer at L&T',
                batch: '2023',
                package: '₹7 LPA',
                quote: 'The practical exposure during internships made me industry-ready from day one.',
                department: 'Mechanical Engineering'
            }
        ],
        process: [
            { step: 1, title: 'Pre-Placement Training', description: 'Aptitude, communication, and technical skills training' },
            { step: 2, title: 'Resume Building', description: 'Professional resume and portfolio development' },
            { step: 3, title: 'Mock Interviews', description: 'Practice sessions with industry experts' },
            { step: 4, title: 'Company Registrations', description: 'Apply to visiting companies' },
            { step: 5, title: 'Campus Drives', description: 'Participate in recruitment drives' },
            { step: 6, title: 'Offer Letters', description: 'Receive and accept job offers' }
        ],
        services: [
            { title: 'Career Counseling', description: 'One-on-one guidance for career planning' },
            { title: 'Industry Internships', description: 'Hands-on experience with leading companies' },
            { title: 'Skill Development', description: 'Workshops on emerging technologies' },
            { title: 'Entrepreneurship Cell', description: 'Support for aspiring entrepreneurs' }
        ]
    }
};
