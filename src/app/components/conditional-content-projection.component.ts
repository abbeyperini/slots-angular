import { Component, inject, input, viewChild, TemplateRef, ViewContainerRef } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";

@Component({
  selector: "in-the-club",
  template: `
    <ng-template #lilJon><img src="confused-lil-jon.jpg" alt="lil jon saying 'what?!'" /></ng-template>
    <ng-template #peopleInTheClub [let-people]="people" ><img [src]="people()" alt="people in the club" /></ng-template>
  `
})
export class InTheClub {
  private viewContainer = inject(ViewContainerRef);
  people = input<string>();
  showPeople = input<boolean>(false);
  lilJon = viewChild<TemplateRef<unknown>>("lilJon");
  peopleInTheClub = viewChild<TemplateRef<unknown | undefined>>("peopleInTheClub");
  ngOnInit() {
    if (this.showPeople()) {
      this.viewContainer.createEmbeddedView(this.peopleInTheClub()!, {people: this.people });
    } else {
      this.viewContainer.createEmbeddedView(this.lilJon()!);
    }
  }
}
@Component({
  selector: "conditional-content-projection",
  imports: [NgTemplateOutlet, InTheClub],
  template: `<div class="club-container">
    <img src="/the-window.jpg" alt="the window" />
    <ng-template #lilJon><img src="confused-lil-jon.jpg" alt="lil jon saying 'what?!'" /></ng-template>
    <ng-template #peopleInTheClub [let-people]="people" ><img [src]="people()" alt="people in the club" /></ng-template>
    <ng-container *ngTemplateOutlet="lilJon"></ng-container>
    <!-- <ng-container [ngTemplateOutlet]="peopleInTheClub" [ngTemplateOutletContext]="people" class="club-container"></ng-container> -->
    <!-- <in-the-club [showPeople]="false" people="/club-people.jpeg"></in-the-club> -->
    <img src="/the-wall.png" alt="the wall" />
  </div>`
})
export class ConditionalContentProjection {
  people = input<string | undefined>();
  lilJon = viewChild<TemplateRef<unknown | undefined>>("lilJon");
  peopleInTheClub = viewChild<TemplateRef<unknown | undefined>>("peopleInTheClub");
}