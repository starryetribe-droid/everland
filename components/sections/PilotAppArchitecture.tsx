import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const PilotAppArchitecture: React.FC = () => {
    return (
        <SectionWrapper id="pilot-app-architecture" className="bg-gray-50 relative overflow-hidden" pageNumber={26}>
            <div className="max-w-[1440px] mx-auto px-6 py-12 w-full relative z-10 flex flex-col justify-center h-full">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-monimo-blue font-bold tracking-wider text-xl uppercase mb-3 block">Chapter 9. 기술 구현 전략</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight break-keep mb-6">
                            레거시 프리: <br className="md:hidden" />
                            신속한 검증을 위한 <span className="text-monimo-blue">독립형 파일럿 플랫폼</span>
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto w-full">

                    {/* Strategy 1: Independent App */}
                    <FadeIn delay={200} className="h-full">
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100 h-full flex flex-col hover:shadow-2xl transition-shadow relative overflow-hidden group">
                            {/* Decorative Background Element */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-monimo-blue/5 rounded-bl-[100px] -z-0 transition-all duration-700 group-hover:scale-150"></div>

                            <div className="relative z-10 flex-1 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-monimo-blue text-3xl mb-6 shadow-inner">
                                    <i className="fa-solid fa-rocket"></i>
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-2">Ever play</h3>
                                <p className="text-gray-500 font-bold mb-8 uppercase tracking-wide text-sm">Separate Pilot App</p>

                                <div className="bg-gray-50 rounded-2xl p-6 w-full border border-gray-100 mb-6">
                                    <p className="text-gray-700 font-medium leading-relaxed">
                                        기존 에버랜드 슈퍼앱과의<br />
                                        <span className="text-red-500 font-bold">간섭을 최소화</span>하기 위한<br />
                                        별도 앱 구축 전략
                                    </p>
                                </div>

                                <ul className="text-left space-y-3 w-full max-w-sm mx-auto">
                                    <li className="flex items-center text-gray-600 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-monimo-blue mr-3"></div>
                                        개발 기간 및 리스크 최소화
                                    </li>
                                    <li className="flex items-center text-gray-600 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-monimo-blue mr-3"></div>
                                        독립적인 유저 데이터 수집 용이
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Strategy 2: Modular Architecture */}
                    <FadeIn delay={400} className="h-full">
                        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-[2.5rem] p-10 shadow-xl border border-gray-800 h-full flex flex-col hover:shadow-2xl transition-shadow relative overflow-hidden text-white group">
                            {/* Decorative Background Element */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#DAA520]/20 rounded-bl-[100px] -z-0 transition-all duration-700 group-hover:scale-150"></div>

                            <div className="relative z-10 flex-1 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-[#DAA520] text-3xl mb-6 shadow-inner border border-gray-600">
                                    <i className="fa-solid fa-layer-group"></i>
                                </div>
                                <h3 className="text-2xl font-black text-white mb-2">Modular Hybrid Cluster</h3>
                                <p className="text-gray-400 font-bold mb-8 uppercase tracking-wide text-sm">Flexible Architecture</p>

                                <div className="bg-white/5 rounded-2xl p-6 w-full border border-white/10 mb-6 backdrop-blur-sm">
                                    <p className="text-gray-300 font-medium leading-relaxed">
                                        IP 콘텐츠 업데이트 속도에<br />
                                        <span className="text-[#DAA520] font-bold">즉각 대응</span>하기 위한<br />
                                        모듈형 하이브리드 아키텍처
                                    </p>
                                </div>

                                <ul className="text-left space-y-3 w-full max-w-sm mx-auto">
                                    <li className="flex items-center text-gray-300 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-[#DAA520] mr-3"></div>
                                        시즌별 테마 교체 유연성 확보
                                    </li>
                                    <li className="flex items-center text-gray-300 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-[#DAA520] mr-3"></div>
                                        유니티(Unity) 엔진 기반 고품질 렌더링
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </SectionWrapper>
    );
};
