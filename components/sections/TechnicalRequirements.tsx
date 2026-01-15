import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const TechnicalRequirements: React.FC = () => {
    const requirements = [
        {
            title: "Mobile Platform",
            desc: "Unity 기반 개발로 고사양 AR 및 리듬 게임 성능 최적화",
            icon: "📱",
            color: "blue"
        },
        {
            title: "Game Engine",
            desc: "아이템(7종) 장착 시 점수/이펙트가 변화하는 버프 시스템 및 오디오 동기화 알고리즘",
            icon: "🎮",
            color: "purple"
        },
        {
            title: "Cloud Infra",
            desc: "AWS/GCP 기반 서버리스 CMS를 통한 실시간 IP 및 퀘스트 리소스 업데이트",
            icon: "☁️",
            color: "gray"
        },
        {
            title: "AR Engine",
            desc: "GPS 기반 지오펜싱(Geofencing) 및 평면/이미지 인식 기술을 활용한 미션 활성화",
            icon: "🌐",
            color: "green"
        },
        {
            title: "Mission/Item System",
            desc: "NFC 태깅 및 QR 스캔과 연동된 디지털 인벤토리 및 헌터 인증 카드 발행 기능",
            icon: "🎒",
            color: "yellow"
        },
        {
            title: "Offline Integration",
            desc: "비인기 구역 내 NTAG213 기반 NFC 거점 및 모바일 센서 연동 기술",
            icon: "🔗",
            color: "red"
        }
    ];

    return (
        <SectionWrapper id="technical-requirements" className="bg-white relative overflow-hidden" pageNumber={27}>
            <div className="max-w-[1440px] mx-auto px-6 py-12 w-full relative z-10 flex flex-col justify-center h-full">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#DAA520] font-bold tracking-wider text-xl uppercase mb-3 block">Chapter 9. 기술 구현 전략</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight break-keep mb-6">
                            콘텐츠 유연성과 게이밍 성능을 동시에 확보하는<br />
                            <span className="text-monimo-blue">6대 핵심 기술</span>
                        </h2>
                    </FadeIn>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
                    {requirements.map((req, index) => (
                        <FadeIn key={index} delay={index * 100} className="h-full">
                            <div className="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-${req.color}-500/5 rounded-bl-[80px] -z-0 group-hover:bg-${req.color}-500/10 transition-colors`}></div>

                                <div className="text-4xl mb-6">{req.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{req.title}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed break-keep">
                                    {req.desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

            </div>
        </SectionWrapper>
    );
};
