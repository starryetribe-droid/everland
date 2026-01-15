import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

import digitalRelayImage from '../../src/assets/images/digital_lantern_relay.png';

export const DigitalRelay: React.FC = () => {
    return (
        <SectionWrapper id="digital-relay" className="bg-white relative overflow-hidden" pageNumber={17}>
            <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#DAA520] font-bold tracking-wider text-xl uppercase mb-3 block">Journey Phase 2-2: Participation</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight break-keep mb-6">
                            K-Death Hunter : 빛의 수호자
                        </h2>
                        <p className="mt-4 text-gray-600 font-medium text-xl md:text-2xl leading-relaxed break-keep">
                            호롱불 옮기기로 에버랜드의 어둠을 빛으로 밝히는 릴레이 미션을 통해 헌터들의 유대감을 형성합니다.
                        </p>
                    </FadeIn>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

                    {/* Visual Area (Left) */}
                    <FadeIn delay={200} className="w-full lg:w-1/2 flex justify-center relative">
                        <div className="relative w-full max-w-[600px] aspect-video flex items-center justify-center">
                            {/* Glowing Orbit Ring Effect */}
                            <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 bg-[#DAA520]/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>

                            {/* Image */}
                            <img src={digitalRelayImage} alt="Digital Lantern Relay" className="w-full h-full object-cover rounded-3xl drop-shadow-2xl relative z-0 border-4 border-gray-900/10" />

                            {/* Floating Overlay Element (Mockup) */}
                            <div className="absolute bottom-[-20px] right-[-20px] bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold">
                                        <i className="fa-solid fa-fire"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase">Relay Status</p>
                                        <p className="text-sm font-black text-gray-800">12,504 Hunters Connected</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Content Steps (Right) */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        {/* Step 1 */}
                        <FadeIn delay={400} className="relative pl-8 border-l-[3px] border-gray-200">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-gray-800 rounded-full ring-4 ring-white"></div>
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-gray-800 font-bold text-sm tracking-wider uppercase mb-1 block">Opening</span>
                                <h3 className="text-xl font-extrabold text-gray-900 mb-2">사명의 시작: "어둠이 몰려오고 있습니다"</h3>
                                <div className="text-gray-600 font-medium leading-relaxed text-base space-y-1">
                                    <p><span className="font-bold text-[#7730D0]">경고!</span> "에버랜드에 차가운 어둠이 스며들고 있습니다."</p>
                                    <p>헌터님, 당신의 <span className="font-bold text-[#DAA520]">'호롱불'</span>을 켜서 이 땅의 온기를 지켜주세요.</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Step 2 */}
                        <FadeIn delay={500} className="relative pl-8 border-l-[3px] border-gray-200">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#DAA520] rounded-full ring-4 ring-white"></div>
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-[#DAA520] font-bold text-sm tracking-wider uppercase mb-1 block">Mission</span>
                                <h3 className="text-xl font-extrabold text-gray-900 mb-2">빛의 전승: "호롱불의 불을 옮겨 주세요"</h3>
                                <div className="text-gray-600 font-medium leading-relaxed text-base">
                                    <p>내 불꽃을 다른 헌터에게 나누어 <span className="font-bold">'릴레이'</span>를 이어가세요.</p>상대의 닉네임을 입력하면 호롱불이 옮겨갑니다.
                                    <p className="text-sm text-gray-500 mt-1">"‘새벽별’ 헌터님께 빛을 전달했습니다! 두 호롱불이 연결되었습니다."</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Step 3 */}
                        <FadeIn delay={600} className="relative pl-8 border-l-[3px] border-gray-200">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#7730D0] rounded-full ring-4 ring-white"></div>
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-[#7730D0] font-bold text-sm tracking-wider uppercase mb-1 block">Process</span>
                                <h3 className="text-xl font-extrabold text-gray-900 mb-2">시너지 효과: "빛이 모일수록 어둠이 걷힙니다"</h3>
                                <div className="text-gray-600 font-medium leading-relaxed text-base">
                                    <p>참여자가 늘어날수록 디지털 지도상의 어둠이 사라집니다.</p>
                                    <p className="text-sm text-gray-500 mt-1">빛의 계보: 진수 → 미나 → 당신 → 새벽별</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Step 4 */}
                        <FadeIn delay={700} className="relative pl-8 border-l-[3px] border-transparent">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-gradient-to-r from-[#DAA520] to-[#7730D0] rounded-full ring-4 ring-white"></div>
                            <div className="bg-gradient-to-br from-[#2c1a4d] to-[#1a1a1a] p-5 rounded-2xl shadow-lg text-white transform hover:scale-105 transition-transform duration-300">
                                <span className="text-[#DAA520] font-bold text-sm tracking-wider uppercase mb-1 block">Finale</span>
                                <h3 className="text-xl font-extrabold text-white mb-2">승리의 선포: "어둠을 이긴 빛의 헌터들"</h3>
                                <div className="text-gray-200 font-medium leading-relaxed text-base">
                                    <p>목표 인원 달성 시 호롱불이 거대한 <span className="font-bold text-[#DAA520] text-lg">'등불'</span>로 진화합니다.</p>
                                    <p className="mt-2 text-sm text-white/70 border-t border-white/20 pt-2">
                                        보상: 전광판 등재 "어둠을 밝힌 영웅들" & 빛의 헌터 인증서
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </SectionWrapper >
    );
};
