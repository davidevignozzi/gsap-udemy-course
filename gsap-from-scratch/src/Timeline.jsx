import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

/** VANILLA JS
 *
 * const tl = gsap.timeline
 *
 * tl
 * .to(
 *      'img1', {
 *          autoAlpha: 1,
 *          duration: 1
 *      }
 * )
 * .to(
 *      'img2', {
 *          autoAlpha: 1,
 *          duration: 1
 *      }
 * )
 * .to(
 *      'img3', {
 *          autoAlpha: 1,
 *          duration: 1
 *      }
 * )
 */

const Timeline = () => {
  const containerRef = useRef();
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();
  const TL = useRef();

  /**
   * The useLayoutEffect() hook runs immediately AFTER React has performed all DOM mutations.
   * It's a very handy hook for animation because it ensures that your elements are rendered
   * and ready to be animated.
   *
   */
  useLayoutEffect(() => {
    /**
     * Create our context. != React Context
     *
     * This function is invoked immediately and all GSAP animations and ScrollTriggers
     * created during the execution of this function get recorded
     * so we can revert() them later (cleanup)
     */
    const ctx = gsap.context(() => {
      TL.current = gsap
        .timeline()
        .to(image1Ref.current, {
          autoAlpha: 1,
          duration: 1
        })
        .to(image2Ref.current, {
          autoAlpha: 1,
          duration: 1
        })
        .to(image3Ref.current, {
          autoAlpha: 1,
          duration: 1
        });
    }, containerRef); // <- IMPORTANT Scopes Selector => Will be the container or root element

    return () => {
      /**
       * cleanup code (optional)
       */
      ctx.revert();
    };
  }, []); // <- empty dependency Array so it doesn't re-run on every render!

  return (
    <div ref={containerRef}>
      <a href="https://vitejs.dev" target="_blank">
        <img
          ref={image1Ref}
          src={viteLogo}
          alt="Vite logo"
          className="logo vite img1"
          style={{ visibility: 'hidden' }}
        />
      </a>
      <a href="https://react.dev" target="_blank">
        <img
          ref={image2Ref}
          src={reactLogo}
          alt="React logo"
          className="logo react img2"
          style={{ visibility: 'hidden' }}
        />
      </a>
      <a href="https://vitejs.dev" target="_blank">
        <img
          ref={image3Ref}
          src={viteLogo}
          alt="Vite logo"
          className="logo vite img3"
          style={{ visibility: 'hidden' }}
        />
      </a>
    </div>
  );
};

export default Timeline;