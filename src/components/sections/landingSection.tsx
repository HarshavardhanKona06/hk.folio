'use client'

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function LandingSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);

    const roles = [
        'Software Engineer',
        'Full Stack Engineer',
        'Full Stack Developer',
        'Machine Learning Engineer',
        'Computer Vision Engineer',
        'Computer Vision Researcher',
        'Software Developer',
        'Web Developer',
    ];

    useEffect(() => {
        setIsVisible(true);

        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <section id='home' className='w-full min-h-screen relative isolate overflow-hidden'>
            {/* Noise Filter Container */}
            <div className='absolute inset-0 w-full h-full overflow-hidden'>
                <svg className='absolute inset-0 h-full w-full'>
                    <defs>
                        <filter id='noise'>
                            <feTurbulence
                                type='fractalNoise'
                                baseFrequency='0.65'
                                numOctaves='3'
                                stitchTiles='stitch'/>
                            <feColorMatrix type='saturate' values='0'/>
                        </filter>
                    </defs>
                    <rect width='100%' height='100%' filter='url(#noise)' opacity='0.5'/>
                </svg>
            </div>

            {/* Background Gradient */}
            <div className='absolute inset-0 bg-gradient-to-bl from-transparent via-bg-primary-dark to-bg-primary-dark'/>

            {/* Content */}
            <div className='relative min-h-screen flex items-center justify-center font-firaSans'>
                <div className='w-full max-w-[85rem] mx-auto px-6 sm:px-8 md:px-10'>
                    <div className={`transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        <div className='space-y-3 text-left'>
                            {/* Greeting */}
                            <div className='text-xl sm:text-2xl text-text-tertiary-dark'>
                                Hey there 👋
                            </div>

                            {/* Name */}
                            <h1 className='text-[32px] sm:text-4xl lg:text-5xl font-normal'>
                                <span className='text-text-tertiary-dark'>I&#39;m {' '}</span>
                                <span className='ml-2 text-text-primary-dark tracking-tight font-poppins'>
                                    Sai Harshavardhan Reddy Kona
                                </span>
                            </h1>

                            {/* Role */}
                            <div className='h-16 relative'>
                                <p className='text-3xl sm:text-3xl md:text-4xl font-medium absolute transition-all duration-500 ease-in-out'>
                                    <span className='text-text-secondary-dark'>A {' '}</span>
                                    <span className='text-teal-hover-dark ml-2 font-firaCode tracking-widest'>
                                        {roles[roleIndex]}
                                    </span>
                                </p>
                            </div>

                            {/* Description */}
                            <p className='text-xl sm:text-xl md:text-2xl text-text-secondary-dark font-light leading-relaxed max-w-3xl text-justify'>
                                A passionate builder who transforms ideas into scalable solutions and occasionally gets lost in
                                optimization rabbit holes. But hey, that&#39;s just part of the engineering adventure! 🚀
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className='absolute right-0 flex flex-col items-center space-y-4 pt-6'>
                            <div className='w-[3px] h-16 bg-border-dark mb-3'></div>
                            <a
                                href='https://linkedin.com/in/harshavardhankona'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-text-tertiary-dark hover:text-[#0B65C2] transform transition-all duration-300 hover:-translate-y-1'
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} className='w-6 h-6'/>
                            </a>
                            <a
                                href='https://github.com/kshvr16'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-text-tertiary-dark hover:text-[#FFFFFF] transform transition-all duration-300 hover:-translate-y-1'
                            >
                                <FontAwesomeIcon icon={faGithub} className='w-6 h-6'/>
                            </a>
                            <a
                                href='https://discord.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-text-tertiary-dark hover:text-[#5865F2] transform transition-all duration-300 hover:-translate-y-1'
                            >
                                <FontAwesomeIcon icon={faDiscord} className='w-6 h-6'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
