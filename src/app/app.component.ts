import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultContentProjection } from './components/default-content-projection.component';
import { NamedContentProjection, TheWall, TheWindow } from './components/named-content-projection.component';
import { ConditionalContentProjection } from './components/conditional-content-projection.component';
import { ViewEncapsulationMode } from "./components/view-encapsulation-mode.component";
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, DefaultContentProjection, NamedContentProjection, TheWall, TheWindow, ConditionalContentProjection, ViewEncapsulationMode],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'slots';
}
