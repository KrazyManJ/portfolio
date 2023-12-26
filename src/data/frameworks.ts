import {TechBadgeProps} from "@/components/TechBadge";

const FRAMEWORKS : TechBadgeProps[] = [

    {
        img: "/icons/tailwind.svg",
        label: "Tailwind CSS",
        link: "https://tailwindcss.com",
        tooltip: "CSS Framework for designing via predefined classes",
        aspectRatio: [54,33]
    },
    {
        img: "/icons/fastapi.svg",
        label: "FastAPI",
        link: "https://fastapi.tiangolo.com",
        tooltip: "Python framework for building APIs"
    },
    {
        img: "/icons/nextjs.svg",
        label: "Next.js",
        link: "https://nextjs.org",
        tooltip: "Web development framework based on React with\nallowance of serverside rendering",
    },
    {
        img: "/icons/qt.svg",
        label: "PyQt",
        link: "https://riverbankcomputing.com/software/pyqt",
        tooltip: "Python library based on QT (C++ version)\nto create GUI applications",
        aspectRatio: [462,339]
    },
    {
        img: "/icons/sass.svg",
        label: "Sass",
        link: "https://sass-lang.com",
        tooltip: "CSS Framework to write CSS in more efficient way",
        aspectRatio: [548,411]
    },
    {
        img: "/icons/react.svg",
        label: "React",
        link: "https://react.dev",
        tooltip: "Javascript library to create web interfaces",
        aspectRatio: [23,20]
    },
    {
        img: "/icons/manim.svg",
        label: "Manim",
        link: "https://www.manim.community",
        tooltip: "Python library for creating mathematical animations",
        aspectRatio: [100,70]
    },
    {
        img: "/icons/framer-motion.svg",
        label: "Framer Motion",
        link: "https://www.framer.com/motion/",
        tooltip: "React library to handle animations on website"
    },
    {
        img: "/icons/mermaidjs.svg",
        label: "Mermaid.js",
        link: "https://mermaid.js.org",
        tooltip: "Javascript library to render charts and diagrams"
    },
    {
        img: "/icons/tkinter.svg",
        label: "Tkinter",
        link: "https://docs.python.org/3/library/tkinter.html",
        tooltip: "Python library to create really basic UI in small time"
    }
];

export default FRAMEWORKS;