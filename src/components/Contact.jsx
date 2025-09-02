import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { IoLogoWechat } from "react-icons/io5";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would typically send the data to your backend
      console.log('Form data:', data);

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'yu.wang1@fz-juelich.de',
      href: 'mailto:yu.wang1@fz-juelich.de'
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+86 19157730448',
      href: 'tel:+8619157730448'
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Juelich, Germany',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/Rookie-RC',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yu-wang-b81094333/',
      color: 'hover:text-blue-600'
    },
    {
      icon: IoLogoWechat,
      label: 'Wechat',
      href: '#',
      color: 'hover:text-blue-400'
    }
  ];

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

  return (
    <section id="contact" className="section-padding bg-white/50 dark:bg-gray-900/50">
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
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Got any new idea in your mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects,
                  or just having a friendly conversation about technology and development.
                  Feel free to reach out through any of the channels below.
                </p>

                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center p-4 glass-card group hover:scale-105 transition-transform duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-gray-100">
                          {info.label}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-8">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Follow Me
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 glass-effect rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-card">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Send a Message
                </h3>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg flex items-center"
                  >
                    <HiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                    <span className="text-green-800 dark:text-green-200">
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg flex items-center"
                  >
                    <HiExclamationCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-3" />
                    <span className="text-red-800 dark:text-red-200">
                      Failed to send message. Please try again or contact me directly.
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('name', {
                        required: 'Name is required',
                        minLength: {
                          value: 2,
                          message: 'Name must be at least 2 characters'
                        }
                      })}
                      className="form-input"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="form-error">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="form-error">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      {...register('subject', {
                        required: 'Subject is required',
                        minLength: {
                          value: 5,
                          message: 'Subject must be at least 5 characters'
                        }
                      })}
                      className="form-input"
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="form-error">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      {...register('message', {
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters'
                        }
                      })}
                      className="form-input resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                    {errors.message && (
                      <p className="form-error">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <HiMail className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Additional CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="glass-card max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Whether you have a clear vision or just an idea, don't hesitate to contact me.
                Let's collaborate and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#projects"
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="./assets/wangyu_CV.pdf"
                  download
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
