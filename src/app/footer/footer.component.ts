import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer">
      <div class="container content has-text-centered">
            Made with ❤️ by MinhThanh from UIT
      </div>  
    </div>
  `,
  styles: [
    `
   .container content {
    width: 100%;
    }
    `
  ]
})
export class FooterComponent {

}
