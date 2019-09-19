import { Component, OnInit } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-my-stepper-props',
  templateUrl: './my-stepper-props.component.html',
  styleUrls: ['./my-stepper-props.component.css'],
  providers: [{ provide: CdkStepper, useExisting: MyStepperPropsComponent }]
})
export class MyStepperPropsComponent extends CdkStepper implements OnInit {

  ngOnInit() {
  }

  printSteps() {
    return this.steps.map(step => {
      return {
        completed: step.completed,
        hasError: step.hasError,
        editable: step.editable,
        label: step.label,
        interacted: step.interacted
      }
    })
  }

  printSelected() {
    return {
      completed: this.selected.completed,
      hasError: this.selected.hasError,
      editable: this.selected.editable,
      label: this.selected.label,
      interacted: this.selected.interacted
    }
  }

}