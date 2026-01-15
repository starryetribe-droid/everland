import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';
import { motion } from 'framer-motion';

export const DualTrackStrategy: React.FC = () => {
    return (
        <SectionWrapper id="dual-track-strategy" className="bg-white relative overflow-hidden" pageNumber={25}>
            <div className="max-w-[1440px] mx-auto px-6 py-12 w-full relative z-10 flex flex-col gap-16">

                {/* 1. Analysis & Insight */}
                <div className="text-center">
                    <FadeIn>
                        <span className="text-[#DAA520] font-bold tracking-wider text-xl uppercase mb-3 block">Analysis & Insight</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight break-keep mb-6">
                            "대기 시간을 콘텐츠로, <br className="hidden md:block" />동선을 보물찾기로 바꾸는 공간 혁신"
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
                            {/* Analysis */}
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-gray-200 inline-block px-4 py-1 rounded-lg">분석 (Analysis)</h3>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    <span className="text-red-500 font-bold">4대 핵심 시설</span>(T익스프레스, 판다월드 등)의 극심한 병목 현상<br />
                                    vs<br />
                                    <span className="text-gray-400 font-bold">비인기 구간</span>의 유휴화 및 동선 불균형
                                </p>
                            </div>
                            {/* Insight */}
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-bl-full"></div>
                                <h3 className="text-2xl font-bold text-monimo-blue mb-4 bg-blue-100 inline-block px-4 py-1 rounded-lg">인사이트 (Insight)</h3>
                                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                    인기 구역은 <span className="text-red-500 font-bold">'전투(Battle)'</span>로 대기 시간을 가치화,<br />
                                    비인기 구역은 <span className="text-green-600 font-bold">'탐험(Exploration)'</span>으로 동선 분산<br />
                                    <span className="block mt-2 text-2xl font-black text-monimo-blue">👉 '듀얼 트랙(Dual-Track)' 시스템 구축</span>
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* 2. The Dual-Track Strategy */}
                <div>
                    <FadeIn delay={200}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">2. 듀얼 트랙 퀘스트 구조 (The Dual-Track Strategy)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Track A */}
                            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="absolute top-0 right-0 bg-red-500 text-white font-bold px-4 py-2 rounded-bl-2xl">Track A</div>
                                <h4 className="text-3xl font-black text-red-600 mb-2">Battle Zone</h4>
                                <p className="text-gray-500 font-bold mb-6">4대 인기 어트랙션 대기줄</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="w-auto px-2 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold mr-3 mt-0.5 text-sm whitespace-nowrap">대상</span>
                                        <span className="text-gray-700 font-medium">T익스프레스, 판다월드, 사파리, 로스트밸리</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-auto px-2 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold mr-3 mt-0.5 text-sm whitespace-nowrap">미션</span>
                                        <span className="text-gray-700 font-medium">수집 아이템 기반 점수 버프</span>
                                    </li>
                                </ul>
                            </div>
                            {/* Track B */}
                            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl border border-green-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="absolute top-0 right-0 bg-green-600 text-white font-bold px-4 py-2 rounded-bl-2xl">Track B</div>
                                <h4 className="text-3xl font-black text-green-700 mb-2">Exploration Zone</h4>
                                <p className="text-gray-500 font-bold mb-6">테마별 비인기 동선 / 유휴지</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="w-auto px-2 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold mr-3 mt-0.5 text-sm whitespace-nowrap">대상</span>
                                        <span className="text-gray-700 font-medium">글로벌페어 뒷길, 매직랜드 외곽, 장미원 산책로 등</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-auto px-2 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold mr-3 mt-0.5 text-sm whitespace-nowrap">미션</span>
                                        <span className="text-gray-700 font-medium">NFC 태깅 및 AR 인식을 통한 아이템 수집 (보물찾기)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* 3. Spatial Scenarios */}
                <div>
                    <FadeIn delay={400}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">3. 공간별 캐릭터 & 아이템 시나리오 (Spatial Scenarios)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {/* Card 1 */}
                            <ScenarioCard
                                theme="글로벌페어"
                                items="김밥"
                                mission="헌터 입문 및 지도 활성화 (NFC 태깅)"
                                color="bg-blue-50 border-blue-200"
                                icon="🗺️"
                            />
                            {/* Card 2 */}
                            <ScenarioCard
                                theme="주토피아"
                                items="더피 / 수지"
                                mission="비인기 동선 내 AR 수집으로 더피와 수지 캐릭터 수집"
                                color="bg-green-50 border-green-200"
                                icon="🦁"
                            />
                            {/* Card 3 */}
                            <ScenarioCard
                                theme="매직랜드"
                                items="언월도 / 신칼"
                                mission="대기줄 벽면 AR 정화 게임 (간단한 터치 액션)"
                                color="bg-purple-50 border-purple-200"
                                icon="🔮"
                            />
                            {/* Card 4 */}
                            <ScenarioCard
                                theme="아메리칸 어드벤처"
                                items="순대 / 설렁탕"
                                mission="아이템 수집"
                                color="bg-red-50 border-red-200"
                                icon="🎸"
                            />
                            {/* Card 5 */}
                            <ScenarioCard
                                theme="유러피안 어드벤처"
                                items="사인검"
                                mission="아이템 최종 수집 및 헌터 인증 카드 발급"
                                color="bg-yellow-50 border-yellow-200"
                                icon="⚔️"
                            />
                        </div>
                    </FadeIn>
                </div>

                {/* 4. The Flow */}
                <div>
                    <FadeIn delay={600}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">4. 퀘스트 프로세스 (The Flow)</h3>
                        <div className="relative flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto py-8">
                            {/* Connecting Line */}
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 hidden md:block"></div>

                            {/* Steps */}
                            <FlowStep step="01" title="안 내" desc="미션 수신" />
                            <FlowStep step="02" title="빌드업" desc="아이템 수집 (탐험)" />
                            <FlowStep step="03" title="핵심 전장" desc="보스 레이드 (게임)" highlight />
                            <FlowStep step="04" title="최종 보상" desc="리워드 획득" />
                        </div>
                    </FadeIn>
                </div>

                {/* 5. Expected Effects */}
                <div className="bg-gray-900 text-white rounded-3xl p-10 text-center">
                    <FadeIn delay={800}>
                        <h3 className="text-xl font-bold text-[#DAA520] uppercase tracking-widest mb-6">Expected Effects</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <div className="text-4xl mb-4">⚖️</div>
                                <h4 className="text-lg font-bold mb-2">혼잡도 최적화</h4>
                                <p className="text-gray-400 text-sm">파크 전체 유동 인구 균형 배분</p>
                            </div>
                            <div>
                                <div className="text-4xl mb-4">🍜</div>
                                <h4 className="text-lg font-bold mb-2">부가 매출 창출</h4>
                                <p className="text-gray-400 text-sm">F&B 메뉴(김밥, 설렁탕 등) 연계 미션</p>
                            </div>
                            <div>
                                <div className="text-4xl mb-4">💳</div>
                                <h4 className="text-lg font-bold mb-2">재방문 로열티</h4>
                                <p className="text-gray-400 text-sm">'인증 카드' 수집 욕구 자극</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>

            </div>
        </SectionWrapper>
    );
};

// Helper Components
const ScenarioCard = ({ theme, items, mission, color, icon }: { theme: string, items: string, mission: string, color: string, icon: string }) => (
    <div className={`p-6 rounded-2xl border ${color} h-full flex flex-col hover:-translate-y-1 transition-transform`}>
        <div className="text-3xl mb-3">{icon}</div>
        <h4 className="font-bold text-gray-900 text-lg mb-2">{theme}</h4>
        <div className="text-sm font-semibold text-gray-500 mb-3 bg-white/50 inline-block px-2 py-1 rounded">{items}</div>
        <p className="text-sm text-gray-700 leading-snug">{mission}</p>
    </div>
);

const FlowStep = ({ step, title, desc, highlight }: { step: string, title: string, desc: string, highlight?: boolean }) => (
    <div className="flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-lg w-full md:w-48 mb-4 md:mb-0 relative z-10">
        <span className={`text-xs font-bold px-2 py-1 rounded-full mb-2 ${highlight ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500'}`}>Step {step}</span>
        <h4 className={`text-xl font-black mb-1 ${highlight ? 'text-red-600' : 'text-gray-800'}`}>{title}</h4>
        <p className="text-gray-500 text-sm font-medium">{desc}</p>
    </div>
);
