import React from 'react';
import { Navbar } from './components/Navigation';

// import { Expertise } from './components/sections/Expertise';
import { Hero } from './components/sections/Hero';
import { ProposalBackground } from './components/sections/ProposalBackground';
import { ProposalObjective } from './components/sections/ProposalObjective';
import { MarketEnvironment } from './components/sections/MarketEnvironment';
import { GlobalCases } from './components/sections/GlobalCases';
import { ServiceModelComparison } from './components/sections/ServiceModelComparison';
import { DigitalLayering } from './components/sections/DigitalLayering';
import { SeasonRotation } from './components/sections/SeasonRotation';
import { HuntersJourney } from './components/sections/HuntersJourney';
import { GeofenceSystem } from './components/sections/GeofenceSystem';
import { RhythmTraining } from './components/sections/RhythmTraining';
import { SocialChallenge } from './components/sections/SocialChallenge';
import { SingAlongAttack } from './components/sections/SingAlongAttack';
import { FinalePerformance } from './components/sections/FinalePerformance';
import { NfcKeyring } from './components/sections/NfcKeyring';
// import { B2BPivot } from './components/sections/B2BPivot';
import { InterimSection } from './components/sections/InterimSection';

// import { CoreService } from './components/sections/CoreService';
import { KeyPillars } from './components/sections/KeyPillars';

import { StrategyOne } from './components/sections/StrategyOne';
// import { StrategyTwo } from './components/sections/StrategyTwo';
// import { StrategyThree } from './components/sections/StrategyThree';
// import { Scenarios } from './components/sections/Scenarios';
// import { DabomTCareIndex } from './components/sections/DabomTCareIndex';
// import { ClinicalEvidence } from './components/sections/ClinicalEvidence';
// import { MentalHealthCheckup } from './components/sections/MentalHealthCheckup';
// import { BrainFitness } from './components/sections/BrainFitness';

import { Footer } from './components/sections/Footer';
// import { ConceptPivot } from './components/sections/ConceptPivot';
// import { Gamification } from './components/sections/Gamification';
// import { DigitalDetox } from './components/sections/DigitalDetox';
// import { RitualLife } from './components/sections/RitualLife';
// import { RoutineScenarios } from './components/sections/RoutineScenarios';

import { Overview } from './components/sections/Overview';

function App() {
  return (
    <div className="relative h-screen w-full bg-monimo-bg text-monimo-black font-sans overflow-hidden">
      <Navbar />

      <main className="h-full w-full overflow-y-scroll scroll-smooth no-scrollbar">
        <Hero />
        <Overview />

        {/* Interim: Background (Page 2) */}
        <InterimSection
          id="interim-bg"
          title="Background"
          description="위기의 에버랜드, 변화의 시작"
          pageNumber={2}
          theme="blue"
          label="Chapter 1"
        />
        <ProposalBackground />

        {/* Interim: Objective (Page 4) */}
        <InterimSection
          id="interim-obj"
          title="Objective"
          description="단순 테마파크를 넘어\n무한한 경험의 플랫폼으로"
          pageNumber={4}
          theme="blue"
          label="Chapter 2"
        />
        <ProposalObjective />

        {/* Interim: Market (Page 6) */}
        <InterimSection
          id="interim-mkt"
          title="Market Analysis"
          description="글로벌 K-IP 트렌드와\n새로운 기회"
          pageNumber={6}
          theme="blue"
          label="Chapter 3"
        />
        <MarketEnvironment />

        {/* Interim: Global Cases (Page 8) */}
        <InterimSection
          id="interim-global"
          title="Global Insight"
          description="성공적인 디지털 트랜스포메이션 사례"
          pageNumber={8}
          theme="blue"
          label="Chapter 4"
        />
        <GlobalCases />

        <DigitalLayering />
        <ServiceModelComparison />
        <SeasonRotation />

        {/* Interim: Journey (Page 13) */}
        <InterimSection
          id="interim-journey"
          title="Hunter's Journey"
          description="새롭게 정의되는\n에버랜드에서의 경험"
          pageNumber={13}
          theme="blue"
          label="Chapter 5"
        />
        <HuntersJourney />
        <GeofenceSystem />
        <RhythmTraining />
        <SocialChallenge />
        <NfcKeyring />
        <SingAlongAttack />
        <FinalePerformance />


        {/* End of Active Content */}
        {/* <ConceptPivot /> */}
        {/* <Gamification /> */}
        {/* <DigitalDetox /> */}
        {/* <RitualLife /> */}
        <Footer />
      </main>
    </div>
  );
}

export default App;

