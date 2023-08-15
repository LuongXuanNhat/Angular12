import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectAngular';
  public name = "Lương Xuân Nhất";
  public age = 18;

  public resetname(): void {
    console.log('resetname');
  }
}
