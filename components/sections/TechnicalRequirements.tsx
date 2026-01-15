import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const TechnicalRequirements: React.FC = () => {
    const mainReq = {
        title: "Mobile Platform 구축 및 운영",
        desc: [
            "플랫폼의 서비스 플래닝",
            "효율적인 구축 노하우",
            "사용자 중심의 UX 설계",
            "다양한 서비스 탑재 노하우",
            "성능 최적화 등"
        ],
        icon: "📱",
        color: "blue"
    };

    const subRequirements = [
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
            <div className="max-w-[1440px] mx-auto px-6 py-8 w-full relative z-10 flex flex-col justify-center h-full">

                {/* Header */}
                <div className="text-center mb-8">
                    <FadeIn>
                        <span className="text-[#DAA520] font-bold tracking-wider text-xl uppercase mb-2 block">Chapter 10. 상세 기술 요구사항</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight break-keep mb-4">
                            모바일 플랫폼의 유연성을 확보하고<br />컨트롤하는 필요 기술 요건
                        </h2>
                    </FadeIn>
                </div>

                <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 items-center justify-center flex-1">

                    {/* Mobile Platform */}
                    <FadeIn delay={100} className="w-full">
                        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#7730D0] relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7730D0]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <div className="flex-shrink-0 bg-[#7730D0]/10 p-6 rounded-2xl backdrop-blur-sm">
                                <span className="text-6xl">{mainReq.icon}</span>
                            </div>

                            <div className="flex-1 text-center md:text-left z-10">
                                <h3 className="text-3xl font-black mb-4 text-[#7730D0]">{mainReq.title}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                                    {mainReq.desc.map((item, i) => (
                                        <div key={i} className="flex items-center text-gray-700 font-bold text-lg">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#7730D0] mr-3"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Sub Requirements */}
                    <div className="flex flex-wrap justify-center gap-5 w-full">
                        {subRequirements.map((req, index) => (
                            <FadeIn key={index} delay={200 + (index * 100)} className="w-full md:w-[48%] lg:w-[32%]">
                                <div className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col relative overflow-hidden justify-center items-center text-center">
                                    <div className={`absolute top-0 right-0 w-20 h-20 bg-${req.color}-500/5 rounded-bl-[60px] -z-0 group-hover:bg-${req.color}-500/10 transition-colors`}></div>

                                    <div className="mb-4">
                                        <span className="text-4xl">{req.icon}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">{req.title}</h3>

                                    <p className="text-gray-600 text-sm font-medium leading-relaxed break-keep">
                                        {req.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                </div>

            </div>
        </SectionWrapper>
    );
};
