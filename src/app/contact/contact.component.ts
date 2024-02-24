import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { gsap } from 'gsap/gsap-core';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const text = document.querySelector('.get-touch');

    gsap.to(text, {
      duration: 4,
      rotation: 360,
      repeat: -1,
      ease: 'none',
    });
  }
}
