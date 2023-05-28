import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
  <section class="hero is-primary is-halfheight is-bold">
  <div class="hero-body">
    <p class="title">
      My homepage
    </p>
    <span>28/5/2023</span>
  </div>
  </section>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/ImgSrc/60294816e5abae001c5260be.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    .hero-body{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `
  ]
})
export class HomePageComponent {

}
