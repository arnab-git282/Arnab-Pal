import { ExperienceItem, Project, Service, Skill } from "./types";

export const PERSONAL_INFO = {
  name: "MR Arnab",
  role: "AI & Full Stack Developer",
  bio: "I use cutting-edge AI tools to transform ideas into responsive websites, innovative applications, and premium UI/UX designs that are modern, functional, and visually engaging.",
  email: "mrarnab861@gmail.com",
  phone: "8167402376",
  location: "Bankura",
  github: "https://github.com/arnab-git282",
  linkedin: "https://www.linkedin.com/in/arnab-pal-5b3bb141b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  twitter: "https://x.com/arnab13377",
};

export const SKILLS: Skill[] = [
  { name: "Html/Css", level: 95, category: "Web Development" },
  { name: "TypeScript", level: 90, category: "Web Development" },
  { name: "Stitch", level: 95, category: "UI/UX" },
  { name: "Node.js", level: 85, category: "Web Development" },
  { name: "Python", level: 90, category: "AI & ML" },
  { name: "TensorFlow / PyTorch", level: 80, category: "AI & ML" },
  { name: "SQL", level: 85, category: "Databases" },
  { name: "AWS / GCP", level: 75, category: "Cloud" },
  { name: "Figma", level: 80, category: "UI/UX" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Student - Computer Science And Technology",
    company: "Sir Rajendra Nath Mukherjee Government Polytechnic",
    date: "2023 - PRESENT",
    description: "Studying Computer Science and Technology.",
    type: "education"
  },
  {
    title: "Secondary Education",
    company: "Mankanali High School",
    date: "2018 - 2023",
    description: "Nothing to yet",
    type: "education"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Nexus AI Platform",
    description: "A comprehensive AI workspace combining LLMs, generative art, and predictive analytics in one beautiful dashboard.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Python", "TensorFlow", "Tailwind"],
    github: "#",
    demo: "#",
    category: "AI"
  },
  {
    title: "Ethereal Finance",
    description: "Premium decentralized finance tracking application with real-time charts and smart contract integration.",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=1000",
    tags: ["Next.js", "Web3", "Framer Motion"],
    github: "#",
    demo: "#",
    category: "Web"
  },
  {
    title: "Aura Health",
    description: "Holistic health tracking mobile application with AI-powered insights and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    tags: ["React Native", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    category: "Mobile"
  },
  {
    title: "Lumina Vision",
    description: "Computer vision application for real-time object detection and spatial analysis.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee57d5?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "OpenCV", "PyTorch"],
    github: "#",
    demo: "#",
    category: "Machine Learning"
  }
];

export const SERVICES: Service[] = [
  {
    title: "AI Integration",
    description: "Seamlessly integrate Large Language Models and custom AI solutions into your existing products to 10x your capabilities.",
    iconName: "Brain"
  },
  {
    title: "Web Development",
    description: "Build incredibly fast, responsive, and accessible web applications with modern frameworks and stunning animations.",
    iconName: "Code2"
  },
  {
    title: "UI/UX Design",
    description: "Craft premium, user-centric interfaces with a focus on conversion, accessibility, and pixel-perfect implementation.",
    iconName: "Palette"
  }
];
