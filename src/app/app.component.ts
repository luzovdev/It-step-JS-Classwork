import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-new';
  text = 'Valerchik say Hello';
  name = 'John';

  getTitle() : string {
    return this.title
  }
}
