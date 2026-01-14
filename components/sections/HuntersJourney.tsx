import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

import step1Image from '../../src/assets/images/hunter_step1_new.jpg';
import step2Image from '../../src/assets/images/hunter_step2.jpg';
import step3Image from '../../src/assets/images/hunters_food.jpg';
import step4Image from '../../src/assets/images/hunter_step4.jpg';
import step5Image from '../../src/assets/images/hunter_step5.jpg';

export const HuntersJourney: React.FC = () => {
    const steps = [
        {
            step: "1단계",
            time: "오전",
            title: "입장",
            desc: "헌터 모드 활성화",
            detail: "정문 근처에 진입하면 앱이 '헌터 모드'로 자동 전환되어 데몬 헌터즈가 될 준비를 마칩니다.",
            icon: "fa-mobile-screen-button",
            color: "from-emerald-400 to-emerald-600",
            bgInfo: "bg-emerald-50",
            textInfo: "text-emerald-600",
            image: step1Image // Add image for step 1
        },
        {
            step: "2단계",
            time: "오전/오후",
            title: "대기",
            desc: "지루한 대기 시간,협동 디펜스 게임으로!",
            detail: "T-익스프레스 등 주요 어트랙션 대기열에서 주변 사람들과 함께 '혼문 수호 작전'을 수행합니다.",
            icon: "fa-shield-halved",
            color: "from-blue-400 to-blue-600",
            bgInfo: "bg-blue-50",
            textInfo: "text-blue-600",
            image: step2Image // Add image for step 2
        },
        {
            step: "3단계",
            time: "점심",
            title: "식사 & 휴식",
            desc: "'영화속 음식과 댄스 인증샷 챌린지",
            detail: "영화 속 음식과 댄스를 즐기며 누구나 쉽게 참여하는 숏폼 챌린지에 도전합니다.",
            icon: "fa-utensils",
            color: "from-orange-400 to-orange-600",
            bgInfo: "bg-orange-50",
            textInfo: "text-orange-600",
            image: step3Image // Add image for step 3
        },
        {
            step: "4단계",
            time: "오후",
            title: "공동체 챌린지",
            desc: "함께 한 목소리로 하나가 되는 최종 미션에 참여합니다.",
            detail: "그랜드 스테이지에 모여 다함께 혼문을 지켜냅니다.",
            icon: "fa-music",
            color: "from-purple-400 to-purple-600",
            bgInfo: "bg-purple-50",
            textInfo: "text-purple-600",
            image: step4Image // Add image for step 4
        },
        {
            step: "5단계",
            time: "야간/퇴장",
            title: "피날레 & 보상",
            desc: "골든 혼문 피날레",
            detail: "하루 동안의 미션 결과가 모여 황금빛 혼문과 함께 야간 쇼의 하이라이트를 장식합니다.",
            subDetail: "'디지털 헌터 리포트' 발급",
            icon: "fa-crown",
            color: "from-yellow-400 to-yellow-600",
            bgInfo: "bg-yellow-50",
            textInfo: "text-yellow-600",
            image: step5Image // Add image for step 5
        }
    ];

    return (
        <SectionWrapper id="hunters-journey" className="bg-white relative overflow-hidden" pageNumber={13}>
            <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#7730D0] font-bold tracking-wider text-[15px] uppercase mb-2 block">Immersive Experience</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight break-keep">
                            Everland: The Last Defense Line of Demon Hunters<br /> <br className="md:hidden" />
                            <span className="text-[#7730D0]">K-IP를 활용한 하루 완성 몰입형 체험</span>
                        </h2>
                    </FadeIn>
                </div>

                {/* Journey Map - Desktop (Snake/Winding Layout Simulation) and Mobile (Vertical) */}
                <div className="relative">

                    {/* Desktop Connecting Line (Dashed simplified) */}
                    <div className="hidden lg:block absolute top-[160px] left-0 w-full h-1 bg-gradient-to-r from-emerald-200 via-purple-200 to-yellow-200 border-t-2 border-dashed border-gray-300 z-0"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                        {steps.map((step, index) => (
                            <FadeIn key={index} delay={index * 150} className="h-full">
                                <div className="flex flex-col h-full bg-white rounded-[2rem] border border-gray-100 shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">

                                    {/* Top Image/Icon Area */}
                                    <div className={`
                                        h-[220px]
                                        transition-all duration-300 relative overflow-hidden
                                        ${!step.image && `bg-gradient-to-br ${step.color} p-6 flex flex-col justify-between`}
                                    `}>

                                        {/* If Image Exists: Render Image Covering Full Area */}
                                        {step.image ? (
                                            <>
                                                <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent"></div> {/* Top dim only */}

                                                {/* Badges Overlay on Image */}
                                                <div className="absolute top-4 left-4 z-10">
                                                    <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-[12px] font-bold border border-white/30">
                                                        {step.step}
                                                    </span>
                                                </div>
                                                <div className="absolute top-4 right-4 z-10">
                                                    <span className="text-white/90 text-[13px] font-medium drop-shadow-md">{step.time}</span>
                                                </div>
                                            </>
                                        ) : (
                                            /* Else: Render Default Gradient & Icon */
                                            <>
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black opacity-5 rounded-full translate-y-1/2 -translate-x-1/3"></div>

                                                {/* Dim Gradient for consistent look */}
                                                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none"></div>

                                                <div className="flex justify-between items-start relative z-10">
                                                    <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-[12px] font-bold border border-white/30">
                                                        {step.step}
                                                    </span>
                                                    <span className="text-white/90 text-[13px] font-medium">{step.time}</span>
                                                </div>

                                                <div className="text-white text-4xl mb-2 self-center drop-shadow-md relative z-10">
                                                    <i className={`fa-solid ${step.icon}`}></i>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Content Body */}
                                    <div className="p-6 flex flex-col flex-1 text-center lg:text-left">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight break-keep">{step.title}</h3>
                                        <p className={`text-[14px] font-bold mb-3 ${step.textInfo}`}>{step.desc}</p>
                                        <p className="text-[13px] text-gray-500 leading-relaxed font-medium break-keep mb-4 flex-1">
                                            {step.detail}
                                        </p>

                                        {step.subDetail && (
                                            <div className="mt-auto pt-4 border-t border-gray-100">
                                                <div className="flex items-center gap-2 justify-center lg:justify-start">
                                                    <i className="fa-solid fa-file-invoice text-gray-400"></i>
                                                    <span className="text-[13px] text-gray-600 font-bold">{step.subDetail}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                {/* Legend / Key Highlight (Box below to sum up) */}
                <FadeIn delay={800} className="mt-16">
                    <div className="bg-[#7730D0]/5 rounded-[2rem] p-8 border border-[#7730D0]/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div>
                            <h4 className="text-xl font-bold text-[#7730D0] mb-2"><i className="fa-solid fa-wand-magic-sparkles mr-2"></i>Digital Hunter Report</h4>
                            <p className="text-gray-600 font-medium text-sm md:text-base">
                                활동 기록이 담긴 리포트를 제공하며 SNS 공유 및 재방문을 유도합니다.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#7730D0] text-2xl">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-800 text-2xl">
                                <i className="fa-brands fa-tiktok"></i>
                            </div>
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-red-500 text-2xl">
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </SectionWrapper>
    );
};
