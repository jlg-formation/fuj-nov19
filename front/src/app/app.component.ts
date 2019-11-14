import { Component } from '@angular/core';
import { ReferenceService } from './service/reference.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private reference: ReferenceService) {}
}
