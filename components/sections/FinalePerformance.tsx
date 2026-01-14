import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

import finaleImage from '../../src/assets/images/finale_performance_new.png';

export const FinalePerformance: React.FC = () => {
    return (
        <SectionWrapper id="finale-performance" className="bg-gradient-to-b from-yellow-900 via-yellow-600 to-black relative overflow-hidden text-white flex items-center justify-center min-h-screen" pageNumber={19}>
            <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10 flex flex-col items-center justify-center h-full py-4">

                <FadeIn className="mb-1">
                    <div className="inline-block">
                        <span className="py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-yellow-200 font-bold tracking-widest uppercase text-[10px] shadow-[0_0_15px_rgba(253,224,71,0.3)]">
                            Grand Stage • 21:30
                        </span>
                    </div>
                </FadeIn>

                <FadeIn delay={200} className="mb-1">
                    <h2 className="text-2xl md:text-4xl font-black text-white leading-tight drop-shadow-[0_0_25px_rgba(234,179,8,0.6)]">
                        피날레: 황금 혼문 <span className="text-yellow-300">(Golden Honmoon)</span>
                    </h2>
                </FadeIn>

                <FadeIn delay={400} className="mb-2">
                    <p className="text-base md:text-lg text-yellow-100 font-medium leading-relaxed max-w-3xl mx-auto break-keep text-center">
                        "여러분 덕분에 혼문이 황금빛으로 물듭니다!"<br />
                        <span className="opacity-80 text-sm md:text-base mt-0.5 block">
                            전 유저의 게이지가 100%에 도달하는 순간, 압도적인 피날레가 시작됩니다.
                        </span>
                    </p>
                </FadeIn>

                <FadeIn delay={500} className="w-full max-w-5xl mb-3">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-500/50">
                        <img src={finaleImage} alt="Golden Honmoon Finale Performance" className="w-full h-auto max-h-[55vh] object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-4xl">
                    <FadeIn delay={600} className="h-full">
                        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-2xl border border-yellow-500/30 h-full flex flex-col items-center justify-center shadow-lg">
                            {/* Icon Removed */}
                            <h3 className="text-lg font-bold text-white mb-1">빛의 파노라마</h3>
                            <p className="text-gray-200 text-sm leading-relaxed text-center">
                                스크린에 혼문이 <span className="text-yellow-400 font-bold">황금색</span>으로 변하며<br />
                                메인 스크린에 참여했던 유저들의 닉네임과<br />
                                댄스 챌린지 영상이 파노라마처럼 흐릅니다.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={800} className="h-full">
                        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-2xl border border-yellow-500/30 h-full flex flex-col items-center justify-center shadow-lg">
                            <i className="fa-solid fa-fireworks text-2xl text-yellow-400 mb-2 drop-shadow-lg"></i>
                            <h3 className="text-lg font-bold text-white mb-1">혼문의 완전한 봉인</h3>
                            <p className="text-gray-200 text-sm leading-relaxed text-center">
                                성우의 긴박한 안내 방송과 함께<br />
                                이어지는 대규모 <span className="text-yellow-400 font-bold">레이저 쇼</span>는<br />
                                화려한 대서사의 마무리를 장식합니다.
                            </p>
                        </div>
                    </FadeIn>
                </div>

            </div>

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-yellow-500 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-orange-600 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
        </SectionWrapper>
    );
};
