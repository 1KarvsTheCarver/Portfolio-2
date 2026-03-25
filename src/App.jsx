import { useNavigation } from './context/NavigationContext';
import { useMobileDetect } from './hooks/useMobileDetect';

import StoryBook from './components/StoryBook/StoryBook';
import MapCanvas from './components/Map/MapCanvas';
import MuteToggle from './components/shared/MuteToggle/MuteToggle';
import MobileNotice from './components/shared/MobileNotice/MobileNotice';

import FortressPanel from './components/panels/Fortress/FortressPanel';
import TreasuryPanel from './components/panels/Treasury/TreasuryPanel';
import TavernPanel from './components/panels/Tavern/TavernPanel';
import HarborPanel from './components/panels/Harbor/HarborPanel';
import RuinsPanel from './components/panels/Ruins/RuinsPanel';
import LighthousePanel from './components/panels/Lighthouse/LighthousePanel';

export default function App() {
  const { introComplete, setIntroComplete } = useNavigation();
  const { isMobile, dismissed, dismiss } = useMobileDetect();

  return (
    <>
      {isMobile && !dismissed && <MobileNotice onDismiss={dismiss} />}

      {!introComplete && <StoryBook onComplete={() => setIntroComplete(true)} />}

      {introComplete && (
        <MapCanvas>
          <FortressPanel />
          <TreasuryPanel />
          <TavernPanel />
          <HarborPanel />
          <RuinsPanel />
          <LighthousePanel />
        </MapCanvas>
      )}

      <MuteToggle />
    </>
  );
}
