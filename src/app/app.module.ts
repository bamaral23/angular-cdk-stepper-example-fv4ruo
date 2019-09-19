import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MyStepperComponent } from './my-stepper/my-stepper.component';
import { StepperTutorialComponent } from './stepper-tutorial/stepper-tutorial.component';
import { StepperExampleComponent } from './stepper-example/stepper-example.component';
import { MyStepperPropsComponent } from './my-stepper-props/my-stepper-props.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CdkStepperModule],
  declarations: [AppComponent, MyStepperComponent, StepperTutorialComponent, StepperExampleComponent, MyStepperPropsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
