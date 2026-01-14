import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const MarketContext: React.FC = () => {
    return (
        <SectionWrapper id="market-context" className="bg-white" pageNumber={4}>
            <div className="max-w-[1280px] mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-monimo-blue font-bold tracking-wider text-lg uppercase mb-3 block">MARKET CONTEXT</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-monimo-black leading-tight">
                            지금, 현대인의 마음 건강
                        </h2>
                        <p className="mt-4 text-gray-500 text-xl">
                            최근 3개년(2023-2025) 기준 나타나는 현대인 마음 건강 현황
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Card 1 */}
                    <FadeIn delay={100}>
                        <div className="bg-white rounded-[2rem] p-10 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 h-full flex flex-col relative overflow-hidden group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-[#7730D0]/5 text-monimo-blue flex items-center justify-center text-xl">
                                    <i className="fa-solid fa-chart-line"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">우울증 환자 급증</h3>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-extrabold text-monimo-blue">110만</span>
                                    <span className="text-xl font-bold text-gray-500">명 돌파</span>
                                </div>
                            </div>

                            <div className="space-y-2 text-gray-600 font-medium leading-relaxed mb-8 flex-1 text-lg">
                                <p>2020년 83만 명 수준에서</p>
                                <p>2024년 110만 명으로 <span className="text-monimo-black font-bold">30% 넘게 증가.</span></p>
                                <p>연평균 7.4% 증가로 가파른 증가세를 보이고 있습니다.</p>
                            </div>

                            <div className="pt-6 border-t border-gray-100 mt-auto">
                                <cite className="text-lg text-gray-400 not-italic">*국민건강보험공단</cite>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Card 2 */}
                    <FadeIn delay={200}>
                        <div className="bg-white rounded-[2rem] p-10 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 h-full flex flex-col relative overflow-hidden group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl">
                                    <i className="fa-solid fa-brain"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">성인 ADHD 진료비 폭증</h3>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-extrabold text-purple-600">10배</span>
                                    <span className="text-xl font-bold text-gray-500">폭증</span>
                                </div>
                            </div>

                            <div className="space-y-2 text-gray-600 font-medium leading-relaxed mb-8 flex-1 text-lg">
                                <p>2024년 환자수 12만 명 돌파.</p>
                                <p>특히 <span className="text-monimo-black font-bold">30대 여성 진료비</span>는</p>
                                <p>5년 전 대비 10배 이상 폭증했습니다.</p>
                            </div>

                            <div className="pt-6 border-t border-gray-100 mt-auto">
                                <cite className="text-lg text-gray-400 not-italic">*건강보험심사평가원</cite>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Card 3 */}
                    <FadeIn delay={300}>
                        <div className="bg-white rounded-[2rem] p-10 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 h-full flex flex-col relative overflow-hidden group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center text-xl">
                                    <i className="fa-solid fa-mobile-screen"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">디지털 과의존 위험군 증가</h3>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-extrabold text-orange-500">22.9</span>
                                    <span className="text-xl font-bold text-gray-500">%</span>
                                </div>
                            </div>

                            <div className="space-y-2 text-gray-600 font-medium leading-relaxed mb-8 flex-1 text-lg">
                                <p>과도한 스마트폰 이용으로</p>
                                <p><span className="text-monimo-black font-bold">정신건강 및 인지기능</span>에</p>
                                <p>영향을 받고 있습니다.</p>
                            </div>

                            <div className="pt-6 border-t border-gray-100 mt-auto">
                                <cite className="text-lg text-gray-400 not-italic">*과학기술정보통신부</cite>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <FadeIn delay={400}>
                    <div className="text-center">
                        <p className="text-2xl md:text-3xl font-extrabold text-monimo-black leading-snug">
                            "사후 치료에서 일상 관리로,<br />
                            <span className="text-monimo-blue">전 연령대 '신체·멘탈 통합 관리' 시장 선점</span>"
                        </p>
                    </div>
                </FadeIn>
            </div>
        </SectionWrapper>
    );
};
