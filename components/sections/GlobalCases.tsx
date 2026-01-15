import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

// Images
import disneyImg from '../../src/assets/images/global_case_disney.png';
import nintendoImg from '../../src/assets/images/global_case_nintendo.png';
import poplandImg from '../../src/assets/images/global_case_popland.png';

export const GlobalCases: React.FC = () => {
    return (
        <SectionWrapper id="global-cases" className="bg-gray-50 relative overflow-hidden" pageNumber={8}>
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#7730D0] font-bold tracking-wider text-xl uppercase mb-3 block">Market Insight</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight break-keep mb-6">
                            글로벌 사례 및 사업 필요성
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Case 1: Disney Star Wars */}
                    <FadeIn delay={100} className="h-full flex flex-col pt-6">
                        <div className="flex justify-center mb-6">
                            <h3 className="text-2xl font-black text-center text-gray-900 tracking-tight bg-white border-2 border-gray-900 px-8 py-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                                Disney Star Wars
                            </h3>
                        </div>
                        <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 h-full flex flex-col hover:shadow-xl transition-shadow duration-300 group">
                            <div className="h-[450px] overflow-hidden relative">
                                <img
                                    src={disneyImg}
                                    alt="Disney Star Wars"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-extrabold text-gray-900 leading-tight">
                                        스마트폰을<br />'데이터패드'로 변환
                                    </h3>
                                </div>

                                <div className="mt-auto pt-6 border-t border-dashed border-gray-200">
                                    <span className="text-[#7730D0] font-bold text-sm tracking-wider uppercase mb-2 block">Insight</span>
                                    <p className="text-gray-700 font-bold text-lg leading-relaxed">
                                        에버랜드 앱을<br />
                                        <span className="text-[#7730D0] font-extrabold">'K-IP 데이터패드'</span>로 설계
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Case 2: Universal Nintendo */}
                    <FadeIn delay={200} className="h-full flex flex-col pt-6">
                        <div className="flex justify-center mb-6">
                            <h3 className="text-2xl font-black text-center text-gray-900 tracking-tight bg-white border-2 border-gray-900 px-8 py-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase transform rotate-2 hover:rotate-0 transition-transform duration-300">
                                Universal Nintendo
                            </h3>
                        </div>
                        <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 h-full flex flex-col hover:shadow-xl transition-shadow duration-300 group">
                            <div className="h-[450px] overflow-hidden relative">
                                <img
                                    src={nintendoImg}
                                    alt="Universal Nintendo"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-extrabold text-gray-900 leading-tight">
                                        밴드 연동형<br />게임판 구현
                                    </h3>
                                </div>

                                <div className="mt-auto pt-6 border-t border-dashed border-gray-200">
                                    <span className="text-[#7730D0] font-bold text-sm tracking-wider uppercase mb-2 block">Insight</span>
                                    <p className="text-gray-700 font-bold text-lg leading-relaxed">
                                        특정 존(포레스트캠프) 기반<br />
                                        <span className="text-[#7730D0] font-extrabold">'집단 레이드/피날레 쇼'</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Case 3: POP LAND */}
                    <FadeIn delay={300} className="h-full flex flex-col pt-6">
                        <div className="flex justify-center mb-6">
                            <h3 className="text-2xl font-black text-center text-gray-900 tracking-tight bg-white border-2 border-gray-900 px-8 py-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                                POP LAND
                            </h3>
                        </div>
                        <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 h-full flex flex-col hover:shadow-xl transition-shadow duration-300 group">
                            <div className="h-[450px] overflow-hidden relative">
                                <img
                                    src={poplandImg}
                                    alt="POP LAND"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-extrabold text-gray-900 leading-tight">
                                        AR 탐험 리워드
                                    </h3>
                                </div>

                                <div className="mt-auto pt-6 border-t border-dashed border-gray-200">
                                    <span className="text-[#7730D0] font-bold text-sm tracking-wider uppercase mb-2 block">Insight</span>
                                    <p className="text-gray-700 font-bold text-lg leading-relaxed">
                                        K-IP 미션형 경험으로<br />
                                        객단가/체류시간 극대화
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                </div>

            </div>
        </SectionWrapper>
    );
};
