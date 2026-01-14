import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

import socialFeedImage from '../../src/assets/images/social_challenge_new.jpg';

export const SocialChallenge: React.FC = () => {
    return (
        <SectionWrapper id="social-challenge" className="bg-white relative overflow-hidden" pageNumber={19}>
            <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#7730D0] font-bold tracking-wider text-xl uppercase mb-3 block">Journey Phase 3: 식사 & 휴식</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight break-keep mb-6">
                            영화속 음식, 댄스 챌린지 & SNS 확산
                        </h2>
                        <p className="mt-4 text-gray-600 font-medium text-xl md:text-2xl leading-relaxed break-keep">
                            챌린지 콘텐츠로 플랫폼을 활성화하고, 숏폼을 SNS에 확산할 수 있는 구조를 완성합니다.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 rounded-full shadow-sm border border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#7730D0]">
                                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.146.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700 font-bold text-sm tracking-wide">스낵 버스터 & 광장</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

                    {/* Visual Area (Left) */}
                    <FadeIn delay={200} className="w-full lg:w-1/2 flex justify-center relative">
                        <div className="relative w-full max-w-[600px] aspect-video flex items-center justify-center">
                            {/* Glowing Background Effect */}
                            <div className="absolute top-1/2 left-1/2 w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-[#FF6B6B]/20 to-[#FFD93D]/20 rounded-xl blur-[60px] -z-10"></div>

                            {/* Main Image */}
                            <img src={socialFeedImage} alt="Social Challenge Feed" className="w-[85%] h-auto transform drop-shadow-2xl relative z-0 rounded-3xl border-4 border-white/50 animate-[float_5s_ease-in-out_infinite]" />
                        </div>
                    </FadeIn>

                    {/* Content Steps (Right) */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        {/* Step 1 */}
                        <FadeIn delay={400} className="relative pl-8 border-l-[3px] border-gray-200">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#FF6B6B] rounded-full ring-4 ring-white"></div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-[#FF6B6B] font-bold text-sm tracking-wider uppercase mb-1 block">Trigger</span>
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">챌린지 참여 (Challenge)</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    김밥/떡볶이 먹방, 댄스 챌린지 등 오프라인 경험과 연계된 다양한 미션을 제공합니다.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Step 2 */}
                        <FadeIn delay={600} className="relative pl-8 border-l-[3px] border-gray-200">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#FFD93D] rounded-full ring-4 ring-white"></div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-[#FFD93D] font-bold text-sm tracking-wider uppercase mb-1 block">Action</span>
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">숏폼 제작 (Short-form)</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    앱 내 제공되는 전용 필터와 편집 도구로 누구나 쉽고 빠르게 고퀄리티 숏폼 콘텐츠를 제작할 수 있습니다.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Step 3 */}
                        <FadeIn delay={800} className="relative pl-8 border-l-[3px] border-transparent">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full ring-4 ring-white"></div>
                            <div className="bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] p-6 rounded-2xl shadow-lg text-white transform hover:scale-105 transition-transform duration-300">
                                <span className="text-white/80 font-bold text-sm tracking-wider uppercase mb-1 block">Reward</span>
                                <h3 className="text-2xl font-extrabold text-white mb-2">SNS 확산 (Viral)</h3>
                                <p className="text-white/90 font-medium leading-relaxed">
                                    챌린지 달성 시 즉각적인 리워드를 지급하고, SNS 자동 공유를 유도하여 자연스러운 바이럴 효과를 창출합니다.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};
