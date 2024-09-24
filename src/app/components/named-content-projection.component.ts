import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "named-content-projection",
  template: `<div class="club-container">
      <ng-content select=".the-window"><p>The Window</p></ng-content>
      <ng-content><img src="confused-lil-jon.jpg" alt="lil jon saying 'what?!'" /></ng-content>
      <ng-content select=".the-wall"><p>The Wall</p></ng-content>
    </div>`
})
export class NamedContentProjection { }