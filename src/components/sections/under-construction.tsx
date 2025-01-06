'use client';

import React, { useEffect, useRef } from 'react';
import type { AnimationItem } from 'lottie-web';
import animationData from '@/lib/under-construction.json';

interface UnderConstructionProps {
    width?: string | number;
    height?: string | number;
    className?: string;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({
                                                                 width = '500px',
                                                                 height = '500px',
                                                                 className = ''
                                                             }) => {
    const animationContainer = useRef<HTMLDivElement>(null);
    const animationInstance = useRef<AnimationItem | null>(null);

    useEffect(() => {
        const loadLottie = async () => {
            if (!animationContainer.current) return;

            try {
                // Import lottie properly with correct type
                const lottieModule = await import('lottie-web');
                const lottie = lottieModule.default;

                animationInstance.current = lottie.loadAnimation({
                    container: animationContainer.current,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    animationData: animationData,
                });
            } catch (error) {
                console.error('Error loading Lottie animation:', error);
            }
        };

        loadLottie();

        return () => {
            if (animationInstance.current) {
                animationInstance.current.destroy();
            }
        };
    }, []);

    return (
        <section id={'under-construction'}
                 className='min-h-screen pt-16 flex flex-col items-center justify-center gap-2 bg-bg-primary-dark'>
            <div
                ref={animationContainer}
                style={{width, height}}
                className={`flex items-center justify-center ${className}`}
            />
            <h2 className='text-5xl font-crimsonPro tracking-wider font-bold text-text-secondary-dark'>
                Work In Progress
            </h2>
            <p className='text-lg text-text-tertiary-dark font-firaSans text-center max-w-md tracking-wider'>
                I&#39;m working on something amazing. <br/> Please check back soon !
            </p>
        </section>
    );
};

export default UnderConstruction;
