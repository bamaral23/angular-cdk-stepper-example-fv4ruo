import { Component, OnInit } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';


@Component({
  selector: 'app-my-stepper',
  templateUrl: './my-stepper.component.html',
  styleUrls: ['./my-stepper.component.css'],
  /* ANGULAR: This custom stepper provides itself as CdkStepper so that it can be recognized
  / by other components. */
  /* ME: WTF why do you have to make this so complicated */
  providers: [{ provide: CdkStepper, useExisting: MyStepperComponent }]
})
export class MyStepperComponent extends CdkStepper implements OnInit {

  onClick(index: number): void {
    this.selectedIndex = index;
  }

  ngOnInit() {
  }

}