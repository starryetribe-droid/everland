import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';

export const Overview: React.FC = () => {
    const parts = [
        {
            part: "Chapter 1.",
            title: "Trend",
            desc: "글로벌 K-콘텐츠의 물결",
            icon: "fa-user-doctor",
            id: "interim-1"
        },
        {
            part: "Chapter 2",
            title: "Objective",
            desc: "K-콘텐츠 경험의 허브",
            icon: "fa-chess-knight",
            id: "interim-2"
        },
        {
            part: "Chapter 3",
            title: "Concept",
            desc: "글로벌 K-콘텐츠 몰입형 플랫폼",
            icon: "fa-building",
            id: "interim-3"
        },
        {
            part: "Chapter 4",
            title: "Strategy",
            desc: "하이퍼 커넥티드 플랫폼",
            icon: "fa-gamepad",
            id: "interim-4"
        }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <SectionWrapper id="overview" className="bg-slate-800" pageNumber={1}>
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 w-full h-full flex flex-col justify-center">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Overview
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {parts.map((item, index) => (
                        <FadeIn key={index} delay={index * 100}>
                            <GlassCard
                                className="px-4 py-8 h-full flex flex-col items-center text-center cursor-pointer hover:border-monimo-blue/30 hover:shadow-lg transition-all group relative overflow-hidden"
                                onClick={() => scrollToSection(item.id)}
                            >
                                {/* Background Decor */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>

                                <div className="mt-2 flex flex-col h-full w-full">
                                    <span className="text-lg font-bold text-gray-400 mb-1 uppercase tracking-wider block order-1">{item.part}</span>

                                    <h3 className="text-3xl font-black text-monimo-black mb-2 transition-colors order-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-lg font-medium text-gray-500 leading-tight whitespace-nowrap order-3 mt-auto tracking-tight">
                                        {item.desc}
                                    </p>
                                </div>
                            </GlassCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
