import React, { useState, useEffect } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

import seasonKpop from '../../src/assets/images/season_kpop_theme_1768308125603.png';
import seasonKdramaRef from '../../src/assets/images/season_squidgame_final.jpg';

export const SeasonRotation: React.FC = () => {
    // Animation state for the progress bar
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
        }, 30); // 3 seconds loop
        return () => clearInterval(interval);
    }, []);

    return (
        <SectionWrapper id="season-rotation" className="bg-white relative overflow-hidden" pageNumber={12}>
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-12 max-w-4xl">
                    <FadeIn>
                        <span className="text-[#7730D0] font-bold tracking-wider text-xl uppercase mb-3 block">Infinite Scalability</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight break-keep mb-6">
                            Season-Based IP Rotation
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed break-keep">
                            디지털 레이어에 K-IP를 업데이트 하는 것만으로도 공간의 테마를 완전히 변화시킬 수 있습니다.<br />
                            <span className="text-[#7730D0] font-bold">시즌별 IP 로테이션</span>을 통해 물리적 공사 없이 매번 새로운 경험을 제공합니다.
                        </p>
                    </FadeIn>
                </div>

                {/* Comparison Visual Content */}
                <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 mt-8">

                    {/* Season 1: K-Pop Theme */}
                    <FadeIn delay={200} className="w-full md:w-5/12 z-0">
                        <div className="relative group">
                            {/* Frame */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-[2rem] opacity-30 blur-md group-hover:opacity-60 transition duration-500"></div>
                            <div className="relative bg-white p-2 rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden">
                                {/* Decor Lines */}
                                <div className="absolute top-4 left-4 w-24 h-24 border-t-2 border-l-2 border-blue-200 rounded-tl-2xl z-20"></div>
                                <div className="absolute bottom-4 right-4 w-24 h-24 border-b-2 border-r-2 border-blue-200 rounded-br-2xl z-20"></div>

                                <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden relative">
                                    <img src={seasonKpop} alt="Season 1: K-Pop Theme" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-6 left-0 w-full text-center">
                                        <span className="inline-block bg-white/20 backdrop-blur-md border border-white/40 text-white font-bold px-4 py-1 rounded-full mb-2">Season 1</span>
                                        <h3 className="text-2xl font-extrabold text-white text-shadow-lg">K-Pop Theme</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Connection / Progress Bar (Center) */}
                    <div className="w-full md:w-2/12 flex flex-col items-center justify-center z-10 px-4">
                        <FadeIn delay={400} className="w-full">
                            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-[#7730D0]/20 flex flex-col items-center w-full">
                                <span className="text-xs font-bold text-gray-500 mb-2 whitespace-nowrap">DOWNLOADING UPDATE...</span>

                                {/* Progress Bar Container */}
                                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner relative">
                                    {/* Moving Gradient Bar */}
                                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 via-[#7730D0] to-[#ed1b76]"
                                        style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}>
                                    </div>
                                </div>

                                <div className="flex justify-between w-full mt-2 text-[10px] text-gray-400 font-mono">
                                    <span>v.2.1.0</span>
                                    <span>{progress}%</span>
                                </div>

                                {/* Visual Connecting Line (Glow) */}
                                <div className="hidden md:block absolute top-1/2 left-[-100%] right-[-100%] h-[2px] bg-gradient-to-r from-blue-300 via-[#7730D0] to-[#037a76] -z-10 blur-[1px]"></div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Season 2: K-Drama (Squid Game) Theme */}
                    <FadeIn delay={600} className="w-full md:w-5/12 z-0">
                        <div className="relative group">
                            {/* Frame - Squid Game Pink/Green */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#ed1b76] to-[#037a76] rounded-[2rem] opacity-30 blur-md group-hover:opacity-60 transition duration-500"></div>
                            <div className="relative bg-white p-2 rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden">
                                {/* Decor Lines */}
                                <div className="absolute top-4 left-4 w-24 h-24 border-t-2 border-l-2 border-[#ed1b76] rounded-tl-2xl z-20"></div>
                                <div className="absolute bottom-4 right-4 w-24 h-24 border-b-2 border-r-2 border-[#037a76] rounded-br-2xl z-20"></div>

                                <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden relative">
                                    <img src={seasonKdramaRef} alt="Season 2: K-Drama Theme" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-6 left-0 w-full text-center">
                                        <span className="inline-block bg-[#ed1b76]/80 backdrop-blur-md border border-[#ed1b76]/40 text-white font-bold px-4 py-1 rounded-full mb-2">Season 2</span>
                                        <h3 className="text-2xl font-extrabold text-white text-shadow-lg tracking-wider">K-Drama Theme</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                </div>

            </div>
        </SectionWrapper>
    );
};
