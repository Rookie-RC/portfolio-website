import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFigma,
  SiFirebase
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95, icon: SiReact, color: '#61DAFB' },
        { name: 'JavaScript', level: 90, icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', level: 85, icon: SiTypescript, color: '#3178C6' },
        { name: 'Tailwind CSS', level: 92, icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'HTML/CSS', level: 95, icon: '🌐', color: '#E34F26' },
        { name: 'Responsive Design', level: 88, icon: '📱', color: '#9333EA' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 88, icon: SiNodedotjs, color: '#339933' },
        { name: 'Python', level: 82, icon: SiPython, color: '#3776AB' },
        { name: 'MongoDB', level: 85, icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', level: 80, icon: SiPostgresql, color: '#336791' },
        { name: 'Firebase', level: 83, icon: SiFirebase, color: '#FFCA28' },
        { name: 'REST APIs', level: 90, icon: '🔗', color: '#FF6B6B' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 90, icon: SiGit, color: '#F05032' },
        { name: 'Docker', level: 75, icon: SiDocker, color: '#2496ED' },
        { name: 'Figma', level: 85, icon: SiFigma, color: '#F24E1E' },
        { name: 'VS Code', level: 95, icon: '💻', color: '#007ACC' },
        { name: 'Webpack', level: 78, icon: '📦', color: '#8DD6F9' },
        { name: 'Testing', level: 80, icon: '🧪', color: '#C21325' }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <section id="skills" className="section-padding">
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
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="glass-effect rounded-xl p-2 inline-flex">
              {Object.entries(skillCategories).map(([key, category]) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === key
                      ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass-card group hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 glass-effect"
                    style={{ color: skill.color }}
                  >
                    {typeof skill.icon === 'string' ? (
                      <span className="text-2xl">{skill.icon}</span>
                    ) : (
                      <skill.icon className="w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                      {skill.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Proficiency
                      </span>
                      <span className="text-sm font-medium text-primary-500">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    variants={progressVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={skill.level}
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}20, ${skill.color})`
                    }}
                  />
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}10, transparent)`
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="glass-card max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Continuous Learning
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Always exploring new technologies and expanding my skill set
                  </p>
                </motion.div>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Best Practices
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Following industry standards and modern development practices
                  </p>
                </motion.div>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Collaboration
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Effective teamwork and communication in agile environments
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
