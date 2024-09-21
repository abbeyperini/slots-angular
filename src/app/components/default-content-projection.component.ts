import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "default-content-projection",
  template: `<div class="club-container">
      <img src="/the-window.jpg" alt="the window" />
      <ng-content><img src="confused-lil-jon.jpg" alt="lil jon saying 'what?!'" /></ng-content>
      <img src="/the-wall.png" alt="the wall" />
    </div>`
})
export class DefaultContentProjection { }