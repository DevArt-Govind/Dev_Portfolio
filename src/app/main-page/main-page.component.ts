import { Component, OnInit, } from '@angular/core';
// import anime from "animejs/lib/anime.es.js";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  ngOnInit(): void {

    // spinning text effect
    const text = document.getElementById("scroll-text");

    gsap.to(text, {
      duration: 4,
      rotation: 360,
      repeat: -1,
      ease: "none"
    });

    // text reveal effect
    let tl = gsap.timeline();

    tl.from(".hero-heading h1 ,.designer-text-img", {
      duration: 0.8,
      y: -200,
      autoAlpha: 0,
      ease: Power3.easeOut,
      stagger: 1.4
    }).from(".name-text-wrapper h1", {
      duration: 2.5, // Adjusted duration for a more gentle effect
      x: -200, // Reduced horizontal movement
      autoAlpha: 0,
      ease: "power2.out", // Changed easing to a smoother transition
      stagger: {
        each: 0.75,
        amount: 0.5
      }
    }, "+=0.25");

    // image reveal effect
    gsap.registerPlugin(ScrollTrigger);
    let container = document.querySelector(".profile-img") as HTMLElement;
    let image = container.querySelector("img") as HTMLElement;

    let tl_1 = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none pause"
      }
    });

    tl_1.set(container, { autoAlpha: 1 });
    tl_1.from(container, 1.5, {
      yPercent: 100,
      ease: Power2.easeOut
    });
    tl_1.from(image, 2, {
      yPercent: 100,
      scale: 1.3,
      delay: -3.5,
      ease: Power2.easeOut
    });

    //paragaph reveal effect
    const textrev = gsap.timeline();

    textrev.from(".hero-para p", {
      duration: 2.5,
      y: 200,
      ease: "power4.out",
      delay: 4.5,
      skewY: 10,
      stagger: {
        amount: 0.4,
      },
    });

    // bounce scroll text
    var bounce_obj = document.querySelector(".bounce-scroll-text") as HTMLElement;

    setTimeout(function () {
      // Set the opacity to 1 to show the element
      bounce_obj.style.opacity = "1";
      // Set the display property to "block" or "inline-block" depending on the element type
      bounce_obj.style.display = "block";
    }, 3000);
    // Define the duration for the animation
    var duration = 1;
    // Create a new GSAP timeline with repeat and repeatDelay
    var tl_2 = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    // Set the initial y-position of the element
    tl_2.set(bounce_obj, { y: 0 })
      // Add the first part of the animation with easing
      .to(bounce_obj, duration / 4, { y: +20, ease: Power2.easeOut }, "bounceme")
      // Add the second part of the animation with easing and delay
      .to(bounce_obj, duration / 2, { y: 0, ease: Bounce.easeOut, delay: duration / 4 }, "bounceme");


  }
}


