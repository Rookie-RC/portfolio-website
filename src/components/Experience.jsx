import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiCalendar, HiLocationMarker, HiBriefcase } from 'react-icons/hi';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Managing a team of 5 developers and architecting solutions for enterprise clients.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led migration to microservices architecture',
        'Mentored junior developers and established coding standards',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
      current: true
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'InnovateLab',
      location: 'New York, NY',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces.',
      achievements: [
        'Built 15+ production applications serving 10k+ users',
        'Reduced bug reports by 50% through comprehensive testing',
        'Implemented responsive designs for mobile-first approach',
        'Optimized database queries improving load times by 30%'
      ],
      technologies: ['React', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'],
      current: false
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Focused on creating responsive and interactive user interfaces. Worked closely with UX designers to implement modern design systems.',
      achievements: [
        'Converted designs to pixel-perfect React components',
        'Implemented state management using Redux',
        'Improved website accessibility scoring to 95+',
        'Created reusable component library used across projects'
      ],
      technologies: ['React', 'Redux', 'Sass', 'Webpack', 'Jest'],
      current: false
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'WebSolutions Inc',
      location: 'Remote',
      period: '2018 - 2019',
      type: 'Full-time',
      description: 'Started my professional journey learning modern web development practices. Contributed to various client projects and internal tools.',
      achievements: [
        'Completed 20+ client websites with 100% satisfaction',
        'Learned and applied modern JavaScript frameworks',
        'Participated in code reviews and agile development',
        'Contributed to open-source projects'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL'],
      current: false
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      location: 'California, USA',
      period: '2014 - 2018',
      description: 'Graduated with honors. Focused on software engineering, algorithms, and data structures.',
      achievements: [
        'Graduated Magna Cum Laude (GPA: 3.8/4.0)',
        'President of Computer Science Club',
        'Winner of Annual Hackathon 2017',
        'Teaching Assistant for Web Development Course'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="section-padding">
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
              Experience & Education
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and educational background
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Experience Timeline */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center mb-8">
                <HiBriefcase className="w-6 h-6 text-primary-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Professional Experience
                </h3>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-600"></div>

                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    className="timeline-item relative"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 ${
                      exp.current ? 'bg-primary-500 animate-pulse' : 'bg-gray-400'
                    }`}></div>

                    <motion.div
                      className="glass-card ml-8 group hover:scale-[1.02] transition-transform duration-300"
                      whileHover={{ y: -5 }}
                    >
                      {/* Current Badge */}
                      {exp.current && (
                        <motion.div
                          className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-medium rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.2 }}
                        >
                          Current
                        </motion.div>
                      )}

                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                            {exp.title}
                          </h4>
                          <div className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
                            {exp.company}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center">
                              <HiCalendar className="w-4 h-4 mr-1" />
                              {exp.period}
                            </div>
                            <div className="flex items-center">
                              <HiLocationMarker className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ delay: 0.8 + index * 0.2 + achIndex * 0.1 }}
                            >
                              <span className="text-primary-500 mr-2">•</span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ delay: 1.0 + index * 0.2 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Education */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-6 h-6 text-purple-500 mr-3">🎓</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Education
                  </h3>
                </div>

                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    className="glass-card group hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <div className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                      {edu.institution}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center">
                      <HiCalendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {edu.description}
                    </p>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-6 h-6 text-green-500 mr-3">🏆</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Certifications
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    'AWS Certified Solutions Architect',
                    'Google Cloud Professional Developer',
                    'React Developer Certification',
                    'MongoDB Certified Developer'
                  ].map((cert, index) => (
                    <motion.div
                      key={cert}
                      className="glass-effect p-4 rounded-lg hover:bg-white/20 dark:hover:bg-black/20 transition-colors duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {cert}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills Summary */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-6 h-6 text-blue-500 mr-3">💪</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Core Strengths
                  </h3>
                </div>

                <div className="glass-card">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    {[
                      { label: 'Leadership', icon: '👑' },
                      { label: 'Problem Solving', icon: '🧠' },
                      { label: 'Team Player', icon: '🤝' },
                      { label: 'Innovation', icon: '💡' }
                    ].map((strength, index) => (
                      <motion.div
                        key={strength.label}
                        className="p-3"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 1.0 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-2xl mb-2">{strength.icon}</div>
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {strength.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
