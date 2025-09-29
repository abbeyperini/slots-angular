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
      <ng-content select="the-window"><p>The Window</p></ng-content>
      <ng-content><img src="confused-lil-jon.jpg" alt="lil jon saying 'what?!'" /></ng-content>
      <ng-content select="the-wall"><p>The Wall</p></ng-content>
      <ng-content select="[title='me']"></ng-content>
    </div>`,
})
export class NamedContentProjection { }