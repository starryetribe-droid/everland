import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

import singAlongImage from '../../src/assets/images/sing_along_stage_final.jpg';
import singAlongNewsImage from '../../src/assets/images/sing_along_news.png';

export const SingAlongAttack: React.FC = () => {
    return (
        <SectionWrapper id="sing-along-attack" className="bg-white relative overflow-hidden" pageNumber={21}>
            <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#DAA520] font-bold tracking-wider text-xl uppercase mb-3 block">Journey Phase 4: 공동체 챌린지</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight break-keep mb-6">
                            떼창(Sing-along) Attack, 데시벨 챌린지
                        </h2>
                        <p className="mt-4 text-gray-600 font-medium text-xl md:text-2xl leading-relaxed break-keep">
                            함께 부르는 노래, 하나 되는 순간. 그랜드 스테이지에서 펼쳐지는 압도적인 떼창 에너지.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 rounded-full shadow-sm border border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#DAA520]">
                                    <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                                    <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                                    <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25a.75.75 0 00.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134 0z" />
                                </svg>
                                <span className="text-gray-700 font-bold text-sm tracking-wide">그랜드 스테이지</span>
                            </div>
                        </div>
                    </FadeIn>

                    {/* News Image */}
                    <FadeIn delay={100} className="mt-8 flex justify-center">
                        <img src={singAlongNewsImage} alt="Sing-along News" className="w-[80%] md:w-[60%] lg:w-[50%] h-auto rounded-xl drop-shadow-md" />
                    </FadeIn>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

                    {/* Visual Area (Left) */}
                    <FadeIn delay={200} className="w-full lg:w-1/2 flex justify-center relative">
                        <div className="relative w-full max-w-[600px] aspect-video flex items-center justify-center">
                            {/* Glowing Background Effect */}
                            <div className="absolute top-1/2 left-1/2 w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-[#FFD700]/20 to-[#FF8C00]/10 rounded-xl blur-[60px] -z-10"></div>

                            {/* Main Image */}
                            <img src={singAlongImage} alt="Sing-along Concert" className="w-[85%] h-auto transform drop-shadow-2xl relative z-0 rounded-3xl border-4 border-white/50 animate-[float_5s_ease-in-out_infinite]" />
                        </div>
                    </FadeIn>

                    {/* Content Steps (Right) */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        {/* Step 1 */}
                        <FadeIn delay={400} className="relative pl-8 border-l-[3px] border-gray-200">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#DAA520] rounded-full ring-4 ring-white"></div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-[#DAA520] font-bold text-sm tracking-wider uppercase mb-1 block">Context</span>
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">글로벌 떼창 트렌드, 북미 '떼창' 이벤트 1천회 매진 </h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    "할리우드리포터는 북미 1,700개 극장이 떼창 상영에 참여하며< br />매진 행렬을 기록했다고 전했습니다." <br />
                                    관람을 넘어 직접 참여하고 즐기는 문화가 확산되고 있습니다.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Step 2 */}
                        <FadeIn delay={600} className="relative pl-8 border-l-[3px] border-gray-200">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#FF8C00] rounded-full ring-4 ring-white"></div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-[#FF8C00] font-bold text-sm tracking-wider uppercase mb-1 block">Program</span>
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Golden & Soda Pop</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    그랜드 스테이지에서 에버랜드 테마송과 인기 POP을 함께 부르며< br />폭발적인 에너지를 발산합니다.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Step 3 */}
                        <FadeIn delay={800} className="relative pl-8 border-l-[3px] border-transparent">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full ring-4 ring-white"></div>
                            <div className="bg-gradient-to-br from-[#FF8C00] to-[#FF4500] p-6 rounded-2xl shadow-lg text-white transform hover:scale-105 transition-transform duration-300">
                                <span className="text-white/80 font-bold text-sm tracking-wider uppercase mb-1 block">Mission</span>
                                <h3 className="text-2xl font-extrabold text-white mb-2">데시벨 챌린지 (Decibel)</h3>
                                <p className="text-white/90 font-medium leading-relaxed">
                                    특정 데시벨을 넘기면 '혼문'이 완전히 잠기는 리얼타임 인터랙티브 이벤트를 제공합니다.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};
