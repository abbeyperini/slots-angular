import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultContentProjection } from './components/default-content-projection.component';
import { NamedContentProjection } from './components/named-content-projection.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DefaultContentProjection, NamedContentProjection],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'slots';
}
