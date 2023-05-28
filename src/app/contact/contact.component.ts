import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  // templateUrl:'',
  // styleUrls: [''],
  template: `
  <section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1>Contact Me!</h1>
    </div>
  </div>
  <section class="section">
    <div class="container">
    <div class="container-form">
      <!-- contact form -->
      <form action="" (ngSubmit)="submitForm()">
      <!-- name -->
     <div class="field">
        <label class="label">Name</label>
        <input type="text" name="name" class="input" ng-model = "name" >
     </div> 
      <!-- email -->
      <div class="field">
        <label class="label">Email</label>
        <input type="email" name="email" class="input" ng-model="email">
      </div>
      <!-- message -->
      <div class="field">
        <label class="label">Your Message</label>
        <textarea name="message" id="" cols="5" rows="5" class="textarea" ng-model="message"></textarea>
      </div>
      <button type="submit" class="button is-large is-warning" style="font-size : 20px ; font-weight : 500 ; font-style : italic">SEND ME!!</button>
      </form>
      </div>
    </div>
    <img src="/assets/ImgSrc/photo-1575936123452-b67c3203c357.jpg" alt="">
  </section>
  </section>

  `,
  styles: [
    `
    .hero-body{
      background-color: #48c78e;
      color: #fff;
    }
    .section .container{
      background : white !important;
    }
    .container-form{
      float: left;
      width: 50%;   
    }
    img{
      float : right;
      width: 40%;
      border-radius : 20px;
    }
    `
  ]
})
export class ContactComponent implements OnInit {
  name = '';
  email = '' ;
  message = '' ;

  setValue() { 
    this.name = 'Millie Bobby Brown'; 
    this.email = 'upchh@example.com';
    this.message = 'Hello World!';
  }
  constructor() {
  }
  ngOnInit() {
  //create api call
  //create the form based on API fields
  }
  submitForm(){
    const message = `My name is ${this.name} , my email is ${this.email} and my message is ${this.message}`
    alert(message)
  }
}
