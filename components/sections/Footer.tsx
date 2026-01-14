import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const Footer: React.FC = () => {
  return (
    <SectionWrapper id="footer" className="bg-monimo-bg">
      <div className="h-full flex flex-col items-center justify-between text-center py-20">
        <div className="flex-grow flex flex-col justify-center items-center w-full">
          <FadeIn>
            <div className="mb-8">
              <h2 className="text-5xl md:text-7xl font-extrabold text-monimo-black tracking-tight mb-6">
                감사합니다
              </h2>
              <p className="text-xl md:text-2xl text-monimo-gray font-medium">
                Thank You
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={200} className="w-full">
          <div className="pb-8">
            <p className="text-monimo-gray text-sm mb-2 font-medium">Copyright 2025 © ETRIBE CORP. ALL RIGHT RESERVED</p>
            <p className="text-gray-400 text-xs">이트라이브 X 고려대 마음건강연구소</p>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
};