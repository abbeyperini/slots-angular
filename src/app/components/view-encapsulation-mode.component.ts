import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: "view-encapsulation-mode",
  encapsulation: ViewEncapsulation.ShadowDom,
  template: `
    <img src="/lil-lil-jon.jpg" alt="lil Jon's graduation photo in black and white he looks very young and is wearing round glasses" />
  `
})
export class ViewEncapsulationMode {}