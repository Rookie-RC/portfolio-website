import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiExternalLink, HiCode, HiEye } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiTypescript } from 'react-icons/si';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern design, secure payments, and admin dashboard. Features include user authentication, product management, and order tracking.',
      image: '/api/placeholder/600/400',
      technologies: [FaReact, SiTailwindcss, FaNodeJs, SiMongodb],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.',
      image: '/api/placeholder/600/400',
      technologies: [FaReact, SiTypescript, SiFirebase, SiTailwindcss],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics using multiple APIs.',
      image: '/api/placeholder/600/400',
      technologies: [FaReact, SiTailwindcss, FaDatabase],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 4,
      title: 'API Gateway Service',
      description: 'A scalable microservices API gateway with authentication, rate limiting, and monitoring capabilities built with Node.js.',
      image: '/api/placeholder/600/400',
      technologies: [FaNodeJs, FaPython, FaDatabase, SiMongodb],
      category: 'backend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics platform for social media metrics with data visualization, reporting, and automated insights.',
      image: '/api/placeholder/600/400',
      technologies: [FaReact, FaNodeJs, FaPython, SiMongodb],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with animations, dark mode, and optimized performance. Built with React and Tailwind CSS.',
      image: '/api/placeholder/600/400',
      technologies: [FaReact, SiTailwindcss, SiTypescript],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', icon: '🚀' },
    { key: 'fullstack', label: 'Full Stack', icon: '⚡' },
    { key: 'frontend', label: 'Frontend', icon: '🎨' },
    { key: 'backend', label: 'Backend', icon: '⚙️' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-white/50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="glass-effect rounded-xl p-2 inline-flex flex-wrap">
              {categories.map((category) => (
                <motion.button
                  key={category.key}
                  onClick={() => setFilter(category.key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 m-1 ${
                    filter === category.key
                      ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`project-card relative ${project.featured ? 'lg:col-span-2' : ''}`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-primary-500 to-purple-600 text-white text-sm font-medium rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Featured
                  </motion.div>
                )}

                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <div className="project-image bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {project.technologies[0] && React.createElement(project.technologies[0])}
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <HiExternalLink className="w-6 h-6 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <HiCode className="w-6 h-6 text-white" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {project.technologies.map((Tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className="p-2 glass-effect rounded-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Tech className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 flex items-center justify-center gap-2 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <HiEye className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1 flex items-center justify-center gap-2 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <HiCode className="w-4 h-4" />
                      Source
                    </motion.a>
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #9333EA)',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="glass-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Have a Project in Mind?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm always excited to work on new and challenging projects. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <motion.button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
