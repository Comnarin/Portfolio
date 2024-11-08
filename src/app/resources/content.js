import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Narin',
    lastName:  'Sirinapuk',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Bangkok',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Thai']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/comnarin',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/narin-sirinapuk-870081294/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:nsirinapuk@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Computer Engineering Student</>,
    subline: <>I'm Narin, a computer engineering student and current intern at <InlineCode>TCC-Tech</InlineCode>. I craft intuitive user experiences and build my own projects in my spare time.</>

}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false ,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I'm a computer engineering student and intern at TCC-Tech, passionate about solving complex challenges through technology.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'TCC-Tech',
                timeframe: '2024 - Present',
                role: 'Software Engineer',
                achievements: [
                    <>Developed a WMS microservice using C# .NET and Next.js, improving system efficiency and scalability.</>,
                    <>Contributed to the development of the Little John food delivery app using Go Lang and React.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/gallery/img-02.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'University Project',
                timeframe: '2021 - 2024',
                role: 'Computer Engineering Student',
                achievements: [
                    <>Developed the HAYA Mobile Application using Figma for UI/UX and Flutter for cross-platform development, incorporating AI to recognize medicines within the app.</>,
                    <>Built the T-PAK Dormitory Matching Platform using React and Node.js, enabling users to find available dorms across Thailand.</>,
                    <>Engineered a robust search engine using Python that combines web scraping, NLP, and an inverted index for efficient information retrieval.</>,
                    <>Created a real-time COVID-19 infection and vaccination rate visualization web app, using Python for web scraping and FastAPI for backend-to-frontend data transmission.</>
                ],
                images: [
                    {
                    src: '/images/gallery/haya.png',
                    alt: 'Once UI Project',
                    width: 16,
                    height: 9
                    } ,
                    {
                    src: '/images/gallery/covid.png',
                    alt: 'Once UI Project',
                    width: 16,
                    height: 9
                    } ,
                    {
                        src: '/images/gallery/img-11.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    } ,
                    {
                        src: '/images/projects/Tpak/tpak-02.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    } ,
            ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'KMUTNB',
                description: <>Bachelor of Computer Engineering 2021-2025 , First Class Honor with GPA 3.60</>,
            },
            
            {
                name: 'Franklin Regional High School',
                description: <>USA Exchange Student 2017-2018</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            
            {
                title: 'Backend',
                description: <>Node JS , Express , Go Lang , C#(.Net) , Python</>,
                images: [
                    {
                        src: '/images/skills/node.png',
                        alt: 'Skills',
                        width: 9,
                        height: 9
                    },
                    {
                        src: '/images/skills/express-js.png',
                        alt: 'Skills',
                        width: 9,
                        height: 9
                    },
                    {
                        src: '/images/skills/go.png',
                        alt: 'Skills',
                        width: 10,
                        height: 9
                    },
                    {
                        src: '/images/skills/c.png',
                        alt: 'Skills',
                        width: 9,
                        height: 9
                    },
                    {
                        src: '/images/skills/python.png',
                        alt: 'Skills',
                        width: 9,
                        height: 9
                    },
                    
                ]
            },
            {
                title: 'Frontend',
                description: <>React , HTML , CSS , JavaScript</>,
                images: [
                    {
                        src: '/images/skills/React.png',
                        alt: 'Skills',
                        width: 9,
                        height: 9
                    },
                    {
                        src: '/images/skills/html.png',
                        alt: 'Skills',
                        width: 9,
                        height: 9
                    },
                    {
                        src: '/images/skills/css.png',
                        alt: 'Skills',
                        width: 9,
                        height: 9
                    },
                    {
                        src: '/images/skills/js.png',
                        alt: 'Skills',
                        width: 9,
                        height: 9
                    },
                    {
                        src: '/images/skills/bootstrap.png',
                        alt: 'Skills',
                        width: 9,
                        height: 9
                    },
                    {
                        src: '/images/skills/tailwind.png',
                        alt: 'Skills',
                        width: 9,
                        height: 9
                    }
                ]
            },
            {
                title: 'Database',
                description: <>MySQL , PostgreSQL , MongoDB </>,
                images: [
                    {
                        src: '/images/skills/mysql.png',
                        alt: 'Skills',
                        width: 9,
                        height: 9
                    },
                    {
                        src: '/images/skills/pg.png',
                        alt: 'Skills',
                        width: 9,
                        height: 9
                    },
                    {
                        src: '/images/skills/mongo.png',
                        alt: 'Skills',
                        width: 9,
                        height: 9
                    },
          
                ]
            },
            {
                title: 'Tools',
                description: <>Git , Docker , Redis , Postman , RabbitMQ </>,
                images: [
                    {
                        src: '/images/skills/git.png',
                        alt: 'Skills',
                        width: 9,
                        height: 9
                    },
                    {
                        src: '/images/skills/docker.png',
                        alt: 'Skills',
                        width: 9,
                        height: 9
                    },
                    {
                        src: '/images/skills/redis.png',
                        alt: 'Skills',
                        width: 10,
                        height: 9
                    },
                    {
                        src: '/images/skills/postman.png',
                        alt: 'Skills',
                        width: 10,
                        height: 9
                    },
                    {
                        src: '/images/skills/rabbitmq.png',
                        alt: 'Skills',
                        width: 9,
                        height: 9
                    },
                ]
            },
           
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        // { 
        //     src: '/images/gallery/img-12.jpg', 
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // { 
        //     src: '/images/gallery/img-13.jpg', 
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // { 
        //     src: '/images/gallery/img-14.jpg', 
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };