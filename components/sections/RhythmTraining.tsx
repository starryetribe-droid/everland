import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

import rhythmTExpress from '../../src/assets/images/rhythm_game_texpress.png';
import rhythmForestCamp from '../../src/assets/images/rhythm_game_forest_camp.png';

export const RhythmTraining: React.FC = () => {
    const [theme, setTheme] = useState<'texpress' | 'forest'>('texpress');

    return (
        <SectionWrapper id="rhythm-training" className="bg-white relative overflow-hidden" pageNumber={15}>
            <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#7730D0] font-bold tracking-wider text-[15px] uppercase mb-2 block">Journey Phase 2: 대기</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight">
                            지루한 시간을 리듬 미션으로 전환
                        </h2>
                        <p className="mt-4 text-gray-600 font-medium">
                            대기 시간을 활용한 모바일 리듬 게임 플레이로 지루함을 즐거움으로 전환합니다.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 rounded-full shadow-sm border border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#7730D0]">
                                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.146.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700 font-bold text-sm tracking-wide">어트랙션 대기열</span>
                            </div>
                        </div>

                        {/* Theme Toggle */}
                        <div className="mt-6 flex justify-center gap-4">
                            <button
                                onClick={() => setTheme('texpress')}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${theme === 'texpress' ? 'bg-[#7730D0] text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                            >
                                🔥 T-Express Theme
                            </button>
                            <button
                                onClick={() => setTheme('forest')}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${theme === 'forest' ? 'bg-[#2E7D32] text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                            >
                                🌿 Forest Camp Theme
                            </button>
                        </div>
                    </FadeIn>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

                    {/* Visual Area (Left) */}
                    <FadeIn delay={200} className="w-full lg:w-1/2 flex justify-center relative">
                        <div className="relative w-full max-w-[600px] aspect-video flex items-center justify-center">
                            {/* Glowing Background Effect */}
                            <div className={`absolute top-1/2 left-1/2 w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2 rounded-xl blur-[60px] -z-10 transition-colors duration-500 ${theme === 'texpress' ? 'bg-gradient-to-tr from-[#7730D0]/20 to-[#D476AB]/20' : 'bg-gradient-to-tr from-[#2E7D32]/20 to-[#81C784]/20'}`}></div>

                            {/* Main Image */}
                            <img
                                key={theme}
                                src={theme === 'texpress' ? rhythmTExpress : rhythmForestCamp}
                                alt="Rhythm Training Gameplay"
                                className="w-[85%] h-auto object-contain drop-shadow-2xl relative z-0 rounded-3xl border-4 border-white/50 animate-[float_4s_ease-in-out_infinite]"
                            />
                        </div>
                    </FadeIn>

                    {/* Content Steps (Right) */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        {/* Step 1 */}
                        <FadeIn delay={400} className="relative pl-8 border-l-[3px] border-gray-200">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#7730D0] rounded-full ring-4 ring-white"></div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-[#7730D0] font-bold text-sm tracking-wider uppercase mb-1 block">Mission</span>
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">에너지 싱크 (Energy Sync)</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    음악의 비트에 맞춰 터치하며 에너지 싱크를 맞추는 훈련을 수행합니다.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Step 2 */}
                        <FadeIn delay={600} className="relative pl-8 border-l-[3px] border-gray-200">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#D476AB] rounded-full ring-4 ring-white"></div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-[#D476AB] font-bold text-sm tracking-wider uppercase mb-1 block">Tracks</span>
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">'Soda Pop', 'Your Idol'</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    에버랜드 테마송과 인기 K-Pop 트랙을 리듬 게임 버전으로 즐 길 수 있습니다.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Step 3 */}
                        <FadeIn delay={800} className="relative pl-8 border-l-[3px] border-transparent">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ring-4 ring-white"></div>
                            <div className="bg-gradient-to-br from-[#7730D0] to-[#D476AB] p-6 rounded-2xl shadow-lg text-white transform hover:scale-105 transition-transform duration-300">
                                <span className="text-white/80 font-bold text-sm tracking-wider uppercase mb-1 block">Game Logic</span>
                                <h3 className="text-2xl font-extrabold text-white mb-2">높은 점수 = 높은 공격력</h3>
                                <p className="text-white/90 font-medium leading-relaxed">
                                    획득한 점수는 헌터의 공격력으로 변환됩니다. 수동적인 대기 시간이 능동적인 훈련 시간으로 바뀝니다.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};
