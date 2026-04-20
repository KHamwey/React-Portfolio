import React, { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "react-bootstrap/Image";
import "./project.css";

import Portfolio from "../../assets/img/projects/portfolio.png";
import WordPressSite from "../../assets/img/projects/Wordpress-site.png";
import LandingPage from "../../assets/img/projects/Landing-Page.png";

import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_WORDPRESS from "../../assets/img/skills/wordpress-icon.svg";

const PROJECTS = [
  {
    id: "portfolio",
    date: "4th, Jan 2025",
    title: "Portfolio Website",
    image: Portfolio,
    imageAlt: "Portfolio Website",
    links: [
      { label: "SEE LIVE", href: "https://www.kylehamwey.com/" },
      { label: "SOURCE CODE", href: "https://github.com/KHamwey/React-Portfolio" },
    ],
    details: (
      <>
        <p className="timeline-v2__copy">
          <strong>Description:</strong> This is a Portfolio site that displays some of the coding skills I currently have.
        </p>
        <hr className="timeline-v2__hr" />
        <strong>Features:</strong>
        <ul className="list-styles pt-1">
          <li>Provide user friendy Enviroment.</li>
          <li>Powered by ReactNative, Js and Css</li>
        </ul>
        <hr className="timeline-v2__hr" />
        <strong>Tech used:</strong>
        <ul className="timeline-v2__tech">
          <li>
            <Image src={L_REACT} alt="React" rounded className="image-style m-1" /> React Native
          </li>
          <li>
            <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1" /> CSS3
          </li>
          <li>
            <Image src={L_JAVASCRIPT} alt="JavaScript" rounded className="image-style1 m-1" /> JavaScript
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "wordpress",
    date: "10th Feb, 2025",
    title: "WordPress Site",
    image: WordPressSite,
    imageAlt: "WordPress Site",
    links: [{ label: "SEE LIVE", href: "https://ktrlcomputers.com/" }],
    details: (
      <>
        <p className="timeline-v2__copy">
          <strong>Description:</strong> This is a WordPress based application geared towards creating dynamic and responsive web pages, but also for ease of use regarding Authentication. It also has a Nice Ebay Plug-In for Inventory Management.
        </p>
        <hr className="timeline-v2__hr" />
        <strong>Features:</strong>
        <ul className="list-styles pt-1">
          <li>Beginner Level Wordpress Project</li>
          <li>Powered by Wordpress</li>
          <li>Provide best quality, low tech, service for a low price rate.</li>
          <li>Provide quality, refurbished products, for a low price rate.</li>
          <li>Responsive Web Design</li>
        </ul>
        <hr className="timeline-v2__hr" />
        <strong>Tech used:</strong>
        <ul className="timeline-v2__tech">
          <li>
            <Image src={L_WORDPRESS} alt="WordPress" rounded className="image-style m-1" /> WordPress
          </li>
          <li>
            <Image src={L_HTML5} alt="HTML5" rounded className="image-style m-1" /> HTML5
          </li>
          <li>
            <Image src={L_CSS3} alt="CSS3" rounded className="image-style1 m-1" /> CSS3
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "landing",
    date: "29th Mar, 2025",
    title: "Landing Page",
    image: LandingPage,
    imageAlt: "Landing Page",
    links: [
      { label: "SEE LIVE", href: "https://khamwey.github.io/" },
      { label: "SOURCE CODE", href: "https://github.com/KHamwey/KHamwey.github.io" },
    ],
    details: (
      <>
        <p className="timeline-v2__copy">
          <strong>Description:</strong> This is a landing page for my portfolio site and up & coming hardware and service business.
        </p>
        <hr className="timeline-v2__hr" />
        <strong>Features:</strong>
        <ul className="list-styles pt-1">
          <li>This is to showcase my skills and projects.</li>
          <li>A brief professional Bio.</li>
          <li>Responsive Web Design using vanilla HTML5 and CSS</li>
        </ul>
        <hr className="timeline-v2__hr" />
        <strong>Tech used:</strong>
        <ul className="timeline-v2__tech">
          <li>
            <Image src={L_HTML5} alt="HTML5" rounded className="image-style m-1" /> HTML5
          </li>
          <li>
            <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1" /> CSS3
          </li>
        </ul>
      </>
    ),
  },
];

function ProjectCard({ project, index, openId, setOpenId }) {
  const open = openId === project.id;
  const uid = useId();
  const panelId = `${uid}-panel`;
  const btnId = `${uid}-btn`;
  const alignEnd = index % 2 === 0;

  return (
    <motion.article
      className={`timeline-v2__row ${alignEnd ? "timeline-v2__row--end" : "timeline-v2__row--start"}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 120, damping: 18, delay: index * 0.06 }}
    >
      <div className="timeline-v2__node" aria-hidden="false">
        <time className="timeline-v2__date" dateTime={project.date}>
          {project.date}
        </time>
        <span className="timeline-v2__dot" />
      </div>

      <div className={`timeline-v2__card ${alignEnd ? "" : "timeline-v2__card--start"}`}>
        <h3 className="timeline-v2__title">{project.title}</h3>
        <div className="timeline-v2__thumb-wrap">
          <img className="timeline-v2__thumb" src={project.image} alt={project.imageAlt} loading="lazy" />
        </div>

        <button
          id={btnId}
          type="button"
          className="timeline-v2__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpenId(open ? null : project.id)}
        >
          {open ? "Hide details" : "Project details"}
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="panel"
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="timeline-v2__panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="timeline-v2__panel-inner">{project.details}</div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="timeline-v2__actions">
          {project.links.map((link) => (
            <a key={link.href} className="timeline-v2__linkbtn" href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

const ProjectTimeline = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <div className="timeline-v2">
        <div className="timeline-v2__track" aria-hidden />
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} openId={openId} setOpenId={setOpenId} />
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;
