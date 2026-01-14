import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

import nfcKeyringImage from '../../src/assets/images/nfc_keyring_prototype_final.jpg';

export const NfcKeyring: React.FC = () => {
    return (
        <SectionWrapper id="nfc-keyring" className="bg-white relative overflow-hidden" pageNumber={17}>
            <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#DAA520] font-bold tracking-wider text-lg uppercase mb-2 block">Journey Phase 3: 식사 & 휴식</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight">
                            NFC 키링 & 리워드 콜렉션
                        </h2>
                        <p className="mt-4 text-gray-600 font-medium">
                            한국적인 디자인의 NFC 키링으로 특별한 수집 욕구와 재미를 선사합니다.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 rounded-full shadow-sm border border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#DAA520]">
                                    <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 2.1.75.75 0 01-.156 1.483A47.584 47.584 0 0012 5.25a47.588 47.588 0 00-9.746 2.089.75.75 0 01-.156-1.483A49.108 49.108 0 0111.25 3.756V3a.75.75 0 01.75-.75zm0 13.5a1.5 1.5 0 01.75.018v2.232a1.5 1.5 0 01-1.5 0V15.768a1.5 1.5 0 01.75-.018z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M9 10.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 019 10.5zm3 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zm3 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M12 8.25a.75.75 0 01.75.75v.75c0 .414.336.75.75.75h.75a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-.75a.75.75 0 00-.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 00-.75-.75h-.75a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h.75a.75.75 0 00.75-.75v-.75a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700 font-bold text-lg tracking-wide">기프트샵</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

                    {/* Visual Area (Left) */}
                    <FadeIn delay={200} className="w-full lg:w-1/2 flex justify-center relative">
                        <div className="relative w-full max-w-[600px] aspect-video flex items-center justify-center">
                            {/* Glowing Background Effect */}
                            <div className="absolute top-1/2 left-1/2 w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-[#DAA520]/20 to-[#FFD700]/10 rounded-xl blur-[60px] -z-10"></div>

                            {/* Main Image */}
                            <img src={nfcKeyringImage} alt="NFC Keyring" className="w-full h-auto transform drop-shadow-2xl relative z-10 rounded-3xl border-4 border-white/50 animate-[float_5s_ease-in-out_infinite]" />
                        </div>
                    </FadeIn>

                    {/* Content Steps (Right) */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        {/* Step 1 */}
                        <FadeIn delay={400} className="relative pl-8 border-l-[3px] border-gray-200">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#DAA520] rounded-full ring-4 ring-white"></div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-[#DAA520] font-bold text-lg tracking-wider uppercase mb-1 block">Trigger</span>
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">키링 태깅 (Tagging)</h3>
                                <p className="text-gray-600 font-medium leading-relaxed text-lg">
                                    한국적인 디자인의 NFC 키링을 스마트폰에 태깅하여 숨겨진 혜택을 확인합니다.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Step 2 */}
                        <FadeIn delay={600} className="relative pl-8 border-l-[3px] border-gray-200">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#FFD700] rounded-full ring-4 ring-white"></div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-[#FFD700] font-bold text-lg tracking-wider uppercase mb-1 block">Action</span>
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">혜택 제공 (Rewards)</h3>
                                <p className="text-gray-600 font-medium leading-relaxed text-lg">
                                    태깅 시 전용 쿠폰이나 디지털 포토카드가 즉시 제공되어 관람객에게 특별한 경험을 줍니다.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Step 3 */}
                        <FadeIn delay={800} className="relative pl-8 border-l-[3px] border-transparent">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full ring-4 ring-white"></div>
                            <div className="bg-gradient-to-br from-[#DAA520] to-[#F0E68C] p-6 rounded-2xl shadow-lg text-white transform hover:scale-105 transition-transform duration-300">
                                <span className="text-white/80 font-bold text-lg tracking-wider uppercase mb-1 block">Collection</span>
                                <h3 className="text-2xl font-extrabold text-white mb-2">콜렉션 완성 (Collection)</h3>
                                <p className="text-white/90 font-medium leading-relaxed text-lg">
                                    다양한 키링과 디지털 굿즈를 수집하며 수집 욕구를 자극하고 지속적인 방문을 유도합니다.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};
