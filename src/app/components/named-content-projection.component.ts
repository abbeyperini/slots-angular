import { Component } from "@angular/core";

@Component({
  selector: 'the-wall',
  template: `<ng-content>The Wall</ng-content>`,
})
export class TheWall {}
@Component({
  selector: 'the-window',
  template: `<ng-content>The Window</ng-content>`,
})
export class TheWindow {}
@Component({
  selector: "named-content-projection",
  template: `<div class="club-container">
      <ng-content select="the-window"></ng-content>
      <ng-content><img src="confused-lil-jon.jpg" alt="lil jon saying 'what?!'" /></ng-content>
      <ng-content select="the-wall"></ng-content>
    </div>`
})
export class NamedContentProjection { }