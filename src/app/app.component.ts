import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentProjection } from './content-projection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentProjection],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'slots';
}
