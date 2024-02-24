import { Component, AfterViewInit, OnDestroy, NgZone, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {

  constructor(private el: ElementRef, private ngZone: NgZone) { }
  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger);

    // text reveal on scroll effect
    const textElements = gsap.utils.toArray('.skill-detail-wrapper ul li');

    textElements.forEach((text: any, index: number) => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 70%',
          end: 'center 60%',
          scrub: true,
          onUpdate: (self) => { // Update the opacity based on the scroll position
            text.style.opacity = self.progress;
          }
        },
        opacity: 0, // Set initial opacity to 0
        stagger: 3.5, // Adjust the stagger value for the delay between elements
        delay: index * 3.5, // Delay each element based on its index
      });
    });


    // image reveal effect
    gsap.registerPlugin(ScrollTrigger);
    let container = document.querySelector(".skill-img-wrapper") as HTMLElement;
    let image = container.querySelector("img") as HTMLElement;

    let tl_1 = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none restart reset"
      }
    });

    tl_1.set(container, { autoAlpha: 1 });
    tl_1.from(container, 1.5, {
      xPercent: -100,
      ease: Power2.easeOut
    });
    tl_1.from(image, 1.5, {
      xPercent: -100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.easeOut
    });

    // text transform effect
    this.ngZone.runOutsideAngular(() => {
      gsap.registerPlugin(ScrollTrigger);

      const textElement = this.el.nativeElement.querySelectorAll('.skill-heading');

      gsap.to(textElement, {
        x: -150,
        ease: 'power1.out', // Adjust the easing function as needed
        scrollTrigger: {
          trigger: '.skill-content', // Replace with the element that triggers the animation
          start: 'top center', // Adjust as needed
          end: 'bottom center', // Adjust as needed
          scrub: 0.5, // Adjust the scrub value for a smoother effect
          onToggle: self => {
            if (self.isActive) {
              gsap.to(textElement, { x: -40, ease: 'power1.inOut' }); // Adjust the easing function as needed
            }
          }
        }
      });
    });

  }
  ngOnDestroy() {
    // Ensure to kill the ScrollTrigger when the component is destroyed
    gsap.killTweensOf('.skill-heading');
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}
