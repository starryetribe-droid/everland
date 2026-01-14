import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const ProposalObjective: React.FC = () => {
    return (
        <SectionWrapper id="proposal-objective" className="bg-white relative overflow-hidden" pageNumber={5}>
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#7730D0] font-bold tracking-wider text-[15px] uppercase mb-2 block">제안 목적</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight">
                            K-콘텐츠 경험의 허브
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Background & Summary */}
                    <FadeIn delay={100} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-center h-full">
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-xs font-bold rounded-full mb-3">제안 배경</span>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">물리 공간과 K-IP의 융합</h3>
                            <p className="text-gray-600 leading-relaxed">
                                지속 가능 성장 동력을 확보하기 위해 에버랜드의 물리적 인프라와 강력한 K-IP 콘텐츠를 융합해야 합니다.
                            </p>
                        </div>
                        <div className="h-px w-full bg-gray-200 my-6"></div>
                        <div>
                            <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-xs font-bold rounded-full mb-3">제안 요약</span>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">K-IP 통합 Experience Platform</h3>
                            <p className="text-gray-600 leading-relaxed">
                                에버랜드 앱 인프라 위에 새로운 경험 레이어를 구축하여,
                                단순 방문객을 <span className="text-[#7730D0] font-bold">'데몬 헌터스'의 주인공</span>으로 변모시킵니다.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Goal (Highlighted) */}
                    <FadeIn delay={200} className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] md:aspect-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7730D0] to-[#D476AB] z-0"></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 z-0"></div>

                        <div className="relative z-10 flex flex-col items-center justify-center h-full p-10 text-center text-white">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 ring-4 ring-white/10">
                                <i className="fa-solid fa-flag text-2xl"></i>
                            </div>
                            <span className="font-bold text-white/80 uppercase tracking-widest text-sm mb-4">Core Goal</span>
                            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                                Experience <br /> redefined
                            </h3>
                            <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed max-w-sm">
                                에버랜드 브랜드를<br />
                                <span className="opacity-70 line-through decoration-white/50 decoration-2 mr-2">오프라인 놀이공원</span>에서<br />
                                <span className="text-[#FFD700] font-bold text-2xl mt-2 block">'글로벌 디지털 경험의 메카'</span>로 재정의합니다.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionWrapper>
    );
};
