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
        <ParallaxItem>
          <div style={{ textAlign: 'center' }}>
            <h2
              style={{
                color: 'white',
                background: 'black',
                display: 'inline-block',
                padding: '10px',
                borderRadius: '10px',
              }}
            >
              What a title bloc !
            </h2>
            <p style={{ margin: '20px 0' }}>
              A paragraph very interesting about lot of things
            </p>
            <img
              style={{ borderRadius: '30px' }}
              src="https://images.unsplash.com/photo-1693922876041-7fb22341f33a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3465&q=80"
              width="200"
            />
          </div>
        </ParallaxItem>
        <ParallaxItem>
          <p>Thank you for watching</p>
        </ParallaxItem>
      </ParallaxWrapper>
    </div>
  );
}
