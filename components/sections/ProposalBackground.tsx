import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const ProposalBackground: React.FC = () => {
    return (
        <SectionWrapper id="proposal-background" className="bg-white relative overflow-hidden" pageNumber={3}>
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#7730D0] font-bold tracking-wider text-[15px] uppercase mb-2 block">제안 배경</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight">
                            글로벌 K-콘텐츠의 물결
                        </h2>
                    </FadeIn>
                </div>

                {/* Data Points */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Item 1 */}
                    <FadeIn delay={100} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl mb-6">
                            <i className="fa-solid fa-earth-asia"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">글로벌 팬덤 데이터</h3>
                        <p className="text-gray-600 font-medium leading-relaxed">
                            전 세계 K-컬처 팬 <span className="text-blue-600 font-bold">2억 2,500만 명</span> 돌파,<br />
                            연간 수출 <span className="text-blue-600 font-bold">130억 달러</span> 성장.
                        </p>
                    </FadeIn>

                    {/* Item 2 */}
                    <FadeIn delay={200} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl mb-6">
                            <i className="fa-solid fa-plane-arrival"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">관광 시장 점유율</h3>
                        <p className="text-gray-600 font-medium leading-relaxed">
                            연간 방한객 1,870만 명(2025년)<br />
                            에버랜드 국내외 방문객<span className="text-purple-600 font-bold">연 600만 명</span> 방문.
                        </p>
                    </FadeIn>

                    {/* Item 3 */}
                    <FadeIn delay={300} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-xl mb-6">
                            <i className="fa-solid fa-arrow-trend-up"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">기술 트렌드</h3>
                        <p className="text-gray-600 font-medium leading-relaxed">
                            2033년 테마파크 시장 <span className="text-pink-600 font-bold">1,106억 달러</span> 성장 전망,<br />
                            AR·모바일 기술 표준화.
                        </p>
                    </FadeIn>
                </div>

                {/* Insight */}
                <FadeIn delay={500}>
                    <div className="bg-gradient-to-r from-[#7730D0] to-[#D476AB] rounded-3xl p-10 text-center text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold tracking-wider uppercase mb-4 border border-white/30">Insight</span>
                            <h3 className="text-2xl md:text-3xl font-extrabold leading-normal">
                                "물리적 한계를 넘는 <span className="text-[#FFD700]">디지털 레이어의 확장성</span>이 필요합니다."
                            </h3>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </SectionWrapper>
    );
};
