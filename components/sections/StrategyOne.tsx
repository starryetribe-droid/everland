import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';

export const StrategyOne: React.FC = () => {
    // Reusable Step 1 Component (Emotion Tagging)
    const Step1Component = () => (
        <div className="w-[190px] md:w-[210px] bg-white rounded-3xl shadow-sm border border-gray-100 p-5 shrink-0 flex flex-col gap-5 h-[210px] md:h-[230px]">
            <div className="text-[15px] font-bold text-monimo-blue bg-[#7730D0]/5 w-fit px-3 py-1 rounded-full">Step 1. 상태 태깅</div>
            <p className="text-[16px] font-bold text-gray-900">오늘 하루, 마음은?</p>

            <div className="flex justify-between px-1 items-start mt-2">
                <div className="flex flex-col items-center opacity-20">
                    <i className="fa-solid fa-face-smile text-gray-400 text-2xl"></i>
                </div>
                <div className="flex flex-col items-center opacity-20">
                    <i className="fa-solid fa-face-meh text-gray-400 text-2xl"></i>
                </div>
                <div className="flex flex-col items-center gap-2 -mt-1">
                    <div className="relative">
                        <i className="fa-solid fa-face-frown-open text-[#F9C14E] text-4xl drop-shadow-md"></i>
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#F9C14E] rounded-full"></div>
                    </div>
                    <span className="text-[13px] font-black text-[#F9C14E] whitespace-nowrap">우울해요</span>
                </div>
                <div className="flex flex-col items-center opacity-20">
                    <i className="fa-solid fa-face-tired text-gray-400 text-2xl"></i>
                </div>
            </div>
        </div>
    );

    // Reusable Step 2 Component (Detailed Record)
    const Step2Component = () => (
        <div className="w-[200px] md:w-[220px] bg-white rounded-3xl shadow-sm border border-gray-100 p-5 shrink-0 flex flex-col gap-4 h-[210px] md:h-[230px]">
            <div className="text-[15px] font-bold text-monimo-blue bg-[#7730D0]/5 w-fit px-3 py-1 rounded-full">Step 2. 감정 기록</div>
            <div className="flex gap-2 mb-1 flex-wrap">
                <span className="bg-[#5A2D82] text-white text-[15px] px-2.5 py-1 rounded-lg">불안한</span>
                <span className="bg-[#5A2D82] text-white text-[15px] px-2.5 py-1 rounded-lg">우울한</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 h-16 border border-gray-100">
                <p className="text-[15px] text-gray-700 leading-tight">오늘 뭔가 울적해...</p>
            </div>
            <div className="w-full bg-[#5A2D82] text-white text-center py-2 rounded-xl text-[15px] font-bold shadow-sm mt-auto">
                작성하기
            </div>
        </div>
    );

    // Reusable Step 4 Component (Content Recommendation) - Used as Result A
    const Step4Component = () => (
        <div className="w-[190px] md:w-[210px] bg-white rounded-3xl shadow-md border border-gray-100 p-5 shrink-0 flex flex-col gap-3 h-[200px] md:h-[220px] justify-center relative">
            <div className="absolute -top-3 left-4 bg-gray-500 text-[15px] font-bold text-white px-3 py-1 rounded-full shadow-sm z-10 whitespace-nowrap">결과 A. 콘텐츠 추천</div>
            <div className="text-[16px] font-bold text-gray-900 leading-tight mb-1">
                우울할 때 추천하는<br />저녁 콘텐츠
            </div>
            <div className="space-y-2">
                <div className="bg-gray-50 p-2.5 rounded-xl flex items-center gap-3 border border-gray-100">
                    <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-lg"><i className="fa-solid fa-moon"></i></div>
                    <div className="flex-1 min-w-0">
                        <div className="text-[15px] font-bold truncate">잠들기 전 명상</div>
                    </div>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-xl flex items-center gap-3 border border-gray-100">
                    <div className="w-9 h-9 rounded-lg bg-[#7730D0]/20 text-[#7730D0] flex items-center justify-center text-lg"><i className="fa-solid fa-water"></i></div>
                    <div className="flex-1 min-w-0">
                        <div className="text-[15px] font-bold truncate">빗소리 ASMR</div>
                    </div>
                </div>
            </div>
        </div>
    );

    // New Chat Component - Used as Result B
    const ChatComponent = () => (
        <div className="w-[190px] md:w-[210px] bg-white rounded-3xl shadow-md border-2 border-monimo-blue/20 p-5 shrink-0 flex flex-col gap-4 h-[200px] md:h-[220px] relative justify-center">
            <div className="absolute -top-3 left-4 bg-[#5A2D82] text-[15px] font-bold text-white px-3 py-1 rounded-full shadow-sm z-10 whitespace-nowrap">결과 B. 대화 진행</div>

            <div className="flex flex-col gap-3">
                <div className="flex gap-2.5 items-end">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-t from-orange-300 to-yellow-200 shrink-0 shadow-sm mb-1"></div>
                    <div className="bg-gray-100 text-gray-600 p-2.5 rounded-2xl rounded-bl-none text-[15px] font-medium leading-tight">
                        무슨 기억이 나세요?
                    </div>
                </div>
                <div className="flex gap-2.5 items-end flex-row-reverse">
                    <div className="bg-[#7730D0]/5 text-monimo-blue p-2.5 rounded-2xl rounded-br-none text-[15px] font-medium leading-tight">
                        제주도 여행...
                    </div>
                </div>
            </div>

            <div className="mt-auto relative">
                <div className="h-9 bg-gray-50 rounded-full border border-gray-200 flex items-center px-4">
                    <span className="text-[15px] text-gray-400">메시지 보내기...</span>
                </div>
                <div className="absolute right-1.5 top-1.5 w-6 h-6 bg-monimo-blue rounded-full flex items-center justify-center text-white text-[12px]">
                    <i className="fa-solid fa-arrow-up"></i>
                </div>
            </div>
        </div>
    );

    return (
        <SectionWrapper id="strategy-1" className="bg-gray-50 relative overflow-hidden" pageNumber={19}>
            <div className="max-w-[1440px] mx-auto px-6 w-full flex flex-col gap-12">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-10">
                    <div className="text-left shrink-0">
                        <FadeIn>
                            <span className="text-monimo-blue font-bold tracking-wider text-[15px] uppercase mb-2 block">Strategy 01</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-monimo-black break-keep">
                                콘텐츠 탐색 대신,<br />
                                <span className="text-monimo-blue">대화로 시작하는 멘탈케어</span>
                            </h2>
                        </FadeIn>
                    </div>

                    <div className="flex-1 w-full md:pb-2">
                        <FadeIn delay={200}>
                            <div className="flex flex-col items-end">
                                <div className="border border-red-200 rounded-3xl p-6 bg-red-50/10 w-full md:w-fit max-w-full">
                                    <div className="flex items-center gap-3 mb-2">
                                        <i className="fa-solid fa-triangle-exclamation text-red-500 text-xl"></i>
                                        <h4 className="font-bold text-red-500 text-[18px]">핵심 문제 (Pain Point)</h4>
                                    </div>
                                    <p className="text-monimo-gray font-medium text-[16px] md:text-[19px] leading-relaxed whitespace-nowrap overflow-hidden">
                                        사용자가 스스로 영상을 찾아봐야 하는 구조적 한계. <span className="text-red-500 font-bold underline underline-offset-8 decoration-red-200">탐색 의지가 부족한 고객은 결국 이탈합니다.</span>
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Bottom Section: Process */}
                <div className="space-y-6">
                    {/* AS-IS */}
                    <FadeIn delay={200}>
                        <div className="relative">
                            <div className="absolute -top-3.5 left-4 bg-gray-100 text-gray-500 text-[15px] font-bold px-4 py-1 rounded-full z-10 border border-gray-200 shadow-sm">
                                기존의 수동적 흐름 (AS-IS)
                            </div>
                            <div className="bg-gray-50 rounded-[2.5rem] p-6 border border-gray-200 overflow-x-auto no-scrollbar">
                                <div className="flex items-center min-w-max gap-6">
                                    <Step1Component />
                                    <i className="fa-solid fa-arrow-right text-gray-300 text-2xl shrink-0"></i>
                                    <Step2Component />
                                    <i className="fa-solid fa-arrow-right text-gray-300 text-2xl shrink-0"></i>
                                    <Step4Component />
                                    <i className="fa-solid fa-arrow-right text-gray-300 text-2xl shrink-0"></i>
                                    <div className="w-[180px] h-[210px] md:h-[230px] rounded-3xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center bg-gray-100/50 shrink-0 px-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                                            <i className="fa-solid fa-ban text-gray-400 text-xl"></i>
                                        </div>
                                        <span className="text-[15px] text-gray-400 font-bold text-center leading-tight break-keep">사용자가 직접 탐색 필요<br /><span className="text-red-400/70">(이탈 확률 ↑)</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* TO-BE */}
                    <FadeIn delay={400}>
                        <div className="relative">
                            <div className="absolute -top-3.5 left-4 bg-monimo-blue text-white text-[15px] font-bold px-4 py-1 rounded-full z-10 shadow-md">
                                다봄의 능동적 개입 (TO-BE)
                            </div>
                            <div className="bg-[#7730D0]/5 rounded-[2.5rem] p-6 border-2 border-[#7730D0]/10 shadow-floating flex flex-col items-center">
                                <div className="flex items-center min-w-max gap-6 md:gap-8 overflow-x-auto no-scrollbar w-full py-4 px-2">
                                    <div className="flex items-center gap-4">
                                        <Step1Component />
                                        <i className="fa-solid fa-chevron-right text-monimo-blue text-2xl shrink-0 animate-pulse"></i>
                                        <Step2Component />
                                        <i className="fa-solid fa-chevron-right text-monimo-blue text-2xl shrink-0 animate-pulse"></i>
                                    </div>

                                    <div className="w-[280px] md:w-[320px] bg-white rounded-3xl shadow-xl border-2 border-monimo-blue/20 p-6 shrink-0 flex flex-col relative overflow-hidden h-[240px] md:h-[260px]">
                                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-300 to-yellow-300"></div>
                                        <div className="text-[15px] font-bold text-white bg-[#5A2D82] w-fit px-3 py-0.5 rounded-full mb-3 self-center shadow-sm">다봄의 능동적 제안</div>

                                        <div className="flex flex-col items-center text-center flex-1 justify-center">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-t from-orange-300 to-yellow-200 mb-2 shadow-md flex items-center justify-center relative transform hover:scale-110 transition-transform">
                                                <i className="fa-solid fa-face-smile text-orange-500 text-2xl"></i>
                                            </div>
                                            <p className="text-[15px] text-monimo-black font-bold leading-tight break-keep">
                                                "지금 같은 마음일 때,<br />
                                                <span className="text-monimo-blue">작은 기억 하나</span>를 떠올려 보는 대화가<br />도움이 될 수 있어요.<br />
                                                저와 이야기 해보실래요?"
                                            </p>
                                        </div>

                                        <div className="flex gap-3 mt-auto w-full pt-4">
                                            <button className="flex-1 py-2 rounded-xl bg-gray-50 text-gray-500 text-[15px] font-bold hover:bg-gray-100 transition">다음에</button>
                                            <button className="flex-1 py-2 rounded-xl bg-[#5A2D82] text-white text-[15px] font-bold shadow-md hover:bg-[#4a246d] transition">좋아요!</button>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center h-full gap-8">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center relative w-20">
                                                <div className="absolute w-full h-[2px] bg-gray-300"></div>
                                                <span className="relative z-10 bg-gray-100 text-gray-500 text-[15px] px-2.5 py-0.5 rounded-full border border-gray-200 font-bold whitespace-nowrap">다음에</span>
                                            </div>
                                            <Step4Component />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center relative w-20">
                                                <div className="absolute w-full h-[2px] bg-monimo-blue"></div>
                                                <span className="relative z-10 bg-[#5A2D82] text-white text-[15px] px-2.5 py-0.5 rounded-full shadow-sm font-bold whitespace-nowrap">좋아요!</span>
                                            </div>
                                            <ChatComponent />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-[#7730D0]/10 w-full text-center">
                                    <p className="text-monimo-blue font-bold text-[16px] md:text-[18px] bg-[#7730D0]/5 inline-block px-8 py-2.5 rounded-full shadow-sm">
                                        <i className="fa-solid fa-wand-magic-sparkles mr-3"></i>
                                        다봄이가 능동적으로 개입하여 서비스 완결성과 사용자 체류 시간을 극대화합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionWrapper>
    );
};