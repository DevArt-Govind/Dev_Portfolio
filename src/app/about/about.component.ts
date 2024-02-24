import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { AnimationsService } from 'src/services/animations.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  constructor(private el: ElementRef,
    private animationService: AnimationsService) { }

  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger);


    let container = this.el.nativeElement.querySelector(".about-heading-wrapper") as HTMLElement;
    let sectionHeading = container.querySelectorAll(".about-heading");

    let serviceContainer = this.el.nativeElement.querySelector(".services-heading-wrapper") as HTMLElement;
    let servicesHeading = container.querySelectorAll(".services-heading");

    this.animationService.animateHeading(container, sectionHeading);
    this.animationService.animateHeading(serviceContainer, servicesHeading);



    // text reveal on scroll effect
    const textElements = gsap.utils.toArray('.text');

    textElements.forEach((text: any) => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 70%',
          end: 'center 20%',
          scrub: true,
          onUpdate: (self) => { // Update the opacity based on the scroll position
            text.style.opacity = self.progress;
          }
        },
      });
    });

    // para scale effect
    const allTextPara = gsap.utils.toArray('.about-para-text p');
    // Initialize ScrollTrigger for each text element
    allTextPara.forEach((text: any) => {
      gsap.to(text, {
        opacity: 0, // Set initial opacity to 0
        scrollTrigger: {
          trigger: text, // Use the text element as the trigger
          start: 'top 80%', // Start the animation when the top of the text is 80% in view
          end: 'bottom 20%', // End the animation when the bottom of the text is 20% in view
          scrub: true, // Enable scrubbing for a smoother effect
          onUpdate: (self) => { // Update the opacity based on the scroll position
            text.style.opacity = self.progress;

            const scaleValue = 0.1 + self.progress;
            text.style.transform = `scale(${Math.min(scaleValue, 1)})`;
          }
        }
      });
    });

    // section slide reveal effect

    const slices = this.el.nativeElement.querySelectorAll(".uncover_slice");
    const images = this.el.nativeElement.querySelectorAll(".myimg");

    // Convert NodeList to Array
    const sliceArray = Array.from(slices);
    const imageArray = Array.from(images);

    // Create a GSAP timeline
    const tl = gsap.timeline();

    // Add a label to the timeline
    tl.addLabel('start');

    // Add animations to the timeline
    tl.to(sliceArray, 1, {
      height: 0,
      ease: 'power4.InOut',
      stagger: { amount: 0.33 }
    }, 'start')
      .to(imageArray, 1.2, {
        scale: 1.3,
        ease: 'power4.InOut',
      }, 'start');


  }

}
