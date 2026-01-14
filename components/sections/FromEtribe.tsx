import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';

export const FromEtribe: React.FC = () => {
  return (
    <SectionWrapper id="from-etribe" className="bg-white relative overflow-hidden" pageNumber={24}>
      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center py-12">

        {/* Header Section */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-monimo-blue font-bold tracking-wider text-xl uppercase mb-3 block"
          >
            Why ETRIBE?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-monimo-black leading-tight break-keep mb-6"
          >
            지속 가능한 <span className="text-monimo-blue">'경험 시스템'</span>을 설계합니다
          </motion.h2>
        </div>

        {/* Contrast Layout Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* NOT Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="bg-gray-100 rounded-3xl p-8 border-2 border-transparent hover:border-gray-200 transition-colors"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-500 font-bold text-xl">✕</span>
              <h3 className="text-2xl font-bold text-gray-500">우리는 지향하지 않습니다</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-500 text-xl font-medium">
                <span className="w-2 h-2 rounded-full bg-gray-400 mr-4"></span>
                단순 시설 제작사
              </li>
              <li className="flex items-center text-gray-500 text-xl font-medium">
                <span className="w-2 h-2 rounded-full bg-gray-400 mr-4"></span>
                일회성 이벤트 대행사
              </li>
            </ul>
            <p className="mt-6 text-black text-lg leading-relaxed">
              본 사업은 일회성 프로모션이 아닙니다.<br />
              플랫폼을 관통하는 사용자 UX와 일관된 브랜딩이 핵심입니다.
            </p>
          </motion.div>

          {/* IS Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 border-2 border-monimo-blue/20 shadow-xl shadow-blue-50/50"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-monimo-blue/10 text-monimo-blue font-bold text-xl">○</span>
              <h3 className="text-2xl font-bold text-gray-900">우리는 지향합니다</h3>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-monimo-blue/10 text-monimo-blue text-base font-bold flex items-center justify-center mt-0.5 mr-4">1</span>
                <span className="text-gray-900 text-xl font-semibold leading-snug">
                  K-IP를 독창적인 <span className="text-monimo-blue">'경험 시스템'</span>으로 설계하는<br />
                  전략적 디지털 파트너
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-monimo-blue/10 text-monimo-blue text-base font-bold flex items-center justify-center mt-0.5 mr-4">2</span>
                <span className="text-gray-900 text-xl font-semibold leading-snug">
                  에버랜드의 레거시 자산을 강력한<br />
                  <span className="text-monimo-blue">'IP 증폭 장치'</span>로 재해석하는 전문 조직
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Conclusion Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl text-gray-600 font-medium leading-relaxed max-w-5xl mx-auto break-keep">
            이트라이브는 <span className="text-gray-900 font-bold">플랫폼 전문성</span>과 <span className="text-gray-900 font-bold">UX 통찰력</span>을 바탕으로,<br className="hidden md:block" />
            에버랜드의 물리적 공간을 디지털 세계관으로 연결하는 <span className="text-monimo-blue font-bold">유일한 파트너</span>입니다.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
