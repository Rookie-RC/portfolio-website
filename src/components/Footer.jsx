import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    ];

    const contactInfo = [
        { icon: HiMail, text: 'john.doe@example.com' },
        { icon: HiPhone, text: '+1 (555) 123-4567' },
        { icon: HiLocationMarker, text: 'San Francisco, CA' },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                        {/* Brand Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <motion.h3
                                className="text-2xl font-bold gradient-text mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                Yu Wang
                            </motion.h3>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                                Full Stack Developer passionate about creating exceptional digital experiences
                                through clean code, innovative design, and cutting-edge technologies.
                            </p>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 transition-all duration-300"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link, index) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 block"
                                        >
                                            {link.name}
                                        </button>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
                            <ul className="space-y-3">
                                {contactInfo.map((info, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <info.icon className="w-4 h-4 mr-3 text-primary-500" />
                                        <span className="text-sm">{info.text}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <motion.button
                                onClick={() => scrollToSection('#contact')}
                                className="mt-6 btn-primary text-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                viewport={{ once: true }}
                            >
                                Start a Project
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <motion.div
                    className="py-8 border-t border-gray-800 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center">
                        <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
                        <p className="text-gray-400 mb-6 max-w-md mx-auto">
                            Subscribe to get notified about new projects, blog posts, and tech insights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 bg-gray-800 dark:bg-gray-900 border border-gray-700 rounded-lg focus:border-primary-500 focus:outline-none transition-colors duration-300 text-white placeholder-gray-500"
                            />
                            <motion.button
                                className="btn-primary whitespace-nowrap"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    className="py-6 border-t border-gray-800 dark:border-gray-700"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center text-gray-400 text-sm">
                            <span>© {currentYear} Yu Wang. Made with</span>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                                className="mx-1"
                            >
                                <FaHeart className="w-4 h-4 text-red-500" />
                            </motion.div>
                            <span>and lots of ☕</span>
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <motion.button
                                onClick={scrollToTop}
                                className="hover:text-white transition-colors duration-300"
                                whileHover={{ y: -2 }}
                            >
                                Back to Top ↑
                            </motion.button>
                            <span>•</span>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <span>•</span>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Back to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center z-50 opacity-0"
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
            >
                <span className="text-xl">↑</span>
            </motion.button>
        </footer>
    );
};

export default Footer;
