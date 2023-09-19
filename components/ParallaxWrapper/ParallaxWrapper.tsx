import { useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '../../helpers/isomorphicEffect';

export const ParallaxWrapper = ({ children }) => {
  const parallaxWrapper = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  let getRatio = (el) =>
    window.innerHeight / (window.innerHeight + el.offsetHeight);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const sections = self.selector('section');
      sections.forEach((section, i) => {
        const bg = section.querySelector('.bg');
        bg.style.backgroundImage = `url(https://picsum.photos/1600/800?//random=${i})`;

        gsap.fromTo(
          bg,
          {
            backgroundPosition: () =>
              i
                ? `50% ${-window.innerHeight * getRatio(section)}px`
                : '50% 0px',
          },
          {
            backgroundPosition: () =>
              `50% ${window.innerHeight * (1 - getRatio(section))}px`,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: () => (i ? 'top bottom' : 'top top'),
              end: 'bottom top',
              scrub: true,
              invalidateOnRefresh: true, // to make it responsive
            },
          }
        );
      });
    }, parallaxWrapper);
    return () => ctx.revert();
  }, []);

  return <div ref={parallaxWrapper}>{children}</div>;
};
