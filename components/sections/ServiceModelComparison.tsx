import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const ServiceModelComparison: React.FC = () => {
    return (
        <SectionWrapper id="service-model-comparison" className="bg-white relative overflow-hidden" pageNumber={11}>
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#7730D0] font-bold tracking-wider text-[15px] uppercase mb-2 block">Paradigm Shift</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight">
                            Service Model Comparison
                        </h2>
                    </FadeIn>
                </div>

                {/* Comparison Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 relative">

                    {/* Center Divider (Desktop) */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent -translate-x-1/2"></div>
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-100 rounded-full items-center justify-center text-gray-400 shadow-sm z-10">
                        <i className="fa-solid fa-arrow-right text-sm"></i>
                    </div>

                    {/* Left: Traditional Model */}
                    <FadeIn delay={100}>
                        <div className="flex flex-col items-center">
                            <div className="mb-8 text-center">
                                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-500 text-3xl mb-4 mx-auto">
                                    <i className="fa-solid fa-fort-awesome"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">기존 모델</h3>
                                <p className="text-gray-500 font-medium">(Traditional Model)</p>
                            </div>

                            <div className="space-y-4 w-full max-w-md">
                                {/* Card 1 */}
                                <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl flex items-center gap-4 transition-all hover:bg-gray-100">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-400 shadow-sm border border-gray-100 flex-shrink-0">
                                        <i className="fa-solid fa-cubes"></i>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Infrastructure</div>
                                        <div className="text-lg font-bold text-gray-700">거대 물리 공간</div>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl flex items-center gap-4 transition-all hover:bg-gray-100">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-400 shadow-sm border border-gray-100 flex-shrink-0">
                                        <i className="fa-solid fa-weight-hanging"></i>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Content</div>
                                        <div className="text-lg font-bold text-gray-700">고정형 어트랙션</div>
                                    </div>
                                </div>
                                {/* Card 3 */}
                                <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl flex items-center gap-4 transition-all hover:bg-gray-100">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-400 shadow-sm border border-gray-100 flex-shrink-0">
                                        <i className="fa-solid fa-coins"></i>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Cost Structure</div>
                                        <div className="text-lg font-bold text-gray-700">높은 건축 비용</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right: Digital Platform Model */}
                    <FadeIn delay={300}>
                        <div className="flex flex-col items-center">
                            <div className="mb-8 text-center">
                                <div className="w-16 h-16 bg-[#7730D0]/10 rounded-2xl flex items-center justify-center text-[#7730D0] text-3xl mb-4 mx-auto ring-4 ring-[#7730D0]/5">
                                    <i className="fa-solid fa-mobile-screen-button"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-[#7730D0]">디지털 플랫폼 모델</h3>
                                <p className="text-[#D476AB] font-medium">(K-IP Hub)</p>
                            </div>

                            <div className="space-y-4 w-full max-w-md">
                                {/* Card 1 */}
                                <div className="bg-white border border-[#7730D0]/20 p-6 rounded-2xl flex items-center gap-4 shadow-lg shadow-[#7730D0]/5 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7730D0]/5 to-[#D476AB]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#7730D0] to-[#D476AB] rounded-lg flex items-center justify-center text-white shadow-md flex-shrink-0 relative z-10">
                                        <i className="fa-solid fa-server"></i>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-xs font-bold text-[#7730D0] uppercase tracking-wide mb-1">Infrastructure</div>
                                        <div className="text-lg font-bold text-gray-900 border-b-2 border-[#7730D0]/20 inline-block pb-0.5">모바일 앱 '데이터패드'</div>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="bg-white border border-[#7730D0]/20 p-6 rounded-2xl flex items-center gap-4 shadow-lg shadow-[#7730D0]/5 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7730D0]/5 to-[#D476AB]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#7730D0] to-[#D476AB] rounded-lg flex items-center justify-center text-white shadow-md flex-shrink-0 relative z-10">
                                        <i className="fa-solid fa-route"></i>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-xs font-bold text-[#7730D0] uppercase tracking-wide mb-1">Content</div>
                                        <div className="text-lg font-bold text-gray-900">가변적 디지털 서사</div>
                                    </div>
                                </div>
                                {/* Card 3 */}
                                <div className="bg-white border border-[#7730D0]/20 p-6 rounded-2xl flex items-center gap-4 shadow-lg shadow-[#7730D0]/5 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7730D0]/5 to-[#D476AB]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#7730D0] to-[#D476AB] rounded-lg flex items-center justify-center text-white shadow-md flex-shrink-0 relative z-10">
                                        <i className="fa-solid fa-arrows-rotate"></i>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-xs font-bold text-[#7730D0] uppercase tracking-wide mb-1">Cost Structure</div>
                                        <div className="text-lg font-bold text-gray-900">시즌별 IP 로테이션</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Core Values */}
                <FadeIn delay={500}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Value 1 */}
                        <div className="bg-gradient-to-br from-[#7730D0]/5 to-[#D476AB]/5 border border-[#7730D0]/10 p-8 rounded-2xl text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7730D0] to-[#D476AB]"></div>
                            <div className="text-sm font-bold text-[#7730D0] mb-2 uppercase tracking-wide">Core Value</div>
                            <h4 className="text-2xl font-extrabold text-[#5A239E]">저비용 고효율</h4>
                        </div>
                        {/* Value 2 */}
                        <div className="bg-gradient-to-br from-[#7730D0]/5 to-[#D476AB]/5 border border-[#7730D0]/10 p-8 rounded-2xl text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7730D0] to-[#D476AB]"></div>
                            <div className="text-sm font-bold text-[#7730D0] mb-2 uppercase tracking-wide">Core Value</div>
                            <h4 className="text-2xl font-extrabold text-[#5A239E]">무한한 서사 확장성</h4>
                        </div>
                        {/* Value 3 */}
                        <div className="bg-gradient-to-br from-[#7730D0]/5 to-[#D476AB]/5 border border-[#7730D0]/10 p-8 rounded-2xl text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7730D0] to-[#D476AB]"></div>
                            <div className="text-sm font-bold text-[#7730D0] mb-2 uppercase tracking-wide">Core Value</div>
                            <h4 className="text-2xl font-extrabold text-[#5A239E]">사용자 주도적 참여</h4>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </SectionWrapper>
    );
};
