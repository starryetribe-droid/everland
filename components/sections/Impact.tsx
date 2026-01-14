import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';

export const Impact: React.FC = () => {
  return (
    <SectionWrapper id="impact" className="bg-monimo-blue" pageNumber={24}>
      <div className="max-w-[1440px] mx-auto px-8 text-center w-full text-white">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16">기대 효과</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {/* Card 1: 사전 예방 (Originally Card 3) */}
          <FadeIn delay={100} className="h-full">
            <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-12 border border-white/20 hover:bg-white/20 transition duration-300 flex flex-col justify-center min-h-[280px]">
              <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight break-keep">사전 예방</p>
              <p className="text-purple-100 text-base md:text-lg font-medium opacity-90 leading-relaxed">
                이상 징후 감지 시 능동적 개입으로<br className="hidden lg:block" /> 건강 관리 미션 추천
              </p>
            </div>
          </FadeIn>

          {/* Card 2: 초개인화 완성 (Originally Card 1) */}
          <FadeIn delay={200} className="h-full">
            <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-12 border border-white/20 hover:bg-white/20 transition duration-300 flex flex-col justify-center min-h-[280px]">
              <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight break-keep">초개인화 완성</p>
              <p className="text-purple-100 text-base md:text-lg font-medium opacity-90 leading-relaxed">
                대화 로그를 통한 맥락 파악,<br className="hidden lg:block" /> 신체·멘탈 결합 데이터로 상품·서비스 적시 제공
              </p>
            </div>
          </FadeIn>

          {/* Card 3: 플랫폼 락인 (Originally Card 2) */}
          <FadeIn delay={300} className="h-full">
            <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-12 border border-white/20 hover:bg-white/20 transition duration-300 flex flex-col justify-center min-h-[280px]">
              <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight whitespace-nowrap">플랫폼 락인(Lock-in)</p>
              <p className="text-purple-100 text-base md:text-lg font-medium opacity-90 leading-relaxed">
                신체·멘탈 통합 관리로<br className="hidden lg:block" /> 고객 접점 확대 및 서비스 몰입도 향상
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
};
