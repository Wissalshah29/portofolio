import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import ToolNodejs from "/assets/tools/nodejs.png";
import ToolReact from "/assets/tools/reactjs.png";
import ToolJs from "/assets/tools/js.png";
import ToolTailwind from "/assets/tools/tailwind.png";
import ToolHtml from "/assets/tools/html.png";
import ToolCss from "/assets/tools/css.png";
import ToolMysql from "/assets/tools/mysql.png";
import ToolGithub from "/assets/tools/github.png";
import ToolVscode from "/assets/tools/vscode.png";
import ToolFirebase from "/assets/tools/firebase.png";
import ToolClaudeAi from "/assets/tools/ai.png";
import ToolVite from "/assets/tools/vite.png";
import ToolFigma from "/assets/tools/figma.png";
import ToolNextjs from "/assets/tools/nextjs.png";
import ToolPython from "/assets/tools/python.svg";
import ToolPostgresql from "/assets/tools/postgresql.svg";
import ToolGit from "/assets/tools/git.svg";
import ToolSupabase from "/assets/tools/supabase.svg";
import ToolDocker from "/assets/tools/docker.svg";
import ToolPostman from "/assets/tools/postman.svg";
import ToolOpenai from "/assets/tools/openai.svg";
import ToolN8n from "/assets/tools/n8n.svg";
import ToolVercel from "/assets/tools/vercel.svg";
import ToolAws from "/assets/tools/aws.svg";

export const listTools = [
  {
    id: 1,
    gambar: ToolNodejs,
    nama: "Node.js",
    ket: "Javascript Runtime",
    dad: "100",
  },
  {
    id: 2,
    gambar: ToolReact,
    nama: "React",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: ToolJs,
    nama: "JavaScript ES6+",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: ToolTailwind,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: ToolHtml,
    nama: "HTML5",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: ToolCss,
    nama: "CSS3",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: ToolMysql,
    nama: "MySQL",
    ket: "Database",
    dad: "700",
  },
  {
    id: 8,
    gambar: ToolGithub,
    nama: "GitHub",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: ToolVscode,
    nama: "VS Code",
    ket: "Code Editor",
    dad: "900",
  },
  {
    id: 10,
    gambar: ToolFirebase,
    nama: "Firebase",
    ket: "Backend Platform",
    dad: "1000",
  },
  {
    id: 11,
    gambar: ToolClaudeAi,
    nama: "Claude AI",
    ket: "AI Platform",
    dad: "1100",
  },
  {
    id: 12,
    gambar: ToolVite,
    nama: "Vite",
    ket: "Build Tool",
    dad: "1200",
  },
  {
    id: 13,
    gambar: ToolFigma,
    nama: "Figma",
    ket: "Design App",
    dad: "1300",
  },
  {
    id: 14,
    gambar: ToolNextjs,
    nama: "Next.js",
    ket: "Framework",
    dad: "1400",
  },
  {
    id: 15,
    gambar: ToolPython,
    nama: "Python",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: ToolPostgresql,
    nama: "PostgreSQL",
    ket: "Database",
    dad: "1600",
  },
  {
    id: 17,
    gambar: ToolGit,
    nama: "Git",
    ket: "Version Control",
    dad: "1700",
  },
  {
    id: 18,
    gambar: ToolSupabase,
    nama: "Supabase",
    ket: "Backend Platform",
    dad: "1800",
  },
  {
    id: 19,
    gambar: ToolDocker,
    nama: "Docker",
    ket: "Containerization",
    dad: "1900",
  },
  {
    id: 20,
    gambar: ToolPostman,
    nama: "Postman",
    ket: "API Testing",
    dad: "2000",
  },
  {
    id: 21,
    gambar: ToolOpenai,
    nama: "OpenAI API",
    ket: "AI Platform",
    dad: "2100",
  },
  {
    id: 22,
    gambar: ToolN8n,
    nama: "n8n",
    ket: "Automation",
    dad: "2200",
  },
  {
    id: 23,
    gambar: ToolVercel,
    nama: "Vercel",
    ket: "Deployment",
    dad: "2300",
  },
  {
    id: 24,
    gambar: ToolAws,
    nama: "AWS",
    ket: "Cloud Platform",
    dad: "2400",
  },
];

import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "AIS Detection App",
    subtitle: "A mobile application powered by Artificial Intelligence...",
    fullDescription:"A mobile application powered by Artificial Intelligence and Machine Learning, developed to assist in the early detection of Adolescent Idiopathic Scoliosis (AIS). By analyzing patient data and patterns, the app provides predictions that can help doctors and patients take preventive measures. This project demonstrates the role of AI in modern healthcare by improving accuracy, accessibility, and efficiency in medical diagnosis.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/wissalasad29",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "IoT Air Quality Monitoring",
    subtitle: "A smart IoT system designed to measure and analyze air quality...",
    fullDescription:"A smart IoT system designed to measure and analyze air quality using sensors connected to a mobile application. The app provides real-time updates on air quality levels, empowering users to make healthier lifestyle decisions based on environmental conditions. This project showcases the potential of IoT in addressing environmental and public health issues.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/wissalasad29",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "IoT Heartbeat Monitoring System",
    subtitle: "An IoT-based healthcare project developed to measure and monitor...",
    fullDescription:"An IoT-based healthcare project developed to measure and monitor heart rate in real-time. The system connects sensors to a local web server, enabling users and healthcare providers to track data directly from a web interface. This project highlights the integration of hardware and software to create efficient medical solutions that can be applied in local clinics or personal health monitoring.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/wissalasad29",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Personal Web Portfolio",
    subtitle: "An interactive web portfolio showcasing my professional journey...",
    fullDescription:"An interactive web portfolio showcasing my professional journey, skills, and projects. Designed with a clean yet modern aesthetic, the portfolio highlights my technical expertise in web development, software engineering, and IoT. The site also serves as a central hub for potential employers and collaborators to explore my works, reflecting both my creativity and technical precision.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/wissalasad29",
    dad: "400",
  },
    {
    id: 5,
    image: Proyek5,
    title: "Color Blindness Detection App",
    subtitle: "A cross-platform application available on both mobile and desktop...",
    fullDescription:"A cross-platform application available on both mobile and desktop, created to help identify different types of color blindness through color recognition tests. The app provides users with instant results, making it useful for educational, medical, and self-assessment purposes. Its intuitive design and accessibility aim to support individuals in understanding and managing color vision deficiencies.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/wissalasad29",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Coffee Shop Website",
    subtitle: "A fully functional website designed for a coffee shop, enabling...",
    fullDescription:"A fully functional website designed for a coffee shop, enabling customers to explore the menu, learn about the shop’s story, and place orders online. The project focused on creating an attractive and modern interface, integrating responsive design for mobile and desktop, and ensuring smooth navigation for users. This website not only improved customer experience but also supported the coffee shop’s digital presence and business growth.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/wissalasad29",
    dad: "600",
  },
];

export const listReviews = [
  {
    id: 1,
    name: "James Whitfield",
    role: "CEO, Ucademy UK",
    review: "Wissal delivered a set of Python automation scripts that completely transformed our internal workflows. What used to take our team hours now runs in minutes. Her understanding of process automation is exceptional — she didn’t just write code, she solved the real problem.",
  },
  {
    id: 2,
    name: "Ahmed Al-Rashidi",
    role: "Operations Director, H2ola",
    review: "The H2ola SaaS platform Wissal built for us is rock solid. Nine modules, clean UI, and it just works. She handled everything from database design to the frontend, and the quality is production-grade. We launched on schedule and our team adopted it immediately.",
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "Startup Founder",
    review: "I needed someone who actually understood AI integration, not just someone who could copy-paste API calls. Wissal set up MCP workflows with Claude AI that connected directly to our data pipelines. The results were beyond what I expected — smart, scalable, and maintainable.",
  },
  {
    id: 4,
    name: "Omar Farooq",
    role: "Digital Marketing Manager",
    review: "Wissal built a Facebook lead pipeline that automatically captures, qualifies, and routes leads to our CRM. The whole system runs without any manual input. We went from losing leads to converting them faster than ever. Highly recommend her for any automation project.",
  },
];
