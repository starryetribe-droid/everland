import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const GlobalCases: React.FC = () => {
    return (
        <SectionWrapper id="global-cases" className="bg-gray-50 relative overflow-hidden" pageNumber={8}>
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#7730D0] font-bold tracking-wider text-xl uppercase mb-3 block">Chapter 2-2</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight break-keep mb-6">
                            글로벌 사례 및 사업 필요성
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Case 1: Disney Star Wars */}
                    <FadeIn delay={100} className="h-full">
                        <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <div className="mb-8">
                                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-xl font-extrabold tracking-wide mb-4">Disney Star Wars</span>
                                <h3 className="text-3xl font-extrabold text-gray-900 leading-tight">
                                    스마트폰을<br />'데이터패드'로 변환
                                </h3>
                            </div>

                            <div className="mt-auto pt-8 border-t border-dashed border-gray-200">
                                <span className="text-[#7730D0] font-bold text-lg tracking-wider uppercase mb-3 block">Insight</span>
                                <p className="text-gray-700 font-bold text-xl leading-relaxed">
                                    에버랜드 앱을<br />
                                    <span className="text-[#7730D0] font-extrabold">'K-IP 데이터패드'</span>로 설계
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Case 2: Universal Nintendo */}
                    <FadeIn delay={200} className="h-full">
                        <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <div className="mb-8">
                                <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-xl font-extrabold tracking-wide mb-4">Universal Nintendo</span>
                                <h3 className="text-3xl font-extrabold text-gray-900 leading-tight">
                                    밴드 연동형<br />게임판 구현
                                </h3>
                            </div>

                            <div className="mt-auto pt-8 border-t border-dashed border-gray-200">
                                <span className="text-[#7730D0] font-bold text-lg tracking-wider uppercase mb-3 block">Insight</span>
                                <p className="text-gray-700 font-bold text-xl leading-relaxed">
                                    포레스트캠프 등 특정 존 기반<br />
                                    <span className="text-[#7730D0] font-extrabold">'집단 레이드/피날레 쇼'</span> 설계
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Case 3: POP LAND */}
                    <FadeIn delay={300} className="h-full">
                        <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <div className="mb-8">
                                <span className="inline-block px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-xl font-extrabold tracking-wide mb-4">POP LAND</span>
                                <h3 className="text-3xl font-extrabold text-gray-900 leading-tight">
                                    AR 탐험 리워드
                                </h3>
                            </div>

                            <div className="mt-auto pt-8 border-t border-dashed border-gray-200">
                                <span className="text-[#7730D0] font-bold text-lg tracking-wider uppercase mb-3 block">Insight</span>
                                <p className="text-gray-700 font-bold text-xl leading-relaxed">
                                    K-IP 미션형 경험으로<br />
                                    객단가/체류시간 극대화, <span className="text-[#7730D0] font-extrabold">야간 AR</span>
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                </div>

            </div>
        </SectionWrapper>
    );
};
