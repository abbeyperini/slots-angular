import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "named-content-projection",
  template: `<div class="the-club">
    <!-- <ng-content select=".the-window"><p>The Window</p></ng-content> -->
    <ng-content select="the-window"><p>The Window</p></ng-content>
    <ng-content>Default</ng-content>
    <!-- <ng-content select=".the-wall"><p>The Wall</p></ng-content> -->
    <ng-content select="the-wall"><p>The Wall</p></ng-content>
    </div>`
})
export class NamedContentProjection { }