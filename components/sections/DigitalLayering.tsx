import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

import digitalLayeringImage from '../../src/assets/images/digital_layering_combined.png';

export const DigitalLayering: React.FC = () => {
    return (
        <SectionWrapper id="digital-layering" className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" pageNumber={10}>
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-8 max-w-3xl">
                    <FadeIn>
                        <span className="text-[#7730D0] font-bold tracking-wider text-lg uppercase mb-2 block">Sustainable Innovation</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight mb-4">
                            데이터와 공간이 결합된,<br /><span className="text-[#7730D0]">하이퍼 커넥티드 플랫폼</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed">
                            기존의 물리적 공간과 시설은 그대로 유지하면서,<br />
                            <span className="text-[#7730D0] font-bold">Digital Content Layer</span>를 통해 K-IP를 무한히 교체하고 확장합니다.
                        </p>
                    </FadeIn>
                </div>

                {/* Static Image Display */}
                <div className="relative w-full max-w-[700px]">
                    <FadeIn delay={200}>
                        <div className="relative w-full">
                            <img
                                src={digitalLayeringImage}
                                alt="Digital Layering Structure: Physical, Sensor, and Content Layers"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </FadeIn>
                </div>

            </div>
        </SectionWrapper>
    );
};
