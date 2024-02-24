import { Injectable, ElementRef, NgZone } from '@angular/core';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor(private ngZone: NgZone) {
    gsap.registerPlugin(ScrollTrigger);
  }

  animateProject(container: HTMLElement, images: NodeList): void {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: 'restart none none reset',
      },
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.5, {
      xPercent: -100,
      ease: Power2.easeOut,
    });

    tl.from(images, 1.5, {
      xPercent: -100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.easeOut,
    });
  }

  animateText(container: HTMLElement, images: NodeList): void {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: 'restart none none reset',
      },
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.5, {
      yPercent: 100,
      ease: Power2.easeOut,
    });

    tl.from(images, 1.5, {
      yPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.easeOut,
    });
  }

  animateHeading(container: HTMLElement, images: NodeList): void {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: 'restart none none reset',
      },
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.5, {
      xPercent: -100,
      ease: Power2.easeOut,
    });

    tl.from(images, 1.5, {
      xPercent: -100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.easeOut,
    });
  }

  animateOnScroll(element: ElementRef, scaleValue: number = 1.5) {
    this.ngZone.runOutsideAngular(() => {
      // Use setTimeout to ensure that the element is rendered
      setTimeout(() => {
        const targetElement = element.nativeElement;

        gsap.timeline({
          scrollTrigger: {
            trigger: targetElement,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        })
          .fromTo(targetElement, { scale: 1 }, { scale: scaleValue });
      });
    });
  }

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

}
