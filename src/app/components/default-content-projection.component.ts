import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "default-content-projection",
  template: `<div class="the-club">
    <p>The Window</p>
    <ng-content>Default</ng-content>
    <p>The Wall</p>
    </div>`
})
export class DefaultContentProjection { }