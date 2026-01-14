import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

import geofenceMap from '../../src/assets/images/geofence_map_isometric_1768309063461.png';
import smartphone from '../../src/assets/images/geofence_smartphone_prototype_new.png';

export const GeofenceSystem: React.FC = () => {
    return (
        <SectionWrapper id="geofence-system" className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" pageNumber={14}>
            <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#7730D0] font-bold tracking-wider text-[15px] uppercase mb-2 block">Journey Phase 1:입장</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight">
                            지오펜싱(Geofencing) 기반, 헌터모드 ON!
                        </h2>
                        <p className="mt-4 text-gray-600 font-medium">
                            사용자의 위치를 인식하여 끊김 없는 몰입 경험을 시작합니다.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 rounded-full shadow-sm border border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#7730D0]">
                                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.146.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700 font-bold text-sm tracking-wide">정문&진입로</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

                    {/* Visual Area (Left) */}
                    <FadeIn delay={200} className="w-full lg:w-1/2 flex justify-center relative">
                        <div className="relative w-full max-w-[600px] aspect-square">
                            {/* Glowing Orbit Ring Effect (Background) */}
                            <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 bg-[#7730D0]/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>

                            {/* Map Image */}
                            <img src={geofenceMap} alt="Theme Park Map with Geofence" className="w-full h-full object-contain drop-shadow-2xl relative z-0" />

                            {/* Floating Smartphone Image (Overlay) */}
                            <div className="absolute top-1/2 right-[-20px] w-[260px] md:w-[360px] transform -translate-y-1/2 translate-x-10 animate-[float_4s_ease-in-out_infinite]">
                                <img src={smartphone} alt="Mission Start Notification" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
                            </div>

                            {/* Connecting Waves/Signals */}
                            <div className="absolute top-1/2 left-1/2 w-[80%] h-[80%] -translate-x-1/2 -translate-y-1/2 border-[3px] border-[#7730D0]/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                        </div>
                    </FadeIn>

                    {/* Content Steps (Right) */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        {/* Step 1 */}
                        <FadeIn delay={400} className="relative pl-8 border-l-[3px] border-gray-200">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#7730D0] rounded-full ring-4 ring-white"></div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-[#7730D0] font-bold text-sm tracking-wider uppercase mb-1 block">Step 1: Entry</span>
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">진입 (Entry)</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    사용자가 테마파크의 가상 경계(Geofence)를 통과하면 시스템이 이를 인식합니다.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Step 2 */}
                        <FadeIn delay={600} className="relative pl-8 border-l-[3px] border-gray-200">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#D476AB] rounded-full ring-4 ring-white"></div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-[#D476AB] font-bold text-sm tracking-wider uppercase mb-1 block">Step 2: Detection</span>
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">감지 (Detection)</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    GPS 및 비콘 센서가 사용자의 정확한 위치를 파악하고, 별도의 실행 없이 앱을 대기 상태로 활성화합니다.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Step 3 */}
                        <FadeIn delay={800} className="relative pl-8 border-l-[3px] border-transparent">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ring-4 ring-white"></div>
                            <div className="bg-gradient-to-br from-[#7730D0] to-[#D476AB] p-6 rounded-2xl shadow-lg text-white transform hover:scale-105 transition-transform duration-300">
                                <span className="text-white/80 font-bold text-sm tracking-wider uppercase mb-1 block">Step 3: Immersion</span>
                                <h3 className="text-2xl font-extrabold text-white mb-2">몰입 (Immersion)</h3>
                                <p className="text-white/90 font-medium leading-relaxed">
                                    'K-Drama 헌터스'의 환영 메시지와 함께 세계관으로의 몰입이 시작됩니다.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </SectionWrapper >
    );
};
