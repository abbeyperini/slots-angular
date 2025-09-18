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
      <ng-content select="the-window">The Window</ng-content>
      <ng-content><img src="confused-lil-jon.jpg" alt="lil jon saying 'what?!'" /></ng-content>
      <ng-content select="the-wall">The Wall</ng-content>
      <ng-content select="[title='select me']"></ng-content>
    </div>`,
})
export class NamedContentProjection { }