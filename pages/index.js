import { Header } from '../components/Header/Header';
import { ParallaxWrapper } from '../components/ParallaxWrapper/ParallaxWrapper';
import { ParallaxItem } from '../components/ParallaxItem/ParallaxItem';

export default function Scroll() {
  return (
    <div>
      <Header />
      <ParallaxWrapper>
        <ParallaxItem>
          <p>Simple parallax sections</p>
        </ParallaxItem>
        <ParallaxItem>
          <p>Another parallax sections</p>
        </ParallaxItem>
        <ParallaxItem>
          <p>It's amazing</p>
        </ParallaxItem>
      </ParallaxWrapper>
    </div>
  );
}
