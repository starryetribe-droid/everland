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
            id: "interim-bg"
        },
        {
            part: "Chapter 2",
            title: "Objective",
            desc: "K-콘텐츠 경험의 허브",
            icon: "fa-chess-knight",
            id: "interim-obj"
        },
        {
            part: "Chapter 3",
            title: "Market Insight",
            desc: "시장 현황과 사업 필요성",
            icon: "fa-building",
            id: "interim-mkt"
        },
        {
            part: "Chapter 4",
            title: "Strategy",
            desc: "하이퍼 커넥티드 플랫폼",
            icon: "fa-gamepad",
            id: "interim-global"
        },
        {
            part: "Chapter 5",
            title: "Concept",
            desc: "몰입형 플랫폼",
            icon: "fa-vr-cardboard",
            id: "interim-concept"
        },
        {
            part: "Chapter 6",
            title: "Plan",
            desc: "하루 완성 몰입형 체험",
            icon: "fa-map-location-dot",
            id: "interim-plan"
        },
        {
            part: "Chapter 7",
            title: "Expected Effect",
            desc: "기대효과",
            icon: "fa-chart-line",
            id: "expected-effects"
        },
        {
            part: "Chapter 8",
            title: "Why ETRIBE",
            desc: "파트너십 강점",
            icon: "fa-handshake",
            id: "from-etribe"
        },
        {
            part: "Chapter 9",
            title: "Tech Strategy",
            desc: "기술 구현 전략",
            icon: "fa-microchip",
            id: "pilot-app-architecture"
        },
        {
            part: "Chapter 10",
            title: "Requirements",
            desc: "상세 기술 요구사항",
            icon: "fa-list-check",
            id: "technical-requirements"
        },
        {
            part: "Chapter 11",
            title: "Pilot Budget",
            desc: "파일럿 예산",
            icon: "fa-coins",
            id: "pilot-budget"
        }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <SectionWrapper id="overview" className="bg-slate-800" pageNumber={1} textColor="text-white/50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 w-full h-full flex flex-col justify-center">
                <div className="text-center mb-6">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Index
                        </h2>
                    </FadeIn>
                </div>

                <div className="max-w-4xl mx-auto w-full flex flex-col gap-2">
                    {parts.map((item, index) => (
                        <FadeIn key={index} delay={index * 30} className="w-full">
                            <div
                                className="group flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-monimo-blue/50 transition-all cursor-pointer"
                                onClick={() => scrollToSection(item.id)}
                            >
                                <div className="flex items-center gap-4 md:gap-8 flex-1">
                                    <span className="text-gray-400 font-bold text-xs md:text-sm uppercase tracking-wider w-20 md:w-24 flex-shrink-0 group-hover:text-monimo-blue transition-colors">{item.part}</span>

                                    <h3 className="text-lg md:text-xl font-bold text-white flex-1 group-hover:text-monimo-blue transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="hidden md:block text-gray-500 font-medium text-base text-right w-1/3">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="ml-4 text-gray-600 group-hover:text-monimo-blue transition-colors">
                                    <i className="fa-solid fa-arrow-right text-lg"></i>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
