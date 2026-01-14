import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const MarketEnvironment: React.FC = () => {
    return (
        <SectionWrapper id="market-environment" className="bg-white relative overflow-hidden" pageNumber={7}>
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#7730D0] font-bold tracking-wider text-[15px] uppercase mb-2 block">시장 환경</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight">
                            시장 환경: 압도적인 K-IP의 위상
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: 2025 Survey Visualization */}
                    <FadeIn delay={100} className="relative">
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-[2rem] p-8 border border-gray-100 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7730D0]/5 rounded-full blur-2xl"></div>

                            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <span className="w-10 h-10 bg-[#7730D0] rounded-lg flex items-center justify-center text-white">
                                    <i className="fa-solid fa-chart-pie"></i>
                                </span>
                                2025 해외 한류 실태조사
                            </h3>

                            <div className="flex flex-col gap-6">
                                {/* Stat 1 */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <span className="text-gray-600 font-bold">K-Pop 체험 의향</span>
                                        <span className="text-4xl font-extrabold text-[#7730D0]">17.8<span className="text-xl">%</span></span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                        <div className="bg-[#7730D0] h-full rounded-full w-[17.8%]"></div>
                                    </div>
                                    <p className="text-xs text-gray-500 text-right">전세계 응답자 중 최상위 선호도</p>
                                </div>

                                {/* Stat 2 */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <span className="text-gray-600 font-bold">한국 관광 추천 의향</span>
                                        <span className="text-4xl font-extrabold text-[#D476AB]">68.2<span className="text-xl">%</span></span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                        <div className="bg-[#D476AB] h-full rounded-full w-[68.2%]"></div>
                                    </div>
                                    <p className="text-xs text-gray-500 text-right">압도적인 긍정적 이미지</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right: Scalability & Expansion */}
                    <FadeIn delay={300}>
                        <div className="relative pl-6 lg:pl-12 border-l-4 border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                K-IP의 무한한 확장성
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                K-Pop을 기점으로 드라마, 음식, 뷰티로 이어지는 강력한 낙수 효과는<br />
                                <span className="text-[#7730D0] font-bold">단순한 문화 소비를 넘어 라이프스타일 전반</span>으로 확장되고 있습니다.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-lg">
                                        <i className="fa-solid fa-music"></i>
                                    </div>
                                    <span className="font-bold text-gray-700">K-Pop</span>
                                </div>
                                <div className="flex items-center justify-center text-gray-300">
                                    <i className="fa-solid fa-arrow-right text-xl"></i>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-lg">
                                        <i className="fa-solid fa-film"></i>
                                    </div>
                                    <span className="font-bold text-gray-700">K-Drama</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center text-lg">
                                        <i className="fa-solid fa-utensils"></i>
                                    </div>
                                    <span className="font-bold text-gray-700">K-Food</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

            </div>
        </SectionWrapper>
    );
};
