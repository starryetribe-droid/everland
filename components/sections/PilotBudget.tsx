import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const PilotBudget: React.FC = () => {
    return (
        <SectionWrapper id="pilot-budget" className="bg-gray-50 relative overflow-hidden" pageNumber={28}>
            <div className="max-w-[1440px] mx-auto px-6 py-6 w-full relative z-10 flex flex-col justify-center h-full">

                {/* Header */}
                <div className="text-center mb-6">
                    <FadeIn>
                        <span className="text-[#DAA520] font-bold tracking-wider text-lg uppercase mb-2 block">Chapter 10. 파일럿 예산 및 투입규모</span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight break-keep mb-4">
                            성공적인 파일럿 런칭을 위한 <span className="text-monimo-blue">최적의 리소스 계획</span>
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto w-full">

                    {/* Manpower Section */}
                    <FadeIn delay={200} className="h-full">
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg h-full">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="w-1.5 h-6 bg-monimo-blue rounded mr-3"></span>
                                인력 구성 (24.0 MM)
                            </h3>
                            <div className="space-y-3">
                                <ManpowerItem role="PM" count={1} mm={4.0} desc="전 기간 리딩" />
                                <ManpowerItem role="기획" count={2} mm={6.0} desc="전략 4.0 / 상세설계 2.0" />
                                <ManpowerItem role="디자인" count={2} mm={4.0} desc="시스템 2.5 / 콘텐츠 1.5" />
                                <ManpowerItem role="퍼블리셔" count={1} mm={2.0} desc="웹-유니티 가교" />
                                <ManpowerItem role="Unity 개발" count={2} mm={6.0} desc="AR 및 게임 엔진" highlight />
                                <ManpowerItem role="서버 개발" count={1} mm={2.0} desc="데이터 연동" />
                            </div>
                        </div>
                    </FadeIn>

                    {/* Budget Table Section */}
                    <FadeIn delay={400} className="h-full">
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg h-full flex flex-col">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="w-1.5 h-6 bg-[#DAA520] rounded mr-3"></span>
                                소요 예산안 (단위: 만원)
                            </h3>
                            <div className="flex-1 overflow-hidden rounded-xl border border-gray-200">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-200">
                                            <th className="p-3 font-bold text-gray-600 text-xs">항목</th>
                                            <th className="p-3 font-bold text-gray-600 text-xs">상세 내용</th>
                                            <th className="p-3 font-bold text-gray-600 text-xs text-right">비용</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <BudgetItem category="인건비" detail="PM, 기획(2), 디자인(2), 퍼블리셔, Unity(2), 서버" cost={28000} note="24.0 MM" />
                                        <BudgetItem category="콘텐츠 제작" detail="캐릭터 3D/2D 에셋, 아이템 사운드 및 효과" cost={3000} />
                                        <BudgetItem category="인프라/HW" detail="클라우드 서버(AWS), NFC 장치(100개소)" cost={3000} />
                                        <BudgetItem category="운영/테스트" detail="QA, 파일럿 현장 테스트 및 모니터링" cost={2000} />
                                        <BudgetItem category="예비비" detail="긴급 수정 및 IP 라이선스 대응 등)" cost={3600} isLast />
                                    </tbody>
                                    <tfoot>
                                        <tr className="bg-gray-900 text-white">
                                            <td className="p-3 font-bold text-base" colSpan={2}>총계 (Total Budget)</td>
                                            <td className="p-3 font-bold text-lg text-right text-[#DAA520]">39,600</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <p className="text-right text-gray-400 text-[10px] mt-2">* 부가세 별도</p>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </SectionWrapper>
    );
};

const ManpowerItem = ({ role, count, mm, desc, highlight }: { role: string, count: number, mm: number, desc: string, highlight?: boolean }) => (
    <div className={`flex items-center justify-between p-3 rounded-lg ${highlight ? 'bg-blue-50 border border-blue-100' : 'bg-gray-50'}`}>
        <div>
            <div className="flex items-center gap-2 mb-0.5">
                <span className={`font-bold text-base ${highlight ? 'text-monimo-blue' : 'text-gray-800'}`}>{role}</span>
                <span className="text-[10px] font-bold bg-white border border-gray-200 px-1.5 py-0.5 rounded-full text-gray-500">{count}명</span>
            </div>
            <p className="text-xs text-gray-500">{desc}</p>
        </div>
        <div className="text-right">
            <span className={`font-black text-lg ${highlight ? 'text-monimo-blue' : 'text-gray-900'}`}>{mm.toFixed(1)}</span>
            <span className="text-[10px] text-gray-400 font-medium ml-1">MM</span>
        </div>
    </div>
);

const BudgetItem = ({ category, detail, cost, note, isLast }: { category: string, detail: string, cost: number, note?: string, isLast?: boolean }) => (
    <tr className={`hover:bg-gray-50 transition-colors ${isLast ? '' : ''}`}>
        <td className="p-3 font-bold text-gray-800 text-sm">{category}</td>
        <td className="p-3 text-gray-600 text-xs">
            {detail}
            {note && <span className="block text-[10px] text-monimo-blue font-bold mt-0.5">{note}</span>}
        </td>
        <td className="p-3 text-right font-bold text-gray-900 text-sm">{cost.toLocaleString()}</td>
    </tr>
);
