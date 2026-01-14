import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';

export const Roadmap: React.FC = () => {
  const steps = [
    {
      phase: "Phase 1. 기반 구축 (Foundation)",
      title: "AI 다봄(DABOM) 런칭 & 능동적 개입 구현",
      desc: "기존의 수동적 기록 방식을 탈피하고, 먼저 말을 거는 '능동형 에이전트'를 도입하여 체류 시간을 확보합니다.",
      items: [
        "능동형 대화(Proactive Chat) 엔진 탑재",
        "감정 태깅 고도화 (단순 선택 → 대화형 맥락 수집)",
        "기본 멘탈 케어 콘텐츠(명상, 사운드) 라이브러리 연동"
      ],
      icon: "fa-robot",
      color: "bg-monimo-blue"
    },
    {
      phase: "Phase 2. 연결 및 확장 (Integration)",
      title: "데이터 결합 & Brain Fitness 연동",
      desc: "삼성 헬스의 신체 데이터와 멘탈 데이터를 결합하고, 인지 훈련 게임을 통해 서비스 완결성을 높입니다.",
      items: [
        "신체(수면/활동) x 멘탈 상관관계 분석 모델 적용",
        "Brain Fitness (인지 강화 게임 6종) 서비스 탑재",
        "개인 맞춤형 미션(산책, 기억 회상 등) 추천 알고리즘 고도화"
      ],
      icon: "fa-puzzle-piece",
      color: "bg-purple-600"
    },
    {
      phase: "Phase 3. 생태계 완성 (Evolution)",
      title: "초개인화 헬스케어 생태계 & BM 확장",
      desc: "음성 대화(Speech-to-Speech)로 인터페이스를 고도화하고, 보험 및 의료 전문가와 연계된 실질적 가치를 제공합니다.",
      items: [
        "Speech-to-Speech AI (음성 대화) 인터페이스 적용",
        "고위험군 감지 시 전문 심리상담/병원 연계 프로세스 구축",
        "라이프 로그 기반 맞춤형 상품 추천 (Cross-selling)"
      ],
      icon: "fa-notes-medical",
      color: "bg-orange-500"
    }
  ];

  return (
    <SectionWrapper id="roadmap" className="bg-white" pageNumber={25}>
      <div className="max-w-[1440px] mx-auto px-6 w-full">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-monimo-blue font-bold tracking-wider text-[15px] uppercase mb-2 block">Roadmap</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-monimo-black">추진 로드맵</h2>
            <p className="text-monimo-gray font-medium text-lg md:text-xl">AI 멘탈케어 서비스 고도화 계획</p>
          </div>
        </FadeIn>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 100} className={`relative flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Empty Space for Desktop Alignment */}
                <div className="hidden md:block w-1/2"></div>

                {/* Center Node */}
                <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 ${step.color} text-white text-2xl`}>
                  <i className={`fa-solid ${step.icon}`}></i>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className={`bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-soft hover:shadow-floating transition-shadow duration-300 relative group inline-block w-full`}>

                    {/* Arrow for Desktop */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-r border-gray-100 rotate-45 ${index % 2 === 0 ? '-right-2.5 border-l-0 border-b-0' : '-left-2.5 border-t-0 border-r-0 border-l border-b'}`}></div>

                    <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <span className="text-[16px] font-bold text-monimo-blue uppercase tracking-wide">{step.phase}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-monimo-black mb-3 leading-tight break-keep">
                      {step.title}
                    </h3>

                    <p className="text-monimo-gray text-[16px] md:text-[17px] font-medium leading-relaxed mb-6 break-keep">
                      {step.desc}
                    </p>

                    <ul className={`space-y-3 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-[15px] md:text-[16px] font-bold text-gray-700 bg-gray-50 px-5 py-2.5 rounded-2xl w-fit border border-gray-100 whitespace-nowrap overflow-hidden">
                          <div className={`w-2 h-2 rounded-full ${step.color} shrink-0`}></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};