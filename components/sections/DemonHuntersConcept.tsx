import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

import posterImage from '../../src/assets/images/demon_hunters_poster.jpg';

export const DemonHuntersConcept: React.FC = () => {
    return (
        <SectionWrapper id="demon-hunters-concept" className="bg-black relative overflow-hidden h-screen flex items-center justify-center" pageNumber={14}>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={posterImage} alt="Demon Hunters Background" className="w-full h-full object-cover opacity-60 blur-sm scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left: Poster Image (Clean) */}
                <FadeIn className="w-full md:w-1/2 flex justify-center">
                    <div className="relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(119,48,208,0.5)] border-2 border-[#7730D0]/30 group">
                        <img src={posterImage} alt="Everland: The Last Defense Line of Demon Hunters" className="w-full max-w-[500px] h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    </div>
                </FadeIn>

                {/* Right: Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
                    <FadeIn delay={200}>
                        <span className="text-[#DAA520] font-bold tracking-[0.2em] text-xl uppercase mb-4 block drop-shadow-md">
                            Project Concept
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                            Everland:<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7730D0] to-[#DAA520]">
                                The Last Defense Line
                            </span><br />
                            of Demon Hunters
                        </h2>
                        <div className="w-20 h-1 bg-[#7730D0] mb-8 mx-auto md:mx-0"></div>

                        <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed break-keep">
                            상상을 초월하는 이계의 문 <span className="text-[#DAA520] font-bold">'혼문'</span>이 열렸다.<br className="hidden md:block" />
                            에버랜드의 평화를 지키기 위한 최후의 방어선,<br />
                            당신이 바로 <span className="text-[#7730D0] font-extrabold">데몬 헌터</span>입니다.
                        </p>
                    </FadeIn>

                    <FadeIn delay={400}>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center">
                                <h3 className="text-white font-bold text-lg mb-1">Genre</h3>
                                <p className="text-gray-300">Immersive RPG</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center">
                                <h3 className="text-white font-bold text-lg mb-1">Theme</h3>
                                <p className="text-gray-300">Dark Fantasy K-Pop</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>

            </div>
        </SectionWrapper>
    );
};
