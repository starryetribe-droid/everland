import React from 'react';
import { Navbar } from './components/Navigation';
import { DemonHuntersConcept } from './components/sections/DemonHuntersConcept';
import { DigitalRelay } from './components/sections/DigitalRelay';

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
import { ExpectedEffects } from './components/sections/ExpectedEffects';
import { NfcKeyring } from './components/sections/NfcKeyring';
import { FromEtribe } from './components/sections/FromEtribe';
import { DualTrackStrategy } from './components/sections/DualTrackStrategy';
import { PilotAppArchitecture } from './components/sections/PilotAppArchitecture';
import { TechnicalRequirements } from './components/sections/TechnicalRequirements';
import { PilotBudget } from './components/sections/PilotBudget';

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

      <main className="h-full w-full overflow-y-scroll scroll-smooth no-scrollbar snap-y snap-mandatory">
        <Hero />
        <Overview />

        {/* Interim: Background (Page 2) */}
        <InterimSection
          id="interim-bg"
          title="Trend"
          description="글로벌 K-콘텐츠의 물결"
          pageNumber={2}
          theme="blue"
          label="Chapter 1"
        />
        <ProposalBackground />

        {/* Interim: Objective (Page 4) */}
        <InterimSection
          id="interim-obj"
          title="Objective"
          description="K-콘텐츠 경험의 허브"
          pageNumber={4}
          theme="blue"
          label="Chapter 2"
        />
        <ProposalObjective />

        {/* Interim: Market (Page 6) */}
        <InterimSection
          id="interim-mkt"
          title="Market Insight"
          description="시장 현황과 사업 필요성"
          pageNumber={6}
          theme="blue"
          label="Chapter 3"
        />
        <MarketEnvironment />

        <GlobalCases />

        {/* Interim: Global Cases (Page 9) */}
        <InterimSection
          id="interim-global"
          title="Strategy"
          description="하이퍼 커넥티드 플랫폼"
          pageNumber={9}
          theme="blue"
          label="Chapter 4"
        />

        <DigitalLayering />
        <ServiceModelComparison />
        <SeasonRotation />



        {/* Interim: Concept (Page 13) */}
        <InterimSection
          id="interim-concept"
          title="Concept"
          description="글로벌 K-콘텐츠 몰입형 플랫폼"
          pageNumber={13}
          theme="blue"
          label="Chapter 5"
        />

        {/* New Page 14 */}
        <DemonHuntersConcept />

        <HuntersJourney />
        <GeofenceSystem />

        {/* New Page 17 */}
        <DigitalRelay />

        <RhythmTraining />
        <SocialChallenge />
        <NfcKeyring />
        <SingAlongAttack />
        <FinalePerformance />
        <ExpectedEffects />
        <FromEtribe />
        <DualTrackStrategy />
        <PilotAppArchitecture />
        <TechnicalRequirements />
        <PilotBudget />



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

