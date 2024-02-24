import { Component, OnInit, ElementRef } from '@angular/core';
import { AnimationsService } from 'src/services/animations.service';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private animationService: AnimationsService
  ) {}
  ngOnInit(): void {
    let container = this.el.nativeElement.querySelector(
      '.project-wrapper'
    ) as HTMLElement;
    let images = container.querySelectorAll('.project-img');

    let sectionHeadingWrapper = this.el.nativeElement.querySelector(
      '.work-heading-wrapper'
    ) as HTMLElement;
    let sectionHeading = container.querySelectorAll('.work-heading ');

    let container_1 = this.el.nativeElement.querySelector(
      '.work-para-text'
    ) as HTMLElement;
    let projectText = container_1.querySelectorAll('p');

    this.animationService.animateHeading(sectionHeadingWrapper, sectionHeading);
    this.animationService.animateText(container_1, projectText);
    this.animationService.animateProject(container, images);

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollTrigger.normalizeScroll(true);

    // create the smooth scroller FIRST!
    // let smoother = ScrollSmoother.create({
    //   smooth: 2,
    //   effects: true,
    //   normalizeScroll: true,
    // });

    // // pin box-c when it reaches the center of the viewport, for 300px
    // ScrollTrigger.create({
    //   trigger: ".project-img-wrapper",
    //   pin: true,
    //   start: "center center",
    //   end: "+=300",
    //   markers: true
    // });

    // create the smooth scroller FIRST
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 7,
      normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
      ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
      effects: true,
    });
  }
}
