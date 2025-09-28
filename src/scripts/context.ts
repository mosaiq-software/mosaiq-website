import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const smoother = ScrollSmoother.create({
    smooth: 1.2,
    effects: true,
});

ScrollTrigger.addEventListener('refresh', () => smoother.refresh());

export { smoother };
