import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';

export const KeyPillars: React.FC = () => {
  const pillars = [
    {
      id: "01",
      title: "능동형 케어",
      engTitle: "Active Care",
      desc: "데이터 기반으로 이상징후 감지 시\n즉각 개입하여 선제적으로 서비스 제공",
      keyPoint: "사용자 탐색 과정 없는 능동적 개입",
      icon: "fa-hand-holding-heart",
      color: "from-[#7730D0] to-[#D476AB]",
      bgAccent: "bg-[#7730D0]/5",
      textAccent: "text-[#7730D0]"
    },
    {
      id: "02",
      title: "심층 공감형 대화 도입",
      engTitle: "Empathic Dialogue",
      desc: "단순한 감정 태깅을 넘어\n맥락을 짚을 수 있는 대화 로그 데이터 확보",
      keyPoint: "멘탈 데이터의 질적 향상",
      icon: "fa-comments",
      color: "from-purple-400 to-purple-600",
      bgAccent: "bg-purple-50",
      textAccent: "text-purple-600"
    },
    {
      id: "03",
      title: "신체·멘탈의 유기적 연결",
      engTitle: "Last Mile Completion",
      desc: "신체와 멘탈 데이터를 연결하여\n빈틈없는 통합 건강 관리 실현",
      keyPoint: "신체·멘탈 통합 케어로\n서비스 연결성 확보",
      icon: "fa-link",
      color: "from-orange-400 to-orange-600",
      bgAccent: "bg-orange-50",
      textAccent: "text-orange-600"
    }
  ];

  return (
    <SectionWrapper id="key-pillars" className="bg-monimo-bg" pageNumber={18}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <FadeIn>
            <span className="text-monimo-blue font-bold tracking-wider text-[15px] uppercase mb-2 block">Core Strategy</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-monimo-black">핵심 전략</h2>
            <p className="text-monimo-gray font-medium text-lg md:text-xl">고객 경험 개선을 위한 3단계 접근법</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <div className="group relative h-full bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-soft hover:shadow-floating transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col min-h-[400px]">

                {/* Background Number */}
                <div className="absolute -right-4 -top-4 text-[100px] md:text-[120px] font-extrabold text-gray-50/80 leading-none select-none group-hover:text-gray-100 transition-colors duration-500 font-sans z-0 pointer-events-none">
                  {pillar.id}
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white text-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <i className={`fa-solid ${pillar.icon}`}></i>
                  </div>

                  {/* Titles */}
                  <div className="mb-4">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-[15px] font-bold ${pillar.bgAccent} ${pillar.textAccent} mb-3 shadow-sm`}>
                      {pillar.engTitle}
                    </span>
                    <h3 className="text-2xl font-extrabold text-monimo-black leading-tight break-keep">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-monimo-gray text-[16px] md:text-lg leading-relaxed mb-8 break-keep whitespace-pre-line font-medium">
                    {pillar.desc}
                  </p>

                  {/* Bottom Key Point */}
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-full ${pillar.bgAccent} flex items-center justify-center ${pillar.textAccent} shrink-0 shadow-sm`}>
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <p className="text-monimo-black font-extrabold text-[15px] md:text-[16px] leading-tight break-keep">
                        {pillar.keyPoint}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};