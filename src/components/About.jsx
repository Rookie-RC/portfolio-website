import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

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

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' },
  ];

  const features = [
    {
      title: 'Modern Technologies',
      description: 'Always learning and implementing the latest technologies and best practices in web development.',
      icon: '🚀'
    },
    {
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code that stands the test of time.',
      icon: '🎯'
    },
    {
      title: 'User-Centered Design',
      description: 'Creating intuitive and engaging user experiences that delight and convert visitors.',
      icon: '❤️'
    },
    {
      title: 'Problem Solving',
      description: 'Analytical thinking and creative solutions to complex technical challenges.',
      icon: '🧠'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white/50 dark:bg-gray-900/50">
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
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate developer with a love for creating digital experiences that make a difference
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Left Content */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Crafting Digital Excellence
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer with over 3 years of experience creating 
                  innovative web applications and digital solutions. My journey in web development 
                  started with a curiosity about how things work behind the scenes, and it has 
                  evolved into a deep passion for building exceptional user experiences.
                </p>
                
                <p>
                  I specialize in modern JavaScript frameworks, particularly React, and have 
                  extensive experience with Node.js, TypeScript, and various database technologies. 
                  I believe in writing clean, maintainable code and following best practices to 
                  ensure scalable and robust applications.
                </p>
                
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community. 
                  I'm always eager to take on new challenges and collaborate on exciting projects.
                </p>
              </div>

              {/* CTA Button */}
              <motion.div className="mt-8">
                <motion.button
                  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Work Together
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Visual Element */}
            <motion.div variants={itemVariants} className="relative">
              <div className="glass-card">
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      className="text-center p-4"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="text-3xl mb-3">{feature.icon}</div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 glass-effect rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 glass-effect rounded-full flex items-center justify-center"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xl">💼</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center glass-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <motion.div
                    className="text-3xl sm:text-4xl font-bold gradient-text mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1.0 + index * 0.1, type: "spring", bounce: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
