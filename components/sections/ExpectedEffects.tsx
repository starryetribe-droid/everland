import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';

export const ExpectedEffects: React.FC = () => {
    const effects = [
        {
            title: "투자 대비 효율 극대화",
            subtitle: "리스크 제로의 혁신",
            desc: "모바일 플랫폼을 활용하여 기존 시설의 리모델링 없이 신규 콘텐츠를 즉각 공급함으로서 개발 비용과 시간, 물리적 리스크를 획기적으로 절감합니다.",
            coreEffect: <><span className="text-blue-600 font-bold">오프라인 공간의 물리적 변화 없이도</span><br />매 시즌 새로운 IP를 통해 방문객에게<br /><span className="text-blue-600 font-bold">'늘 새로운 에버랜드'</span> 선사</>,
            icon: "fa-chart-line",
            color: "text-blue-500"
        },
        {
            title: "수익 구조의 다각화",
            subtitle: "글로벌 팬덤의 경제학",
            desc: "무료 체험과 연동된 '유료 디지털 패스', '플랫폼 전용 IP 굿즈', '광고 및 브랜드 협업'을 결합한 하이브리드 수익 모델을 구축합니다.",
            coreEffect: <>한류의 글로벌 인지도와<br />팬덤의 강력한 결제 의지를 활용하여<br /><span className="text-yellow-600 font-bold">해외 방문객의 객단가(ARPU)를 극대화</span></>,
            icon: "fa-coins",
            color: "text-yellow-500"
        },
        {
            title: "브랜드 가치 향상",
            subtitle: "K-문화의 허브",
            desc: "\"글로벌 K-문화 허브\"라는 새로운 포지셔닝을 통해 에버랜드의 디지털 혁신 이미지를 강화합니다.",
            coreEffect: <>디지털 기반의 몰입 경험은<br /><span className="text-purple-600 font-bold">강력한 자발적 바이럴</span>과<br /><span className="text-purple-600 font-bold">높은 재방문율</span> 확보</>,
            icon: "fa-earth-asia",
            color: "text-purple-500"
        }
    ];

    return (
        <SectionWrapper id="expected-effects" className="bg-white relative overflow-hidden" pageNumber={23}>
            <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10 h-full flex flex-col justify-center">

                {/* Header */}
                <div className="text-center mb-12">
                    <FadeIn>
                        <span className="text-monimo-blue font-bold tracking-wider text-xl uppercase mb-3 block">Expected Effects</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight break-keep mb-6">
                            기대효과
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 font-bold break-keep leading-relaxed">
                            "저비용 고효율의 디지털 전환, 지속 가능한 성장발판 마련"
                        </p>
                    </FadeIn>
                </div>

                {/* 3-Card Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {effects.map((effect, index) => (
                        <FadeIn key={index} delay={index * 150} className="h-full">
                            <GlassCard className="h-full p-6 lg:p-8 flex flex-col hover:border-monimo-blue/30 transition-all duration-300 group relative overflow-hidden">
                                <div className={`w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-5 text-2xl ${effect.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                    <i className={`fa-solid ${effect.icon}`}></i>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">{effect.title}</h3>
                                <span className="text-lg font-bold text-gray-400 mb-4 block uppercase tracking-wide">{effect.subtitle}</span>
                                <p className="text-gray-600 leading-relaxed text-lg break-keep mb-6">
                                    {effect.desc}
                                </p>

                                <div className="mt-auto flex flex-col items-center w-full">
                                    <div className="mb-4 text-gray-300 animate-bounce">
                                        <i className="fa-solid fa-arrow-down text-xl"></i>
                                    </div>
                                    <div className={`w-full p-4 rounded-xl bg-opacity-10 ${effect.color.replace('text-', 'bg-')} border ${effect.color.replace('text-', 'border-')} border-opacity-20`}>
                                        <p className={`text-lg font-bold leading-relaxed break-keep text-gray-800 text-center`}>
                                            {effect.coreEffect}
                                        </p>
                                    </div>
                                </div>
                            </GlassCard>
                        </FadeIn>
                    ))}
                </div>

            </div>
        </SectionWrapper>
    );
};
